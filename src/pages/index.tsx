import { Layout } from 'components/layout';
import { About, Banner, Clients, Projects, Testimonials } from 'components/sections';
// import { Blog } from 'components/sections';
import { GetStaticProps } from 'next';
import { ReactElement } from 'react';
import { getClients, getPosts, getProjects, getSkills, getTestimonials } from 'services/prismic';
import { HomeProps } from 'types';

import { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout<HomeProps> = (props) => {
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
    <Layout title="HOME" description="Web portfolio of Bruno Lobato, coder + designer.">
      {page}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const [posts, highlightedProjects, clients, testimonials, skills] = await Promise.all([
    getPosts(),
    getProjects().then((proj) => proj.filter(({ highlight }) => highlight)),
    getClients(),
    getTestimonials(),
    getSkills()
  ]);

  return {
    props: {
      projects: highlightedProjects,
      clients,
      posts,
      testimonials,
      skills
    },
    revalidate: 60 // secs
  };
};
