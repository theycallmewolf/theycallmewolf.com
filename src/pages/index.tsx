import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { RichText } from 'prismic-dom';

import { Button } from '../components/elements/Button';
import { Footer } from '../components/layouts/Footer';
import { Header } from '../components/layouts/Header';
import { About } from '../components/sections/About';
import { Blog } from '../components/sections/Blog';
import { Clients } from '../components/sections/Clients';
import { Intro } from '../components/sections/Intro';
import { Projects } from '../components/sections/Projects';
import { Testimonials } from '../components/sections/Testimonials';
import { api } from '../services/api';
import { getPrismicClient } from '../services/prismic';

type Project = {
  id: number;
  imageURL: string;
  caption: string;
  title: string;
};

type Client = {
  id: number;
  name: string;
  URL: string;
  logoSVG: string;
};

type Post = {
  id: number;
  title: string;
  lead: string;
  slug: string;
  updatedAt: string;
};

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  jobDescription: string;
  date: string;
};

interface HomeProps {
  projects: Project[];
  clients: Client[];
  posts: Post[];
  testimonials: Testimonial[];
}

export default function Home({ projects, clients, posts, testimonials }: HomeProps): JSX.Element {
  return (
    <>
      <Head>
        <title>they call me wolf | home</title>
        <meta
          name="description"
          content="They call me wolf is the web portfolio of Bruno Lobato, a designer since 2001 that felt in love with coding around 2016."
        />
      </Head>
      <Header />
      <main>
        <Intro />
        <Button
          type="button"
          genre="outline"
          customClass="call-to-action"
          onClick={() => console.log('bananas')}>
          say “hello, wolf!”
        </Button>
        <About />
        <Projects projects={projects} />
        <Clients clients={clients} />
        <Testimonials testimonials={testimonials} />
        <Blog posts={posts} />
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const responsePosts = await prismic.query(Prismic.predicates.at('document.type', 'posts'), {
    fetch: ['title', 'lead', 'content'],
    pageSize: 2
  });

  const posts = responsePosts.results.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      lead: RichText.asText(post.data.lead),
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-PT', {
        weekday: 'short',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    };
  });

  const projectsResponse = await api.get('projects');
  const projects = projectsResponse.data.projects;

  const clientsResponse = await api.get('clients');
  const clients = clientsResponse.data.clients;

  const testimonialsResponse = await api.get('testimonials');
  const testimonials = testimonialsResponse.data.testimonials;

  return {
    props: {
      projects,
      clients,
      posts,
      testimonials
    },
    revalidate: 60 * 60 * 24 // 24 hours
  };
};
