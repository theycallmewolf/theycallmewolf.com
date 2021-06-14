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

type ProjectData = {
  id: string;
  slider: SliderData;
  title: string;
  slug: string;
  type: string;
  highlight: boolean;
};

type ClientData = {
  id: string;
  name: string;
  link: string;
  logoSVG: string;
};

type PostData = {
  id: string;
  title: string;
  lead: string;
  slug: string;
  updateDate: string;
};

type TestimonialData = {
  id: string;
  quote: string;
  name: string;
  jobTitle: string;
  publishDate: string;
  updateDate: string;
};

interface HomeProps {
  projects: ProjectData[];
  clients: ClientData[];
  posts: PostData[];
  testimonials: TestimonialData[];
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
  const postsResponse = await getContent({
    type: 'posts',
    fields: ['title', 'lead', 'content'],
    quantity: 2
  });

  const posts: PostData[] = postsResponse.map((post) => {
    const { id, slug, title, lead, dates } = post;
    const { publishDate, updateDate } = dates;

    return {
      id,
      slug,
      title,
      lead,
      publishDate,
      updateDate
    };
  });

  const projectsResponse = await getContent({
    type: 'projects',
    fields: ['title', 'imageurl', 'caption']
  });

  let projects: ProjectData[] = projectsResponse.map((project) => {
    const { id, slug, title, images, dates, type, highlight } = project;
    const { slider } = images;
    const { publishDate, updateDate } = dates;
    const { caption, image_large, image_small } = slider;

    return {
      id,
      slug,
      type,
      title,
      slider: {
        image_large,
        image_small,
        caption
      },
      highlight,
      publishDate,
      updateDate
    };
  });

  projects = projects.filter((project) => project.highlight);

  const clientsResponse = await getContent({
    type: 'clients',
    fields: ['uid', 'name', 'logo_svg', 'link']
  });

  const clients: ClientData[] = clientsResponse.map((client) => {
    const { id, slug, name, logoSVG, links, dates } = client;
    const { link } = links;
    const { updateDate, publishDate } = dates;

    return {
      id,
      slug,
      name,
      logoSVG,
      link: link ?? null,
      publishDate,
      updateDate
    };
  });

  const testimonialsResponse = await getContent({
    type: 'testimonials',
    fields: ['quote', 'name', 'job_title']
  });

  const testimonials: TestimonialData[] = testimonialsResponse.map((testimonial) => {
    const { id, slug, name, quote, jobTitle, dates } = testimonial;
    const { publishDate, updateDate } = dates;

    return {
      id,
      slug,
      name,
      quote,
      jobTitle,
      publishDate,
      updateDate
    };
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
