import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import '../themes/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{'La Batzleine'}</title>
        <meta property='og:title' content='La Batzleine' key='title' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default appWithTranslation(MyApp);
