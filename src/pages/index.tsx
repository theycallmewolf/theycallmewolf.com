import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Button } from '../components/Button';
import { BlogCard } from '../components/Cards/BlogCard';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { About } from '../components/sections/About';
import { Clients } from '../components/sections/Clients';
import { Intro } from '../components/sections/Intro';
import { Projects } from '../components/sections/Projects';
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
      <main className={styles.main}>
        <Intro />
        <Button
          type="button"
          genre="outline"
          customClass={styles.callToAction}
          onClick={() => console.log('bananas')}>
          say “hello, wolf!”
        </Button>
        <About />
        <Projects projects={projects} />
        <Clients clients={clients} />
        <section className={styles.testimonials}>
          <div className={styles.cover}></div>
          <Slider testimonials={testimonials} contentType="testimonial" />
        </section>
        <section className={styles.blog}>
          <div className={styles.intro}>
            <h2>Wolf Bytes</h2>
            <small>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
              nec elit.
            </small>
            <Button genre="outline">More Bytes</Button>
          </div>
          {posts.map((post) => (
            <BlogCard key={post.id} title={post.title} lead={post.lead} />
          ))}
        </section>
      </main>
      <Footer />
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

  const testimonialsResponse = await api.get('testimonials');
  const testimonials = testimonialsResponse.data;

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
