import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Button } from '../components/Button';
import { HomeCard } from '../components/Cards/HomeCard';
import { Header } from '../components/Header';
import { Intro } from '../components/Intro';
import { Slider } from '../components/Slider';
import styles from './Home.module.scss';

export default function Home(): JSX.Element {
  const slides = [
    {
      id: 1,
      title: 'BAÚ',
      imageURL: '/assets/img/cover-about.jpg',
      caption: '2019, BAÚ, academic project at etic_'
    },
    {
      id: 2,
      title: 'Onlive',
      imageURL: '/assets/img/footer.jpg',
      caption: '2019, Onlive, Cenas academic project at etic_'
    },
    {
      id: 3,
      title: 'Watch',
      imageURL: '/assets/img/cover-bytes.jpg',
      caption: '2020, Watch, testing webpack'
    },
    {
      id: 4,
      title: 'Wheel Of Fortune',
      imageURL: '/assets/img/cover-work.jpg',
      caption: '2020, Wheel Of Fortune, testing JS'
    }
  ];

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
          <Slider slides={slides} />
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 24 // 24 hours
  };
};
