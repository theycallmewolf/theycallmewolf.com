import { Analytics } from '@vercel/analytics/react';
import { ContactForm, SpotifyNotification } from 'components/elements';
import { Metadata } from 'components/metadata';
import { AppProvider } from 'hooks';
import { useTheme } from 'hooks';
import { useEffect } from 'react';

import { Footer } from './sections/Footer';
import { Header } from './sections/Header';

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
  useEffect(getTheme);

  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
