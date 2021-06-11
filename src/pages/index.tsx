import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';

import { Button } from '../components/elements/Button';
import { Footer } from '../components/layouts/Footer';
import { Header } from '../components/layouts/Header';
import { About } from '../components/sections/About';
import { Banner } from '../components/sections/Banner';
import { Blog } from '../components/sections/Blog';
import { Clients } from '../components/sections/Clients';
import { Projects } from '../components/sections/Projects';
import { Testimonials } from '../components/sections/Testimonials';
import { useTheme } from '../hooks/useTheme';
import { getContent } from '../services/prismic';

type SliderData = {
  image_small: string;
  image_large: string;
  caption: string;
};

type Project = {
  id: number;
  slider: SliderData;
  title: string;
  slug: string;
};

type Client = {
  id: number;
  name: string;
  link: string;
  logoSVG: string;
};

type Post = {
  id: number;
  title: string;
  lead: string;
  slug: string;
  updateDate: string;
};

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  jobTitle: string;
  date: string;
};

interface HomeProps {
  projects: Project[];
  clients: Client[];
  posts: Post[];
  testimonials: Testimonial[];
}

export default function Home({ projects, clients, posts, testimonials }: HomeProps): JSX.Element {
  const { getTheme } = useTheme();

  useEffect(() => {
    getTheme();
  }, [getTheme]);

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
        <Banner />
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

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getContent({
    type: 'posts',
    fields: ['title', 'lead', 'content'],
    quantity: 2
  });

  const projects = await getContent({
    type: 'projects',
    fields: ['title', 'imageurl', 'caption']
  });

  const clients = await getContent({
    type: 'clients',
    fields: ['uid', 'name', 'logo_svg', 'link']
  });

  const testimonials = await getContent({
    type: 'testimonials',
    fields: ['quote', 'name', 'job_title']
  });

  return {
    props: {
      projects,
      clients,
      posts,
      testimonials
    }
  };
};
