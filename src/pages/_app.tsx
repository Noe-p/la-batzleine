import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default appWithTranslation(MyApp);
