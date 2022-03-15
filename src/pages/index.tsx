import { GetStaticProps, NextPage } from 'next';
import HomePage from 'pages/home';
import { getClients, getPosts, getProjects, getSkills, getTestimonials } from 'services/prismic';
import { HomeProps } from 'types';

const Home: NextPage<HomeProps> = ({ projects, clients, testimonials, skills, posts }) => {
  const props = { projects, clients, testimonials, skills, posts };
  return <HomePage {...props} />;
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
    revalidate: 60 * 60 * 1 // 1 hour
  };
};
