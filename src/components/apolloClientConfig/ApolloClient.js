import fetch from 'node-fetch';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';
import { setContext } from '@apollo/client/link/context';
import { ApolloLink } from 'apollo-link';
import { onError } from '@apollo/client/link/error';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import wooConfig from '../../../wooconfig';

import fragmentMatcher from './fragmentMatcher';

const cache = new InMemoryCache({
  fragmentMatcher,
  typePolicies: {
    Query: {
      fields: {
        products: relayStylePagination(),
        posts: relayStylePagination(),
      },
    },
  },
});

const ifTokenIsExpired = (token) => {
  const { exp } = jwt_decode(token);
  return Date.now() > exp * 1000;
};

const basic = setContext((operation, context) => ({
  headers: {
    Accept: 'charset=utf-8',
    // 'Access-Control-Allow-Credentials': true,
  },
}));

/**
 * Afterware operation
 * This catches the incoming session token and stores it in localStorage, for future GraphQL requests.
 */
const woosSessionAfterware = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    /**
     * Check for session header and update session in local storage accordingly.
     */
    const context = operation.getContext();
    const {
      response: { headers },
    } = context;
    const session = headers.get('woocommerce-session');
    if (session) {
      if (localStorage.getItem('woocom_session') !== session) {
        localStorage.setItem('woocom_session', session);
      }
      Cookies.set('woocom_session', session, {
        SameSite: 'None',
        secure: true,
      });
    }

    return response;
  });
});

/**
 * Middleware operation
 * If we have a session token in localStorage, add it to the GraphQL request as a Session header.
 */

const woosSessionMiddleware = new ApolloLink((operation, forward) => {
  /**
   * If session data exist in local storage, set value as session header.
   */

  let session = process.browser ? localStorage.getItem('woocom_session') : null;
  if (session) {
    if (ifTokenIsExpired(session)) {
      localStorage.removeItem('woocom_session');
      Cookies.remove('woocom_session');
    } else {
      const existingHeaders = operation.getContext().headers;
      if (session) {
        operation.setContext(({ headers = {} }) => ({
          headers: {
            ...existingHeaders,
            'woocommerce-session': `Session ${session}`,
          },
        }));
      }
    }
  }

  return forward(operation);
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      if (process.env.NODE_ENV === 'development') {
        console.log(
          `GraphQL Error: ${message} path=${path} location:${locations}`
        );
      }
    });
    if (process.env.NODE_ENV === 'development') {
      console.log('graphQLErrors', graphQLErrors);
    }
  }
  if (networkError) {
    if (process.env.NODE_ENV === 'development') {
      console.log(`Network Error: ${networkError.message}`);
    }
  }
});

const API = new HttpLink({
  uri: wooConfig.CMS_GRAPHQL_URL,
  fetch: fetch,
  // fetchOptions: {
  //   mode: 'no-cors',
  // },
});

const apolloClient = new ApolloClient({
  link: ApolloLink.from([
    basic,
    errorLink,
    woosSessionMiddleware,
    woosSessionAfterware,
    API,
  ]),
  cache: cache,
});

export default apolloClient;
