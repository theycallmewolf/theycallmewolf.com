import { Analytics } from '@vercel/analytics/react';
import { ContactForm } from 'components/sections/Common/ContactForm';
import { SpotifyNotification } from 'components/elements/SpotifyNotification';
import { Metadata } from 'components/metadata';
import { AppProvider } from 'hooks';
import { useTheme } from 'hooks';
import { usePWABanner } from 'hooks/usePWABanner';
import { useEffect } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';

interface LayoutProps {
  title: string;
  description: string;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Metadata title={props.title} description={props.description} />
      <AppProvider>
        <Page>{props.children}</Page>
      </AppProvider>
      <ContactForm />
      <SpotifyNotification />
      <Analytics />
    </>
  );
};

const Page: React.FC = (props) => {
  const { getTheme } = useTheme();
  const { checkPWABanner } = usePWABanner();

  useEffect(getTheme);
  useEffect(checkPWABanner);

  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
