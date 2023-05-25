import { Analytics } from "@vercel/analytics/react";
import { SpotifyNotification } from "components/elements/SpotifyNotification";
import { Metadata } from "components/metadata";
import { ContactForm } from "components/sections/Common/ContactForm";
import { AppProvider } from "hooks";
import { useTheme } from "hooks";
import { usePWABanner } from "hooks/usePWABanner";
import { useEffect } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";
import styles from "./layout.module.scss";
interface LayoutProps {
  title: string;
  description: string;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <AppProvider>
      <Metadata title={props.title} description={props.description} />
      <Page>{props.children}</Page>
      <ContactForm />
      <SpotifyNotification />
      <Analytics />
    </AppProvider>
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
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </>
  );
};
