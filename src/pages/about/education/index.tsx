import { GetStaticProps } from 'next';
import Head from 'next/head';
import { title } from 'process';

import { GraphicCard } from '../../../components/elements/Cards/GraphicCard';
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

type CardData = {
  id: number;
  logoSVG: string;
  name: string;
  dateInterval: string;
  title: string;
  description: string;
};

interface EducationProps {
  intro: IntroData;
  cards: CardData[];
}

export default function Education({ intro, cards }: EducationProps): JSX.Element {
  return (
    <>
      <Head>
        <title>they call me wolf | education</title>
        <meta name="description" content="..." />
      </Head>
      <main className={styles.main}>
        <Header />
        <Cover imageURL="/assets/img/cover-about.jpg" />
        <Intro {...intro} />
        <div className={styles.cardList}>
          {cards.map((card) => (
            <GraphicCard adicionalClass={styles.card} key={card.id}>
              <div
                className={styles.svgContainer}
                dangerouslySetInnerHTML={{ __html: card.logoSVG }}></div>
              <span className={styles.center}>
                <p className={styles.date}>{card.dateInterval}</p>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </span>
            </GraphicCard>
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const intro: IntroData = {
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
        link: '/about/activity',
        label: 'activity'
      },
      {
        id: 3,
        link: '/about/career',
        label: 'career'
      },
      {
        id: 4,
        link: '/about/education',
        label: 'education'
      }
    ]
  };

  const cards: CardData[] = [
    {
      id: 1,
      logoSVG:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 34"><path d="M34.74,12.71V24.23H37.5V12.71h6.59V10H37.5A2.75,2.75,0,0,0,34.74,12.71ZM57.8,10H48.87a2.74,2.74,0,0,0-2.76,2.72h0v8.8a2.74,2.74,0,0,0,2.76,2.72H57.8a2.74,2.74,0,0,0,2.76-2.72h0v-8.8A2.74,2.74,0,0,0,57.8,10Zm0,11.52H48.87v-8.8H57.8Zm5.53-8.77v8.8a2.74,2.74,0,0,0,2.75,2.72h0l9.72-.13V21.5H66.09V12.7h9.73V10.11L66.09,10a2.74,2.74,0,0,0-2.76,2.72ZM91.65,10H87.91l-5.48,5.74H81.34V10H78.58V24.2h2.76V18.44h1.6l5.68,5.76h3.8l-7.3-7.44Zm13,0H95.77A2.74,2.74,0,0,0,93,12.68h0v8.8a2.74,2.74,0,0,0,2.76,2.72h0l11.69-.13V21.48H95.77v-3l11.69-.13V12.68A2.74,2.74,0,0,0,104.7,10Zm0,5.76H95.77v-3h8.93Zm9.7-9.9h-1.06l-1.7,2.07V10h-2.1v2.72l2.1,0v8.83a2.74,2.74,0,0,0,2.76,2.72h0l4.46-.13V21.48H114.4V12.63l4.86-.08V10H114.4Zm6.93,6.86v3a2.75,2.75,0,0,0,2.76,2.73h7v3h-9.73v2.59l9.73.13a2.74,2.74,0,0,0,2.76-2.72h0v-3a2.74,2.74,0,0,0-2.76-2.72h-7v-3h9.72V10.09L124.1,10a2.73,2.73,0,0,0-2.77,2.71ZM148.25,10h-8.93a2.74,2.74,0,0,0-2.76,2.72h0v8.8a2.74,2.74,0,0,0,2.76,2.72h0L151,24.09V21.5H139.32v-3L151,18.34V12.71A2.73,2.73,0,0,0,148.28,10h0Zm0,5.73h-8.93v-3h8.93ZM165.47,10l-11.7.13V12.7h11.7v3l-11.7.13V21.5a2.74,2.74,0,0,0,2.76,2.72h8.94a2.73,2.73,0,0,0,2.76-2.72h0V12.7A2.77,2.77,0,0,0,165.46,10Zm0,11.5h-8.93v-3h8.93ZM180,12.55V10h-4.86V5.79h-1.07l-1.7,2.07V9.93h-2.1v2.72l2.1,0v8.82a2.75,2.75,0,0,0,2.76,2.73h0L179.6,24V21.45h-4.46V12.63ZM27.43.66,22.94,0a.38.38,0,0,0-.32.08L20.71,2.55a.63.63,0,0,0-.11.55.25.25,0,0,1-.17.31h-.12l-1.56-.34a.67.67,0,0,0-.67.24l-6.22,7.85a.4.4,0,0,1-.5.13L9,10.25a.58.58,0,0,0-.63.05l-1.2.81a.7.7,0,0,1-.67.05l-.58-.29a.67.67,0,0,0-.89.31.76.76,0,0,0,0,.11l-.43,1.86A1,1,0,0,0,5,14.28l.9.55,2.9,1.75,1.41.87a1.1,1.1,0,0,0,1.25-.1l2.37-2.05a.6.6,0,0,1,.69-.08l.71.37a.6.6,0,0,0,.72-.1l1.2-1.1a.63.63,0,0,1,.69-.1l1.78.81a.63.63,0,0,0,.77-.18l.83-1.05L27.49,6a.64.64,0,0,0-.1-.9A.66.66,0,0,0,27.12,5l-1.38-.32a.37.37,0,0,1-.31-.43.4.4,0,0,1,.09-.2l2.16-2.64a.43.43,0,0,0,0-.6A.5.5,0,0,0,27.43.66ZM6.84,16.53a.14.14,0,0,0-.2,0,.14.14,0,0,0,0,.14l.66,1.73a.65.65,0,0,1,0,.39l-.59,2.26a.42.42,0,0,0,.14.39l1.67,1.28a.42.42,0,0,0,.51,0l1.75-1.52a.89.89,0,0,1,.34-.16l2-.21a.16.16,0,0,0,.12-.18.12.12,0,0,0-.07-.11Zm-.58,5.81a.44.44,0,0,0-.4-.05L4.45,23a.41.41,0,0,0-.19.18l-3,7.31v.05a.16.16,0,0,0,.11,0l.69-.26h.08s0,.08,0,.1L0,33.89A.07.07,0,0,0,0,34a.06.06,0,0,0,.09,0l7.78-7.7A.55.55,0,0,0,8,26l.16-2a.43.43,0,0,0-.14-.32Z" /></svg>',
      name: 'rocketseat',
      dateInterval: '2020 - 2021',
      title: 'GoStack Bootcamp',
      description: 'Node.js + ReactJS + React Native Online Course (160 hours)'
    }
  ];

  return {
    props: {
      intro,
      cards
    },
    revalidate: 60 * 60 * 24 // 24 hours
  };
};
