import { Layout } from 'components/layout';
import { About, Banner, Clients, Projects, Testimonials } from 'components/sections';
// import { Blog } from 'components/sections';
import { useTheme } from 'hooks';
import { usePWABanner } from 'hooks/usePWABanner';
import { GetStaticProps } from 'next';
import { ReactElement, useEffect } from 'react';
import { getClients, getPosts, getProjects, getSkills, getTestimonials } from 'services/prismic';
import { HomeProps } from 'types';

import { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout<HomeProps> = (props) => {
  const { checkPWABanner } = usePWABanner();
  const { getTheme } = useTheme();

  useEffect(getTheme);
  useEffect(checkPWABanner);

  return (
    <main>
      <Banner />
      <About skills={props.skills} />
      <Projects projects={props.projects} />
      <Testimonials testimonials={props.testimonials} />
      <Clients clients={props.clients} />
      {/* <Blog posts={props.posts} /> */}
    </main>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title={'HOME'} description={'@TODO'}>
      {page}
    </Layout>
  );
};

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
