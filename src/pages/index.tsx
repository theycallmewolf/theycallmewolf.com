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
import { useTheme } from 'hooks';
import { usePWABanner } from 'hooks/usePWABanner';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { getClients, getPosts, getProjects, getSkills, getTestimonials } from 'services/prismic';
import { COLORS } from 'theme';
import { HomeProps } from 'types';

const Home: NextPage<HomeProps> = ({ projects, clients, testimonials, skills }) => {
  const { checkPWABanner } = usePWABanner();

  const { getTheme, hasDarkMode } = useTheme();

  useEffect(getTheme);
  useEffect(checkPWABanner);

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

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();
  const projects = (await getProjects()).filter((project) => project.highlight);
  const clients = await getClients();
  const testimonials = await getTestimonials();
  const skills = await getSkills();

  return {
    props: {
      projects,
      clients,
      posts,
      testimonials,
      skills
    },
    revalidate: 60 // secs
  };
};
