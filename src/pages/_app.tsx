import '../styles/global.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/effect-fade/effect-fade.min.css';
import '../components/elements/Slider/styles.scss';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { ContactForm } from '../components/elements/ContactForm';
import { SpotifyNotification } from '../components/elements/SpotifyNotification';
import { AppProvider } from '../hooks';
import { pageView } from '../utils/google-analytics';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageView(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <AppProvider>
      <Component {...pageProps} />
      <ContactForm />
      <SpotifyNotification />
    </AppProvider>
  );
}

export default MyApp;
