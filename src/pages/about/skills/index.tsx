import { GetStaticProps } from 'next';
import Head from 'next/head';

import { AboutCard } from '../../../components/elements/Cards/AboutCard';
import { Cover } from '../../../components/elements/Cover';
import { Graph } from '../../../components/elements/Graph';
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

type Graph = {
  id: number;
  title: string;
  percentage: number;
};

type CardsData = {
  id: number;
  title: string;
  description: string;
  graphs: Graph[];
};

interface SkillsProps {
  intro: IntroData;
  cards: CardsData[];
}

export default function Skills({ intro, cards }: SkillsProps): JSX.Element {
  return (
    <>
      <Head>
        <title>they call me wolf | skills</title>
        <meta name="description" content="..." />
      </Head>
      <main className={styles.main}>
        <Header />
        <Cover imageURL="/assets/img/cover-about.jpg" />
        <Intro {...intro} />
        <div className={styles.cardList}>
          {cards.map((card) => (
            <AboutCard key={card.id} adicionalClass={styles.card}>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <div className={styles.graphList}>
                {card.graphs.map((graph) => (
                  <Graph title={graph.title} percentage={graph.percentage} key={graph.id} />
                ))}
              </div>
            </AboutCard>
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

  const cards: CardsData[] = [
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

  return {
    props: {
      intro,
      cards
    },
    revalidate: 60 * 60 * 24 // 24 hours
  };
};
