import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';

import introspectionQueryResultData from './fragment/fragmentTypes.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});

export default fragmentMatcher;
