import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Cover } from '../../../components/elements/Cover';
import { Intro } from '../../../components/elements/Intro';
import { Header } from '../../../components/layouts/Header';
import styles from '../styles.module.scss';

type Link = {
  id: number;
  link: string;
  label: string;
};

type IntroData = {
  title: string;
  lead: string;
  linkList: Link[];
};

interface ServicesProps {
  intro: IntroData;
}

export default function Services({ intro }: ServicesProps): JSX.Element {
  return (
    <>
      <Head>
        <title>they call me wolf | services</title>
        <meta name="description" content="..." />
      </Head>
      <main className={styles.main}>
        <Header />
        <Cover imageURL="/assets/img/cover-about.jpg" />
        <Intro {...intro} />
        <div className={styles.cardList}>...</div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const intro = {
    title: 'about',
    lead: 'Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit.',
    linkList: [
      {
        id: 1,
        link: '/about/skills',
        label: 'skills'
      },
      {
        id: 2,
        link: '/about/services',
        label: 'services'
      },
      {
        id: 3,
        link: '/about/pro',
        label: 'pro'
      },
      {
        id: 4,
        link: '/about/academic',
        label: 'academic'
      }
    ]
  };

  return {
    props: {
      intro
    },
    revalidate: 60 * 60 * 24 // 24 hours
  };
};
