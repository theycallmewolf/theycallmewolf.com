import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { RichText } from 'prismic-dom';
import { useEffect } from 'react';

import { Footer } from '../components/layouts/Footer';
import { Header } from '../components/layouts/Header';
import { About } from '../components/sections/About';
import { Banner } from '../components/sections/Banner';
// import { Blog } from '../components/sections/Blog';
import { Clients } from '../components/sections/Clients';
import { Projects } from '../components/sections/Projects';
import { Testimonials } from '../components/sections/Testimonials';
import { useTheme } from '../hooks/useTheme';
import { getPrismicClient } from '../services/prismic';
import { ClientData, GraphData, PostData, ProjectData, TestimonialData } from '../types';
import { formatDate } from '../utils/format-date';

interface HomeProps {
  projects: ProjectData[];
  clients: ClientData[];
  posts: PostData[];
  testimonials: TestimonialData[];
  skills: GraphData[];
}

export default function Home({ projects, clients, testimonials, skills }: HomeProps): JSX.Element {
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
  const prismic = getPrismicClient();

  async function getPosts(): Promise<PostData[]> {
    const response = await prismic.query(Prismic.predicates.at('document.type', 'posts'), {
      orderings: '[document.last_publication_date]',
      fetch: ['posts.title', 'posts.lead', 'posts.content'],
      pageSize: 2,
      lang: 'en-us'
    });

    return response.results.map(
      ({ id, uid, data, first_publication_date, last_publication_date }) => {
        const { title, lead } = data;
        return {
          id,
          slug: uid,
          title: RichText.asText(title),
          lead: RichText.asText(lead),
          publish_date: formatDate(first_publication_date),
          update_date: formatDate(last_publication_date)
        };
      }
    );
  }

  async function getProjects(): Promise<ProjectData[]> {
    const response = await prismic.query(Prismic.predicates.at('document.type', 'projects'), {
      orderings: '[document.last_publication_date]',
      fetch: [
        'projects.title',
        'projects.image_large',
        'projects.image_small',
        'projects.image_large_2x',
        'projects.image_small_2x',
        'projects.caption',
        'projects.type',
        'projects.highlight',
        'projects.project_date'
      ],
      pageSize: 8,
      lang: 'en-us'
    });

    return response.results
      .map(({ id, uid, data }) => {
        const {
          type,
          project_date,
          title,
          image_small,
          image_small_2x,
          image_large,
          image_large_2x,
          caption,
          highlight
        } = data;

        return {
          id,
          type,
          title: RichText.asText(title) ?? null,
          slug: uid,
          project_date: String(new Date(project_date).getFullYear()),
          slider: {
            image_small: image_small.url ?? null,
            image_small_2x: image_small_2x.url ?? (image_small.url || null),
            image_large: image_large.url ?? null,
            image_large_2x: image_large_2x.url ?? (image_large.url || null),
            caption: RichText.asText(caption) ?? null
          },
          highlight
        };
      })
      .filter((project) => project.highlight);
  }

  async function getClients(): Promise<ClientData[]> {
    const response = await prismic.query(Prismic.predicates.at('document.type', 'clients'), {
      orderings: '[my.clients.name desc]',
      fetch: ['clients.uid', 'clients.name', 'clients.logo_svg', 'clients.link'],
      pageSize: 4
    });

    return response.results.map(({ id, data }) => {
      const { name, logo_svg, link } = data;

      return {
        id,
        name,
        logo_svg: RichText.asText(logo_svg),
        link: link.url ?? null
      };
    });
  }

  async function getTestimonials(): Promise<TestimonialData[]> {
    const response = await prismic.query(Prismic.predicates.at('document.type', 'testimonials'), {
      orderings: '[document.last_publication_date desc]',
      fetch: ['testimonials.quote', 'testimonials.name', 'testimonials.job_title']
    });

    return response.results.map(({ id, first_publication_date, last_publication_date, data }) => {
      const { name, quote, job_title } = data;

      return {
        id,
        name: RichText.asText(name),
        quote: quote.map(({ text }) => text),
        jobTitle: RichText.asText(job_title),
        publish_date: formatDate(first_publication_date),
        update_date: formatDate(last_publication_date)
      };
    });
  }

  async function getSkills(): Promise<GraphData[]> {
    const response = await prismic.query(Prismic.Predicates.at('document.type', 'skills_graphs'), {
      orderings: '[my.skills_graphs.highlight_order]',
      fetch: ['testimonials.quote', 'testimonials.name', 'testimonials.job_title']
    });
    return response.results
      .filter(({ data }) => data.highlight)
      .map(({ id, data }) => {
        const { title, percentage, category } = data;
        return {
          id,
          title: RichText.asText(title),
          percentage,
          category
        };
      });
  }

  const posts = await getPosts();
  const projects = await getProjects();
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
