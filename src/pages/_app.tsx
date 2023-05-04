import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'styles/global.scss';
import 'components/elements/Slider/styles.scss';

import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactElement, ReactNode, useCallback, useEffect } from 'react';
import { pageView } from 'utils/google-analytics';
import { setViewportHeight } from 'utils/viewport-height';

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout): ReactNode {
  const router = useRouter();

  const getLayout = Component.getLayout ?? ((page) => page);

  const handleGoogleAnalytics = useCallback(() => {
    const handleRouteChange = (url: string) => pageView(url);
    /*
     * When the component is mounted, subscribe to router changes
     * and log those page views
     */
    router.events.on('routeChangeComplete', handleRouteChange);

    /*
     *  If the component is unmounted, unsubscribe
     * from the event with the `off` method
     */
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(handleGoogleAnalytics);
  useEffect(setViewportHeight);

  return getLayout(
    <>
      <Head>
        {/**
         * Tip: Put the viewport head meta tag into _app.js
         * rather than in _document.js if you need it.
         * @see https://www.npmjs.com/package/next-pwa
         */}
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
