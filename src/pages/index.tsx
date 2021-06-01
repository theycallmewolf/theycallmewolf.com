import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Button } from '../components/Button';
import { BlogCard } from '../components/Cards/BlogCard';
import { HomeCard } from '../components/Cards/HomeCard';
import { Footer } from '../components/Footer';
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
        <section className={styles.action}>
          <Button type="button" genre="outline" onClick={() => console.log('bananas')}>
            say “hello, wolf!”
          </Button>
        </section>
        <HomeCard />
        <section className={styles.projects}>
          <h2>Projects</h2>
          <Slider slides={projects} contentType="image" />
        </section>
        <section className={styles.clients}>
          {clients.map((client) => (
            <LogoButton key={client.id} svgLogo={client.logoSVG} url={client.URL} />
          ))}
        </section>
        <section className={styles.testimonials}>
          <div className={styles.cover}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 684.2 284.3">
              <path d="M624 284.3l60-60V213l-21.5 21.5-234-234h-11.3L504 87.2 381.1 210l.3-.7-142-65V.4h-8v140L61 62.6 40.5.5h-8.4l21 63.9L0 117.5v11.3l56-56 69.9 211.5h8.4L64.4 72.9l311.3 142.6-68.9 68.8h11.3L509.6 93 656.9 240l-44.2 44.2z" />
            </svg>
          </div>
          <Slider testimonials={testimonials} contentType="testimonial" />
        </section>
        <section className={styles.blog}>
          <div className={styles.intro}>
            <h2>Wolf Bytes</h2>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
              nec elit.
            </p>
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
