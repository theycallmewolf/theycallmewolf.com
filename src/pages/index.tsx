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
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { getClients, getPosts, getProjects, getSkills, getTestimonials } from 'services/prismic';
import { ClientData, GraphData, PostData, ProjectData, TestimonialData } from 'types';
import { deviceCheck } from 'utils';

interface HomeProps {
  projects: ProjectData[];
  clients: ClientData[];
  posts: PostData[];
  testimonials: TestimonialData[];
  skills: GraphData[];
}

export default function Home({ projects, clients, testimonials, skills }: HomeProps): JSX.Element {
  const [toastID, setToastID] = useState('');
  const { getTheme } = useTheme();
  const { addToast, hasClosed } = useToast();

  useEffect(getTheme);

  useEffect(() => {
    const hasSeenBanner = localStorage.getItem('@wolf_pwa');
    const diffTime = Math.abs(Date.now() - Number(hasSeenBanner));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays > 30) localStorage.removeItem('@wolf_pwa');

    if (!hasSeenBanner) {
      setTimeout(() => {
        const { isAndroid, isIOS } = deviceCheck();
        const isInstalled = window.matchMedia('(display-mode: standalone)').matches;
        if (!isInstalled) {
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
        }
      }, 45 * 1000);
    }
  }, []);

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
}

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
    revalidate: 60 * 60 * 1 // 1 hour
  };
};
