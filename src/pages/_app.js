import Script from 'next/script';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = dynamic(() => import('../components/sections/footers'), {
  ssr: false,
});

const Header = dynamic(() => import('../components/sections/headers'), {
  ssr: false,
});

const ScrollToTop = dynamic(() =>
  import('../components/utilities/ScrollToTop')
);

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('/node_modules/jquery/dist/jquery.min.js').then(($) => {
      // jQuery must be installed to the `window`:
      window.$ = window.jQuery = $;
      import('/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js');
    });
  }, []);

  return (
    <>
      <Script
        id="1"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${
          process.env.NEXT_PUBLIC_GA_TRACKING_ID || null
        }`}
      />
      <Script id="2" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID || null}');`}
      </Script>

      <div id="portal" />
      <Header />

      <Component {...pageProps} />

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default MyApp;
