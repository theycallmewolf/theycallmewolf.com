import '../styles/global.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/effect-fade/effect-fade.min.css';
import '../components/elements/Slider/styles.scss';

import type { AppProps } from 'next/app';

import { Chat } from '../components/elements/Chat';
import { AppProvider } from '../hooks';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AppProvider>
      <Component {...pageProps} />
      <Chat />
    </AppProvider>
  );
}

export default MyApp;
