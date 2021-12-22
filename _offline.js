import Head from 'next/head';
import React from 'react';

const NextImageLoader = dynamic(
  () => import('./src/components/utilities/NextImageLoader'),
  { ssr: false }
);

const Offline = () => {
  return (
    <>
      <Head>
        <title>G-NEXT STORE</title>
      </Head>
      <div className="container margin_60 text-center">
        <h4>You are offline!</h4>
        <NextImageLoader src="/img/offline-icon.jpg" width="200" height="200" />
        <h5>Check Your Internet Connection.</h5>
      </div>
    </>
  );
};

export default Offline;
