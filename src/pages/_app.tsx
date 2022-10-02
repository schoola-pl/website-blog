import React from 'react';
import type { AppProps } from 'next/app';
import MainTemplate from 'components/templates/MainTemplate';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MainTemplate>
    <Component {...pageProps} />
  </MainTemplate>
);

export default MyApp;
