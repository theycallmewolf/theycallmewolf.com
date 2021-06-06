import { GetStaticProps } from 'next';
import Head from 'next/head';

import { ServicesSVG } from '../../../assets/services';
import { CardBody, CardHeader, DefaultCard } from '../../../components/elements/Cards/DefaultCard';
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
  icon: 'ui' | 'dev' | 'design' | 'illustration';
  title: string;
  description: string;
};

interface ActivityProps {
  intro: IntroData;
  cards: CardData[];
}

export default function Activity({ intro, cards }: ActivityProps): JSX.Element {
  return (
    <>
      <Head>
        <title>they call me wolf | activity</title>
        <meta name="description" content="..." />
      </Head>
      <main className={styles.main}>
        <Header />
        <Cover imageURL="/assets/img/cover-about.jpg" />
        <Intro {...intro} />
        <div className={`${styles.cardList} ${styles.col2}`}>
          {cards.map((card) => (
            <DefaultCard key={card.id}>
              <CardHeader>
                <ServicesSVG icon={card.icon} />
              </CardHeader>
              <CardBody adicionalClass={styles.card}>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </CardBody>
            </DefaultCard>
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

  return {
    props: {
      intro,
      cards
    },
    revalidate: 60 * 60 * 24 // 24 hours
  };
};
