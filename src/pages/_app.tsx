import 'styles/global.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/effect-fade/effect-fade.min.css';
import 'components/elements/Slider/styles.scss';

import { ContactForm, SpotifyNotification } from 'components/elements';
import { AppProvider } from 'hooks';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import { pageView } from 'utils/google-analytics';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

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

  return (
    <AppProvider>
      <Component {...pageProps} />
      <ContactForm />
      <SpotifyNotification />
    </AppProvider>
  );
};

export default MyApp;
