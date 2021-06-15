import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { ServicesSVG } from '../../assets/services';
import { CardBody, CardHeader, DefaultCard } from '../../components/elements/Cards/DefaultCard';
import { GraphicCard } from '../../components/elements/Cards/GraphicCard';
import { Graph } from '../../components/elements/Graph';
import ListPage from '../../components/layouts/ListPage';
import { useTheme } from '../../hooks/useTheme';
import styles from './styles.module.scss';

type Link = { id: number; link: string; label: string };
type Graph = { id: number; title: string; percentage: number };

type IntroData = { title: string; lead: string; link_list: Link[] };

type ActivityData = {
  id: number;
  icon: 'ui' | 'dev' | 'design' | 'illustration';
  title: string;
  description: string;
};

type CareerData = {
  id: number;
  logoSVG: string;
  name: string;
  dateInterval: string;
  title: string;
  description: string;
};

type EducationData = {
  id: number;
  logoSVG: string;
  name: string;
  dateInterval: string;
  title: string;
  description: string;
};

type SkillData = {
  id: number;
  title: string;
  description: string;
  graphs: Graph[];
};

interface AboutProps {
  intro: IntroData;
  cards: ActivityData[] | CareerData[] | EducationData[] | SkillData[];
}

export default function About({ intro, cards }: AboutProps): JSX.Element {
  const router = useRouter();
  const { slug } = router.query;
  const { getTheme } = useTheme();

  useEffect(() => {
    getTheme();
  }, [getTheme]);

  useEffect(() => {
    const activeArea = ['activity', 'skills', 'career', 'education'].filter(
      (area) => area === slug
    );
    activeArea.length === 0 && router.push('/');
  }, [router, slug]);

  return (
    <ListPage
      intro={intro}
      pageTitle="about"
      slug={slug}
      imageURL="/assets/img/cover-about.jpg"
      pageDescription="...">
      {slug === 'skills' &&
        cards.map((card) => (
          <GraphicCard key={card.id} customClass={styles.card}>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <div className={styles.graphList}>
              {card.graphs.map((graph) => (
                <Graph title={graph.title} percentage={graph.percentage} key={graph.id} />
              ))}
            </div>
          </GraphicCard>
        ))}

      {slug === 'activity' &&
        cards.map((card) => (
          <DefaultCard key={card.id}>
            <CardHeader>
              <ServicesSVG icon={card.icon} />
            </CardHeader>
            <CardBody customClass={styles.card}>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </CardBody>
          </DefaultCard>
        ))}

      {(slug === 'career' || slug === 'education') &&
        cards.map((card) => (
          <GraphicCard customClass={styles.card} key={card.id}>
            <div
              className={styles.svgContainer}
              dangerouslySetInnerHTML={{ __html: card.logoSVG }}
            />
            <span className={styles.center}>
              <p className={styles.date}>{card.dateInterval}</p>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </span>
          </GraphicCard>
        ))}
    </ListPage>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;
  let cards: unknown;

  const intro: IntroData = {
    title: 'about',
    lead: 'Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit.',
    link_list: [
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

  function getActivityContent(): ActivityData[] {
    return [
      {
        id: 1,
        icon: 'ui',
        title: 'UI Design',
        description:
          'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
      },
      {
        id: 2,
        icon: 'dev',
        title: 'Front-end Development',
        description:
          'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
      },
      {
        id: 3,
        icon: 'design',
        title: 'Graphic Design',
        description:
          'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
      },
      {
        id: 4,
        icon: 'illustration',
        title: 'Illustration',
        description:
          'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
      }
    ];
  }

  function getCareerContent(): CareerData[] {
    return [
      {
        id: 1,
        logoSVG:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 42"><path d="M21.2 0a21.2 21.2 0 1021.3 21.2A21.3 21.3 0 0021.2 0zm0 41.7a20 20 0 01-4-.4l.2-.5 3.8-10 3.8 9.8.2.5.1.2a20.9 20.9 0 01-4 .4zm13-4.7l-.1-.5L21.2 3.1l-13 33.7v.2A20.5 20.5 0 1137 34.2a20 20 0 01-2.8 2.8zm13-23a2.6 2.6 0 00-2.4 2.5V26a2.5 2.5 0 002.3 2.5h108.6a2.5 2.5 0 002.2-2.5V14zm9.4 6.4a1 1 0 01.8.3 1 1 0 010 1.4 1 1 0 01-.8.3h-7v2a1 1 0 01-.3.8 1 1 0 01-1.4 0 1 1 0 01-.3-.7V18a.9.9 0 01.8-1 .7.7 0 01.2 0h8a1 1 0 01.8.3 1 1 0 010 1.4 1 1 0 01-.7.3h-7v1.4zm4 4.2a1 1 0 01-.3.7 1 1 0 01-.7.3 1 1 0 01-.7-.3 1 1 0 01-.3-.7V18a1 1 0 01.3-.7 1 1 0 01.7-.3 1 1 0 01.7.3 1 1 0 01.3.7zm10.8-5.9a1 1 0 01-.8.3h-3v5.6a1 1 0 01-.3.7 1.1 1.1 0 01-.7.3 1 1 0 01-.7-.3 1 1 0 01-.3-.7V19h-3a1 1 0 01-.7-.2 1 1 0 010-1.5 1 1 0 01.7-.3h8a1 1 0 01.8.3 1 1 0 010 1.4zm11.3 5.6a1.2 1.2 0 01-.4 1 1.1 1.1 0 01-.7.3 1.4 1.4 0 01-.4-.1 1 1 0 01-.4-.2L74.6 20v4.6a1 1 0 01-.3.7 1 1 0 01-.7.3 1 1 0 01-.7-.3 1 1 0 01-.3-.7V18a1.1 1.1 0 01.2-.8.8.8 0 01.6-.2 1.2 1.2 0 01.5 0 1.7 1.7 0 01.6.4l6.1 5.3V18a1 1 0 01.3-.7 1 1 0 01.7-.3 1 1 0 01.8.3 1 1 0 01.2.7zm11.2.9a1 1 0 01-.7.3h-8a.9.9 0 01-1-.8 1 1 0 010-.2V18a.9.9 0 01.7-1 .7.7 0 01.2 0h8a1 1 0 01.8.3 1 1 0 010 1.4 1 1 0 01-.8.3h-7v1.2H93a1 1 0 01.7.3 1 1 0 010 1.5 1 1 0 01-.7.3h-6.9v1.2h7a1 1 0 01.8.3 1 1 0 010 1.4zm10.7-5a.9.9 0 011 .8 1 1 0 010 .3v3.2a.9.9 0 01-.8 1 1 1 0 01-.2 0h-8a.9.9 0 01-.8-.3 1.1 1.1 0 010-1.4.9.9 0 01.7-.4h7v-1.1h-7a.9.9 0 01-1-.8 1 1 0 010-.3V18a.9.9 0 01.8-1h8.3a1 1 0 01.7.3 1 1 0 010 1.4 1 1 0 01-.7.3h-7v1.2zm11.5 0a.9.9 0 011 .8 1 1 0 010 .3v3.2a1 1 0 01-.8 1 1 1 0 01-.2 0H108a1 1 0 01-.7-.3 1.1 1.1 0 010-1.4 1 1 0 01.7-.4h7v-1.1h-7a.9.9 0 01-1-.8 1 1 0 010-.3V18a.9.9 0 01.8-1h8.3a1 1 0 01.7.3 1 1 0 010 1.4 1 1 0 01-.7.3h-7v1.2zm39.6 7.6h-36V14.7h37.6V26a1.9 1.9 0 01-1.6 1.9zM131.9 17a1 1 0 00-.7.3 1 1 0 00-.3.7v2.3h-6V18a1 1 0 00-.3-.7 1 1 0 00-.7-.3 1 1 0 00-.7.3 1 1 0 00-.3.7v6.6a.9.9 0 00.3.8 1 1 0 00.7.2 1 1 0 00.7-.2 1 1 0 00.3-.8v-2.3h6v2.3a1 1 0 00.3.8 1 1 0 00.7.2 1 1 0 00.8-.2.9.9 0 00.3-.8V18a1 1 0 00-.3-.7 1 1 0 00-.7-.3zm22.6 0h-8a1 1 0 00-.8.4 1 1 0 000 1.4 1 1 0 00.8.3h3v5.5a1 1 0 00.3.8 1 1 0 001.4 0 1 1 0 00.3-.8v-5.5h3a1 1 0 00.7-.3 1 1 0 000-1.5 1 1 0 00-.7-.3zm-11 0a1 1 0 00-.7.3 1 1 0 00-.3.7v5.5h-6V18a1 1 0 00-.3-.7 1 1 0 00-.8-.3 1 1 0 00-.7.3 1 1 0 00-.3.7v6.5a.9.9 0 00.8 1 1 1 0 00.2 0h8.1a.9.9 0 001-.7 1 1 0 000-.3V18a1 1 0 00-.3-.7 1 1 0 00-.7-.3z" /></svg>',
        name: 'Fitness Hut',
        dateInterval: '2011 - today',
        title: 'Front-end Developer + Senior Designer',
        description:
          'I started in 2011 as a Graphic Designer and Advertising. Over time I made the transition to web, performing more and more web designer / front-end developer roles.'
      },
      {
        id: 2,
        logoSVG:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.25 44.09"><path d="M64.33 13.66a13.71 13.71 0 10-13.71 13.77 13.71 13.71 0 0013.71-13.77zm-26.44 0c0-.58.1-1.17.1-1.71a12.69 12.69 0 0114.3-10.86l-5.11 12.24h-3.34a3.66 3.66 0 00-3.59 3.73 3.12 3.12 0 003 3.24c2.35 0 3.24-2.11 3.58-2.85L48.26 14h4.22l-5 12a12.63 12.63 0 01-9.59-12.34zm9 .3l-1.32 3c-.64 1.38-1.28 2.27-2.7 2.27a2.36 2.36 0 01-2.17-2.46A2.76 2.76 0 0143.45 14h3.48zm1.96 12.24l5-12.24h3.45a3.68 3.68 0 003.59-3.74 3.13 3.13 0 00-3-3.24c-2.36 0-3.25 2.11-3.59 2.85-.15.3-.69 1.67-1.42 3.49h-4.23l5-12a12.61 12.61 0 019.63 12.29c0 .54-.1 1.18-.15 1.72A12.71 12.71 0 0148.85 26.2zm5.35-12.88l1.28-3c.64-1.37 1.28-2.26 2.7-2.26a2.35 2.35 0 012.16 2.46 2.71 2.71 0 01-2.61 2.8H54.2zm-39.8 20.5a5.11 5.11 0 00-5.16 5.07V39a5 5 0 005 5.11h.2A5 5 0 0018 42.66 5.1 5.1 0 0019.56 39 5.21 5.21 0 0018 35.29a5 5 0 00-3.6-1.47zm0 9.38a4.28 4.28 0 010-8.55 4.28 4.28 0 010 8.55zm14.5-9.53v10.27h.88V36l3.83 4.86L37.5 36v7.91h.88V33.67l-4.72 5.9zm-6.49.24h-.94v10h5.6v-.83H22.4zm-16 4.68l-5.5-.05v-4.63H0v10h.93v-4.49h5.5v4.52h.94V34h-.94zM89 43.2a4.28 4.28 0 010-8.55 3.9 3.9 0 013.2 1.48l.69-.54A4.73 4.73 0 0089 33.77a5 5 0 00-5.06 4.88v.23a5.17 5.17 0 009.19 3.2l-.79-.44A4 4 0 0189 43.2zm-9.79-9.58l-4.16 10.17v.1h.93l1-2.45h4.57l1 2.45h1l-4.28-10.12zm-2 7l1.92-4.82 2 4.82zm-35.29-1.3h4.53v-.83h-4.53v-3.74H47v-.84h-6v10h6.19v-.81h-5.27zm54 3.79v-3.79h4.53v-.83h-4.52v-3.74h5.12v-.84H95v10h6.25v-.81zm-43.43-4.67l-.79-.35c-1.23-.59-1.77-.93-1.77-1.91a1.58 1.58 0 011.64-1.53h.08a2.2 2.2 0 012 1h.05l.74-.44a2.89 2.89 0 00-2.7-1.37 2.39 2.39 0 00-2.6 2.18 1.09 1.09 0 000 .18c0 1.37.84 2.06 2.31 2.75l.79.39c1.27.59 1.91 1.08 1.91 2.16s-.83 1.72-2.21 1.72a2.93 2.93 0 01-2.6-1.52l-.79.39h.05A3.72 3.72 0 0051.85 44c1.92 0 3.1-1 3.1-2.6s-.89-2.27-2.46-3zm10.66-4.52H60.2v10h.94v-4h2c2.06 0 3.34-1.13 3.34-3s-1.27-3-3.34-3zm0 5.16h-2v-4.33h2c1.53 0 2.41.79 2.41 2.16s-.88 2.17-2.41 2.17zm6.19-5.16h-.93v10H74v-.83h-4.65z" ></svg>',
        name: 'Holmes Place',
        dateInterval: '2007 - 2011',
        title: 'Design + Advertising',
        description:
          'Graphic design projects, like printed marketing materials, corporate car fleet, and club interiors.'
      },
      {
        id: 3,
        logoSVG:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.25 44.09"><path d="M64.33 13.66a13.71 13.71 0 10-13.71 13.77 13.71 13.71 0 0013.71-13.77zm-26.44 0c0-.58.1-1.17.1-1.71a12.69 12.69 0 0114.3-10.86l-5.11 12.24h-3.34a3.66 3.66 0 00-3.59 3.73 3.12 3.12 0 003 3.24c2.35 0 3.24-2.11 3.58-2.85L48.26 14h4.22l-5 12a12.63 12.63 0 01-9.59-12.34zm9 .3l-1.32 3c-.64 1.38-1.28 2.27-2.7 2.27a2.36 2.36 0 01-2.17-2.46A2.76 2.76 0 0143.45 14h3.48zm1.96 12.24l5-12.24h3.45a3.68 3.68 0 003.59-3.74 3.13 3.13 0 00-3-3.24c-2.36 0-3.25 2.11-3.59 2.85-.15.3-.69 1.67-1.42 3.49h-4.23l5-12a12.61 12.61 0 019.63 12.29c0 .54-.1 1.18-.15 1.72A12.71 12.71 0 0148.85 26.2zm5.35-12.88l1.28-3c.64-1.37 1.28-2.26 2.7-2.26a2.35 2.35 0 012.16 2.46 2.71 2.71 0 01-2.61 2.8H54.2zm-39.8 20.5a5.11 5.11 0 00-5.16 5.07V39a5 5 0 005 5.11h.2A5 5 0 0018 42.66 5.1 5.1 0 0019.56 39 5.21 5.21 0 0018 35.29a5 5 0 00-3.6-1.47zm0 9.38a4.28 4.28 0 010-8.55 4.28 4.28 0 010 8.55zm14.5-9.53v10.27h.88V36l3.83 4.86L37.5 36v7.91h.88V33.67l-4.72 5.9zm-6.49.24h-.94v10h5.6v-.83H22.4zm-16 4.68l-5.5-.05v-4.63H0v10h.93v-4.49h5.5v4.52h.94V34h-.94zM89 43.2a4.28 4.28 0 010-8.55 3.9 3.9 0 013.2 1.48l.69-.54A4.73 4.73 0 0089 33.77a5 5 0 00-5.06 4.88v.23a5.17 5.17 0 009.19 3.2l-.79-.44A4 4 0 0189 43.2zm-9.79-9.58l-4.16 10.17v.1h.93l1-2.45h4.57l1 2.45h1l-4.28-10.12zm-2 7l1.92-4.82 2 4.82zm-35.29-1.3h4.53v-.83h-4.53v-3.74H47v-.84h-6v10h6.19v-.81h-5.27zm54 3.79v-3.79h4.53v-.83h-4.52v-3.74h5.12v-.84H95v10h6.25v-.81zm-43.43-4.67l-.79-.35c-1.23-.59-1.77-.93-1.77-1.91a1.58 1.58 0 011.64-1.53h.08a2.2 2.2 0 012 1h.05l.74-.44a2.89 2.89 0 00-2.7-1.37 2.39 2.39 0 00-2.6 2.18 1.09 1.09 0 000 .18c0 1.37.84 2.06 2.31 2.75l.79.39c1.27.59 1.91 1.08 1.91 2.16s-.83 1.72-2.21 1.72a2.93 2.93 0 01-2.6-1.52l-.79.39h.05A3.72 3.72 0 0051.85 44c1.92 0 3.1-1 3.1-2.6s-.89-2.27-2.46-3zm10.66-4.52H60.2v10h.94v-4h2c2.06 0 3.34-1.13 3.34-3s-1.27-3-3.34-3zm0 5.16h-2v-4.33h2c1.53 0 2.41.79 2.41 2.16s-.88 2.17-2.41 2.17zm6.19-5.16h-.93v10H74v-.83h-4.65z" ></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.9 57.6"><path d="M91 40.1l-.3-.2a1.2 1.2 0 01-.2-.2.4.4 0 00-.3-.2L14.4 52.8l-6.3-36 62.5-11 12.8-2.2c.1 0 0-.1 0-.2l-.3-.2a.7.7 0 01-.2-.2.2.2 0 010-.2v-.2a1 1 0 000-.4 1.7 1.7 0 00-.1-.5.3.3 0 00-.2-.2c-.1 0 0 0 0 0v-.2a.4.4 0 01-.4-.1 1.7 1.7 0 01-.2-.3V.8a.5.5 0 010-.2V.4.2a1.3 1.3 0 00-1-.2L0 14.3 2.5 28a8 8 0 012.2.5 7.7 7.7 0 012 1.2 7.6 7.6 0 011.7 1.7 8.2 8.2 0 011.4 4.6A7.9 7.9 0 015 43.3l2.5 14.3L21.8 55l53.7-9.5L89 43.2l.8-.1a2.1 2.1 0 01-.1-.3l.1-.3v-.7a1 1 0 01.1-.3 2.4 2.4 0 01.5-.4h.2v-.2a.6.6 0 000-.2c0-.2.2-.3.3-.4a.7.7 0 000-.2zm-9.7-19.3l-.4-2.5-1.6.3.5 2.5zm-64.7 16l1.6-.3-.4-2.5-1.6.3zm.8-4.8l-.4-2.4-1.6.2.4 2.4zm-2.3 20l32.3-5.7 42.4-7.5v-.7a.5.5 0 000-.2 5.8 5.8 0 00-.3-.8l-1.2-2.3v-.5-.6-1a1 1 0 00.1-.8.5.5 0 000-.1l-.2-.2a.3.3 0 010-.2 2.2 2.2 0 010-.3v-.7c0-.2.2-.2.2-.3v-.4-1l-.2-2.4a1 1 0 000-1 1.3 1.3 0 00-.1 0l-.3-1.3.3-.9.2-.6.1-.4a1 1 0 010-.5 3.8 3.8 0 010-.7l.1-.4a.8.8 0 000-.2.3.3 0 00-.1-.1.4.4 0 01-.1-.2.8.8 0 010-.2 2.4 2.4 0 010-.2 3.2 3.2 0 010-.5 5.3 5.3 0 010-.6 3 3 0 010-.4l-.6-1-.3-.5a1.6 1.6 0 01-.1-.2.6.6 0 000-.1l-.1-.4-.2-1.3a1.5 1.5 0 010-.2l.1-.4a1 1 0 000-.5 1.2 1.2 0 00-.2-.4.7.7 0 010-.3 1.7 1.7 0 01.1-.3l.2-.6a2.1 2.1 0 000-.3 1.3 1.3 0 000-.8 2.4 2.4 0 01-.2-.2l-.1-.5-.3-1c0-.3-.3-.6-.4-.9a6.7 6.7 0 01-.4-.7l-.2-.8a3 3 0 01-.4-.2A4.8 4.8 0 0185 6a4.1 4.1 0 01-.5-.7 8.7 8.7 0 01-.5-1.2l-75 13.2zM81 16.2l2 1.3.5 2.8-1 1.4 1.5.9.7 4.3-2.2.4-.8-4.4-1.6.3.8 4.4-2.3.4-1.9-11zm-4.9.9l.4 2-2.5.4.3 2.1 2.2-.4.3 2-2.1.5.5 2.7 2.5-.4.3 2-4.7 1-2-11zm-5.4.9l.4 2.1-1.5.3 1.5 8.9-2.3.4-1.5-8.9-1.6.3-.4-2.2zm-10.2 1.8l2.5-.4 2 1.3.3 1.9-2.2.4-.3-1.5-1.5.2.4 2.3 2.2-.2 2 1.4.5 3.2-1.4 2-2.7.5-2-1.4-.3-1.9 2.3-.4.3 1.5 1.5-.3-.4-2.3-2.1.2-2-1.4-.6-3.1zm-6.2 1l1.6 9 1.6-.2-1.6-9 2.4-.4 1.6 9.4-1.4 2-2.7.4-2.1-1.3-1.7-9.4zm-4.6.9l1.8 1 .5 3-1 1.3 1.6.8.5 3-1.4 2-4.4.7-2-11zm-9.1 1.6l.9 5 .9-5.3 2.4-.4-1.3 5.5 3.5 5.4-2.5.5-2.9-4.5 1 4.9-2.3.4-2-11zm-7.3 1.3l2.6-.5 2 1.4.5 2.5-2.2.4-.4-2.1-1.6.2 1.2 7 1.6-.3-.5-2.7 2.2-.4.6 3.1-1.4 2-2.7.4-2-1.3-1.4-7.7zm-6.8 1.2l2.6-.5 2 1.4 1.4 7.7-1.4 2-2.7.4-2-1.3-1.3-7.8zm-4.6.8l1.5 9L26 35l.4 2-5 .9-1.9-11zm-3 2l.6 2.8-1 1.4 1.6.8.5 2.9-1.5 2-4.4.8-1.9-11 4.4-.8zm31-2.4l-.4-2.4-1.5.3.4 2.4zm-.7 4.8l1.6-.3-.5-2.5-1.5.3zm-19 3.4l-1.2-7-1.6.2 1.2 7z"/></svg>',
        name: 'Holmes Place and BlockBuster',
        dateInterval: '2004 - 2007',
        title: 'Freelance Design + Advertising',
        description: 'Clients such as Holmes Place, Blockbuster and Nicola'
      },
      {
        id: 4,
        logoSVG:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165.1 27.9"><path d="M88.8 27a2.2 2.2 0 00-1.9-.7H.8a4.9 4.9 0 00-.8.1V28h88.7c.4 0 .5-.1.4-.5a1.3 1.3 0 00-.3-.5zm-2.4-7.5c-1-.9.1-1.8.5-2.7A48.5 48.5 0 0089 12c.1-1.2-2.3-.5-3-.6-1.2 0-1.1 1.8-1.7 2.6-.3.5-.6 2.4-1.5 1.8-1-.8-1.8-1.9-2.7-2.7s-.5-1.1.1-1.6C84.6 9 85.2 1.7 80 0h-5a6.2 6.2 0 00-2.2 10.3c1.4 1.3-3.7 1.9-4.7 6.7a6.6 6.6 0 004.7 8 6.5 6.5 0 002.7.1 10.4 10.4 0 007.4-3c1.1-1 2.6 1.8 3.5 2.4.6.7 1.7.3 2.5.4.6 0 2.9.4 2-.7l-4.5-4.8zm-10.7-16a2.5 2.5 0 011.7-.5 2.6 2.6 0 012.8 2.4 2.6 2.6 0 01-.2 1.3c-.4 1-2.8 3.5-3.8 2.2-1.4-1.5-2.9-4-.5-5.4zm4.8 16.2c-2.3 2.6-9 3.5-8.8-1.3a3.7 3.7 0 011.7-3.2c.8-.5 2-2 3-1l4.1 4.3a.7.7 0 01.1 1 .8.8 0 01-.1.1zm84.5 7a.3.3 0 00-.3-.4H94a.7.7 0 00-.5.2l.1.6c.1.2.4.3.4.5a.4.4 0 00.5.3H165v-1.2zM5.7 17a12 12 0 001.7 1.7 6.7 6.7 0 002.4 1 6.9 6.9 0 005-.7c.5-.2.9-.2 1.2.2a.9.9 0 001 .3c.3-.1.3-.4.3-.7v-17V1c0-.5-.3-.8-.6-.8s-.7.3-.8.8v4.1c0 .6-.2.8-.8.6-.4 0-.7-.2-1.1-.3a8.3 8.3 0 00-1.5-.4 7.5 7.5 0 00-3.8.5A8.3 8.3 0 006.5 7a7 7 0 00-2 3.5 6.9 6.9 0 00-.2 1.9 6 6 0 00.3 2.5 7 7 0 001 2.2zm0-4.7a5.6 5.6 0 012.5-4.8 5.7 5.7 0 015.4-.7 5.6 5.6 0 011.8.9 1.1 1.1 0 01.5 1V16a1.6 1.6 0 01-1 1.6 6.5 6.5 0 01-5.2.4A5 5 0 017 16.3a6 6 0 01-1.4-4zm90.2 2.4v8.6c0 .6.3.9.8.9 1.3 0 .4-3.8.7-4.8.3-1.4 4.4 2.6 8.8-1.2a7.8 7.8 0 00.6-11 6.9 6.9 0 00-8.4-1.5c-.8.5-1.2-.6-2-.3a1 1 0 00-.5 1v8.3zm1.4-2.2V8.8c0-1.2.2-1.5 1.3-1.8a7 7 0 012.3-.6c6.8-.4 8.8 9.8 2.2 11.8a7 7 0 01-5.5-.8c-.6-1.3-.1-3.4-.3-4.9zm48.8-1.3a11.5 11.5 0 00-5 1.3c-2.9 1.2-3.4 5.6-.6 7a5.9 5.9 0 006-1c1-.4.4 1.9 2 1.3.6-.2 2.8-1.1 2.2-2-.7-.6-1.1.9-1.9.5s-.2-4.3-.3-5.3c-.1-3 .8-7-3-7.8-1.2-.6-7 .5-6 2.4.5.3.9-.2 1.2-.4 1.8-1 4.7-1.6 6 .5.4 1 1 3.5-.6 3.5zm1 3.5c0 1 .2 2-.7 2.6a6 6 0 01-3.2 1.4 2.6 2.6 0 01-3-2.1 2.6 2.6 0 01.3-1.9 6.8 6.8 0 015.6-2.3c1.3-.1.8 1.5.9 2.3zM45.5 11.4c-3.1.3-7 2.9-5.4 6.5 1.4 2.7 5 2.4 7.2.8 1.6-1.3.4 3.5 4.6-.2a.5.5 0 000-.7.5.5 0 00-.6 0c-.6.4-1.6.9-1.7-.2v-4.8a24.3 24.3 0 00-.3-5.6c-1.2-3.5-9.7-2.1-8.6.4.3.2.5 0 .8-.2 2-1.6 6.3-1.8 6.7 1.4.3 2.6-.6 2.3-2.7 2.5zm-4 6c-1.1-2.6 1.9-4.6 4.1-4.9 2.2-.4 2.6 2.2 2.6 2.2.8 3.4-4.8 5.5-6.7 2.6zm81.9.8a6.9 6.9 0 01-5.2-.7c-.5-.3-.9 0-.8.7.4 1 1.9 1.2 2.8 1.5 2.7.8 6.5-.8 6.1-4 0-3.4-4-3.6-6.3-5-3-2.5 1-6 5.4-3.2.4.2.7 0 .7-.5 0-1.3-2.8-2-3.7-2-2.7-.1-5.5 2-4.8 4.8s4.1 2.8 6.2 4.2a2.2 2.2 0 011 3 2.3 2.3 0 01-1.5 1.1zm-64 0a6.7 6.7 0 01-4.6-.5 1.6 1.6 0 00-.4-.2.6.6 0 00-.8.4.7.7 0 000 .3 1 1 0 00.6.7 6.2 6.2 0 002.1.8 5.5 5.5 0 004.8-.9 3.8 3.8 0 001.5-2 3.5 3.5 0 00-1.7-4 20 20 0 00-3.3-1.5 4.5 4.5 0 01-2.2-1.5 1.5 1.5 0 01-.2-1.6A3 3 0 0158 6.4a5.5 5.5 0 013.6 1 .5.5 0 00.6 0 .4.4 0 00.1-.3 1.3 1.3 0 00-.6-1.2 7 7 0 00-2.8-.9 5 5 0 00-4.5 2.1 3.3 3.3 0 00.5 4.2 12.2 12.2 0 003.4 1.9 16.6 16.6 0 011.9.9 2.2 2.2 0 011.1 2 2.8 2.8 0 01-1.9 2.1zm98.3 0a10.2 10.2 0 01-2 0 5 5 0 01-2.4-.7c-1-.5-1.5.7-.7 1.2a5.9 5.9 0 002.6 1c3.5 1.2 8-2.6 5.3-6-1.4-1.8-3.9-1.9-5.7-3-3.3-3 2-6 5.3-3.3a.4.4 0 00.7-.3c.2-1.6-2.7-2-4-2-4-.2-6.4 5-2.3 7a18.8 18.8 0 014.7 2.4 2.3 2.3 0 01-1.5 3.8zM37 19.5c.9 0 1.2-1.7.1-1.5a8 8 0 01-6.2-.2C25 13.9 29.7 3.7 36.4 7a.9.9 0 00.8 0c1-1.7-2.3-2-3.2-1.9C23 5 24.3 23.3 37 19.5zm93-12.9c.9 0 1 .6 1 1.4v4.3c.2 2.2-.6 4.8.7 6.6a4.4 4.4 0 005.4.3c.2-.5.2-1-.5-1-2.8.7-4.3.5-4-2.8V8c0-1.3 0-1.4 1.3-1.4.8-.1 2.5.4 2.6-.6 0-.3-.2-.5-.6-.6-4.2.2-3.3 0-3.4-3.8 0-.7-.5-.7-1-.3-1.4 1 .6 4-1.5 4.1-.9.2-2.6-.5-2.8.6.1 1.1 2 .4 2.8.6zM21.4 19c0 .5.2.7.7.7s.8-.2.8-.7V6.5a2.4 2.4 0 000-.7.7.7 0 00-.8-.5.6.6 0 00-.6.6 3.5 3.5 0 000 .6V19zm92.5-.1V6.5c0-.5 0-1.2-.6-1.3s-.8.7-.8 1.3v12.2c-.2 1 1.6 1.2 1.5 0z" /></svg>',
        name: 'Dicas & Pistas',
        dateInterval: '2001 - 2004',
        title: 'Design + Advertising',
        description:
          'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa'
      }
    ];
  }

  function getEducationContent(): EducationData[] {
    return [
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
  }

  function getSkillsContent(): SkillData[] {
    return [
      {
        id: 1,
        title: 'front-end',
        description:
          'Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in',
        graphs: [
          {
            id: 1,
            title: 'HTML 5',
            percentage: 80
          },
          {
            id: 2,
            title: 'CSS 3',
            percentage: 80
          },
          {
            id: 3,
            title: 'JavaScript',
            percentage: 80
          },
          {
            id: 4,
            title: 'ReactJS',
            percentage: 80
          },
          {
            id: 5,
            title: 'NextJS',
            percentage: 80
          },
          {
            id: 6,
            title: 'Sass',
            percentage: 80
          }
        ]
      },
      {
        id: 2,
        title: 'back-end',
        description:
          'Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in',
        graphs: [
          {
            id: 1,
            title: 'NodeJS',
            percentage: 80
          },
          {
            id: 2,
            title: 'PHP',
            percentage: 80
          }
        ]
      },
      {
        id: 3,
        title: 'other',
        description:
          'Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in',
        graphs: [
          {
            id: 1,
            title: 'React Native',
            percentage: 80
          },
          {
            id: 2,
            title: 'Git + Git Hub',
            percentage: 80
          },
          {
            id: 3,
            title: 'TypeScript',
            percentage: 80
          },
          {
            id: 4,
            title: 'yarn / npm',
            percentage: 80
          }
        ]
      },
      {
        id: 4,
        title: 'software',
        description:
          'Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in',
        graphs: [
          {
            id: 1,
            title: 'Visual Studio Code',
            percentage: 80
          },
          {
            id: 2,
            title: 'Adobe XD',
            percentage: 80
          },
          {
            id: 3,
            title: 'Adobe Illustrator',
            percentage: 80
          },
          {
            id: 4,
            title: 'Adobe Photoshop',
            percentage: 80
          },
          {
            id: 5,
            title: 'Insomnia',
            percentage: 80
          }
        ]
      }
    ];
  }

  switch (slug) {
    case 'activity':
      cards = getActivityContent();
      break;

    case 'career':
      cards = getCareerContent();
      break;

    case 'education':
      cards = getEducationContent();
      break;

    case 'skills':
      cards = getSkillsContent();
      break;

    default:
      cards = getSkillsContent();
      break;
  }

  return {
    props: {
      intro,
      cards
    }
  };
};
