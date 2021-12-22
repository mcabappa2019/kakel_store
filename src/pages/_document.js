/* eslint-disable @next/next/no-css-tags */

import Document, { Html, Head, Main, NextScript } from 'next/document';
import wooConfig from '../../wooconfig';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const { req, query, res, asPath, pathname } = ctx;

    return { ...initialProps, asPath: asPath };
  }

  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <meta name="application-name" content={wooConfig.SITE_TITLE} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="apple-mobile-web-app-title"
            content={wooConfig.SITE_TITLE}
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#FFFFFF" />
          {/* TIP: set viewport head meta tag in _app.js, otherwise it will show a warning */}
          {/* <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' /> */}

          <link
            rel="shortcut icon"
            href="/img/favicon.ico"
            type="image/x-icon"
          />
          <link
            rel="apple-touch-icon"
            type="image/x-icon"
            href="/img/apple-touch-icon-57x57-precomposed.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/x-icon"
            sizes="72x72"
            href="/img/apple-touch-icon-72x72-precomposed.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/x-icon"
            sizes="114x114"
            href="/img/apple-touch-icon-114x114-precomposed.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/x-icon"
            sizes="144x144"
            href="/img/apple-touch-icon-144x144-precomposed.png"
          />

          {/* <link rel="manifest" href="/manifest.json" /> */}

          {/* <!-- GOOGLE WEB FONT --> */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap"
            rel="stylesheet preload prefetch"
            as="style"
            type="text/css"
          />

          <link
            href="/css/bootstrap.min.css"
            rel="stylesheet preload prefetch"
            as="style"
            type="text/css"
          />

          {/* <!-- BASE CSS --> */}

          <link
            href="/css/style.css"
            rel="stylesheet preload prefetch"
            as="style"
            type="text/css"
          />

          {/* <!-- YOUR CUSTOM CSS --> */}
          <link
            href="/css/custom.css"
            rel="stylesheet preload prefetch"
            as="style"
            type="text/css"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
          {/* <script src="https://checkout.razorpay.com/v1/checkout.js"></script> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
