import {
  About,
  Banner,
  Clients,
  Footer,
  Header,
  Projects,
  Testimonials
} from 'components/sections';
// import { Blog } from 'components/sections';
import { useTheme } from 'hooks/useTheme';
import { useToast } from 'hooks/useToast';
import { NextPage } from 'next';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';
import { COLORS } from 'theme';
import { HomeProps } from 'types';
import { deviceCheck } from 'utils';

const Home: NextPage<HomeProps> = ({ projects, clients, testimonials, skills }) => {
  const [toastID, setToastID] = useState('');
  const { getTheme, hasDarkMode } = useTheme();
  const { addToast, hasClosed } = useToast();

  const checkPWABanner = useCallback(() => {
    const hasSeenBanner = localStorage.getItem('@wolf_pwa');
    const diffTime = Math.abs(Date.now() - Number(hasSeenBanner));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays > 30) localStorage.removeItem('@wolf_pwa');

    if (hasSeenBanner) return;

    setTimeout(() => {
      const { isAndroid, isIOS } = deviceCheck();
      const isInstalled = window.matchMedia('(display-mode: standalone)').matches;

      if (isInstalled) return;

      if (isIOS || isAndroid) {
        const description = isIOS
          ? 'Tap on the share button below, then "Add to Home screen".'
          : 'Open the More menu by tapping on the three vertical dots button (top right), then "Add to Home screen".';

        const { id } = addToast({
          title: 'Have an app-like experience!',
          description,
          type: 'info',
          duration: 60 * 1000
        });

        setToastID(id);
      }
    }, 1000 * 45);
  }, [addToast]);

  useEffect(getTheme);
  useEffect(checkPWABanner);

  useEffect(() => {
    const { status, id } = hasClosed;
    if (status && toastID === id) localStorage.setItem('@wolf_pwa', String(Date.now()));
  }, [hasClosed, toastID]);

  return (
    <>
      <Head>
        <title>they call me wolf | home</title>
        <meta
          name="description"
          content="They call me wolf is the web portfolio of Bruno Lobato, a designer since 2001 that felt in love with coding around 2014."
        />
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color={hasDarkMode ? COLORS.COSMOS_BLACK : COLORS.IRIDIUM_WHITE}
        />
        <meta
          name="msapplication-TileColor"
          content={hasDarkMode ? COLORS.COSMOS_BLACK : COLORS.IRIDIUM_WHITE}
        />
        <meta
          name="theme-color"
          content={hasDarkMode ? COLORS.COSMOS_BLACK : COLORS.IRIDIUM_WHITE}
        />
      </Head>
      <Header />
      <main>
        <Banner />
        <About skills={skills} />
        <Projects projects={projects} />
        <Testimonials testimonials={testimonials} />
        <Clients clients={clients} />
        {/* <Blog posts={posts} /> */}
      </main>
      <Footer />
    </>
  );
};

export default Home;
