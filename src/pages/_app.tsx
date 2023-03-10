import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ComponentType, ReactElement, ReactNode } from 'react';
import { DefaultSeo } from 'next-seo';
import { SEOValues } from '../../next-seo.config';
import 'focus-visible';
import '@styles/global.css';

type NextPageWithLayout<P = {}> = NextPage<P> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (_page: ReactElement) => ReactNode;
  layout?: ComponentType;
};

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || (page => page);

  return getLayout(
    <>
      <DefaultSeo {...SEOValues} />
      <Component {...pageProps} />
    </>
  );
}

export default App;
