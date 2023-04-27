import { Analytics } from '@vercel/analytics/react';
import { ContactForm, SpotifyNotification } from 'components/elements';
import { Metadata } from 'components/metadata';
import { AppProvider } from 'hooks';

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
        <Header />
        {props.children}
        <Footer />
      </AppProvider>
      <ContactForm />
      <SpotifyNotification />
      <Analytics />
    </>
  );
};
