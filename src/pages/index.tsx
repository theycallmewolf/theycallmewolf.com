import { Layout } from "components/Layout";
// import { Blog } from 'components/sections';
import { About } from "components/sections/Home/About";
import { Banner } from "components/sections/Home/Banner";
import { Clients } from "components/sections/Home/Clients";
import { Projects } from "components/sections/Home/Projects";
import { Testimonials } from "components/sections/Home/Testimonials";
import { GetStaticProps } from "next";
import { ReactElement } from "react";
import {
  getClients,
  getPosts,
  getProjects,
  getSkills,
  getTestimonials,
} from "services/prismic";
import { HomeProps } from "types";

import { NextPageWithLayout } from "./_app";

const HomePage: NextPageWithLayout<HomeProps> = (props) => {
  return (
    <>
      <Banner />
      <About skills={props.skills} />
      <Projects projects={props.projects} />
      <Testimonials testimonials={props.testimonials} />
      <Clients clients={props.clients} />
      {/* <Blog posts={props.posts} /> */}
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      title="HOME"
      description="Web portfolio of Bruno Lobato, coder + designer."
    >
      {page}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const [posts, highlightedProjects, clients, testimonials, skills] =
    await Promise.all([
      getPosts(),
      getProjects().then((proj) => proj.filter(({ highlight }) => highlight)),
      getClients(),
      getTestimonials(),
      getSkills(),
    ]);

  return {
    props: {
      projects: highlightedProjects,
      clients,
      posts,
      testimonials,
      skills,
    },
    revalidate: 60, // secs
  };
};
