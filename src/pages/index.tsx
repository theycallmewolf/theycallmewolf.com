import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Button } from '../components/Button';
import { BlogCard } from '../components/Cards/BlogCard';
import { HomeCard } from '../components/Cards/HomeCard';
import { Header } from '../components/Header';
import { Intro } from '../components/Intro';
import { LogoButton } from '../components/LogoButton';
import { Slider } from '../components/Slider';
import styles from './Home.module.scss';
import { api } from './services/api';

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
};

interface HomeProps {
  projects: Project[];
  clients: Client[];
  posts: Post[];
}

export default function Home({ projects, clients, posts }: HomeProps): JSX.Element {
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
      <main className={styles.main}>
        <Intro />
        <section className={styles.action}>
          <Button type="button" genre="outline" onClick={() => console.log('bananas')}>
            say “hello, wolf!”
          </Button>
        </section>
        <HomeCard />
        <section className={styles.projects}>
          <h2>Projects</h2>
          <Slider slides={projects} />
        </section>
        <section className={styles.clients}>
          {clients.map((client) => (
            <LogoButton key={client.id} svgLogo={client.logoSVG} url={client.URL} />
          ))}
        </section>
        <section className={styles.blog}>
          {posts.map((post) => (
            <BlogCard key={post.id} title={post.title} lead={post.lead} />
          ))}
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projectsResponse = await api.get('projects');
  const projects = projectsResponse.data;

  const clientsResponse = await api.get('clients');
  const clients = clientsResponse.data;

  const blogResponse = await api.get('blog');
  const blogPosts: Post[] = blogResponse.data.splice(0, 2);

  const posts = blogPosts.map((post) => ({
    id: post.id,
    title: post.title,
    lead: post.lead,
    slug: post.slug
  }));

  return {
    props: {
      projects,
      clients,
      posts
    },
    revalidate: 60 * 60 * 24 // 24 hours
  };
};
