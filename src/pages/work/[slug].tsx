import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { TangramCard } from '../../assets/tangrams/';
import { CardBody, CardHeader, DefaultCard } from '../../components/elements/Cards/DefaultCard';
import { CustomLink } from '../../components/elements/Link';
import ListPage from '../../components/layouts/ListPage';
import { useTheme } from '../../hooks/useTheme';
import styles from './styles.module.scss';

type Link = { id: number; link: string; label: string };
type IntroData = { title: string; lead: string; linkList: Link[] };

type coOwnerData = {
  name: string;
  url: string;
};

type CodeProjectsData = {
  id: number;
  title: string;
  description: string;
  image: string | null;
  slug: string;
  updateDate: string;
  publishDate: string;
  repository: string | null;
  repositoryApi: string | null;
  url: string | null;
  specs: string[];
  coOwners: coOwnerData[] | null;
};

interface WorkProps {
  intro: IntroData;
  cards: CodeProjectsData[];
}

export default function Work({ intro, cards }: WorkProps): JSX.Element {
  const router = useRouter();
  const { slug } = router.query;
  const { getTheme } = useTheme();

  useEffect(() => {
    getTheme();
  }, [getTheme]);

  return (
    <ListPage
      intro={intro}
      pageTitle="work"
      imageURL="/assets/img/cover-work.jpg"
      slug={slug}
      pageDescription="...">
      {cards.map((project) => (
        <DefaultCard
          key={project.id}
          adicionalClass={styles.card}
          imageFilter={project.image !== ''}>
          <CardHeader>
            {project.image !== '' ? (
              <img src={project.image} alt={project.title} />
            ) : (
              <TangramCard adicionalClass={styles.placeholder} />
            )}
          </CardHeader>
          <CardBody>
            <span className={styles.date}>{project.publishDate}</span>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <ul>
              {project.specs.map((spec) => {
                <li>{spec}</li>;
              })}
            </ul>
            <CustomLink
              label="more"
              href={`/work/code/${project.slug}`}
              adicionalClass={styles.button}
            />
          </CardBody>
        </DefaultCard>
      ))}
    </ListPage>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;
  let cards: unknown;

  const intro: IntroData = {
    title: 'work',
    lead: 'Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit.',
    linkList: [
      {
        id: 1,
        link: '/work/code',
        label: 'code'
      },
      {
        id: 2,
        link: '/work/design',
        label: 'design'
      },
      {
        id: 3,
        link: '/work/illustration',
        label: 'illustration'
      },
      {
        id: 4,
        link: '/work/other',
        label: 'other'
      }
    ]
  };

  function getCodeProjects(): CodeProjectsData[] {
    return [
      {
        id: 1,
        title: 'wolf watch',
        description:
          '"Excuse me! Do you have the time?!" A simple project to practice my CSS and JS skills, and also learn a bit about webpack...',
        slug: 'wolf-watch',
        image:
          'https://images.unsplash.com/photo-1512853378841-2c404110a4f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
        publishDate: '2021-02-13T01:38:03Z',
        updateDate: '2021-06-01T08:38:14Z',
        repository: 'https://github.com/theycallmewolf/wolf-watch',
        repositoryApi: 'https://api.github.com/repos/theycallmewolf/wolf-watch',
        url: 'https://watch.theycallmewolf.pt/',
        specs: ['scss', 'javascript', 'webpack', 'html'],
        coOwners: null
      },
      {
        id: 2,
        title: 'HUThome',
        description:
          'a record time project to keep delivering fitness content during quarentine, delivering live and on-demand workouts',
        slug: 'huthome',
        image:
          'https://images.unsplash.com/photo-1465505486239-73576daab293?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80',
        publishDate: '2020-04-28T01:38:03Z',
        updateDate: '',
        repository: null,
        repositoryApi: null,
        url: 'https://www.fitnesshut.pt/hut-home/',
        specs: ['html', 'css', 'javascript', 'php'],
        coOwners: [
          {
            name: 'Nuno Bengalito',
            url: 'https://github.com/nbengalito'
          }
        ]
      },
      {
        id: 3,
        title: 'Onlive',
        description:
          'onlive, a website for booking and assist online live music concerts ( final project for react.js course module at etic_ )',
        slug: 'onlive',
        image:
          'https://images.unsplash.com/photo-1496888057897-8a25eef593f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
        publishDate: '2020-06-13T11:34:34Z',
        updateDate: '2020-10-23T10:28:34Z',
        repository: 'https://github.com/theycallmewolf/onlive',
        repositoryApi: 'https://api.github.com/repos/theycallmewolf/onlive',
        url: null,
        specs: ['reactjs', 'php', 'javascript', 'html5', 'cssmodules-react'],
        coOwners: null
      },
      {
        id: 4,
        title: 'Hut reception',
        description: 'web app for Fitness Hut club reception area tablest',
        slug: 'hut-reception',
        image:
          'https://images.unsplash.com/photo-1540908300676-b00e9a003736?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80',
        publishDate: '2020-12-23T14:18:00Z',
        updateDate: '2021-05-11T13:12:00Z',
        repository: 'https://github.com/theycallmewolf/hut-reception',
        repositoryApi: 'https://api.github.com/repos/theycallmewolf/hut-reception',
        url: null,
        specs: [
          'reactjs',
          'html',
          'javascript',
          'yup',
          'styled-components',
          'crypto-js',
          'axios',
          'public-ip',
          'qrcode.react',
          'uuid'
        ],
        coOwners: null
      },
      {
        id: 5,
        title: 'wheel of fortune',
        description: 'A wheel of fortune developed just to have fun with javascript',
        slug: 'wheel-of-fortune',
        image: '',
        url: 'https://wheeloffortune.theycallmewolf.pt/',
        repository: 'https://github.com/theycallmewolf/wheel-of-fortune',
        repositoryApi: 'https://api.github.com/repos/theycallmewolf/wheel-of-fortune',
        specs: ['javascript', 'html', 'css'],
        publishDate: '2020-07-23T18:16:12Z',
        updateDate: '2021-02-13T18:54:25Z',
        coOwners: null
      },
      {
        id: 6,
        title: 'Go Barber',
        description: '',
        image:
          'https://images.unsplash.com/photo-1548053279-649e31d44b03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        publishDate: '2020-11-21T13:42:00Z',
        updateDate: '2021-02-09T14:51:56Z',
        url: 'https://gobarber.theycallmewolf.pt/',
        repository: 'https://github.com/theycallmewolf/gostack-gobarber-web',
        repositoryApi: 'https://api.github.com/repos/theycallmewolf/gostack-gobarber-web',
        coOwners: null,
        slug: 'go-barber',
        specs: ['react', 'javascript', 'nodejs', 'react native']
      }
    ];
  }

  const projects = getCodeProjects();
  cards = '';
  cards = projects.map((project) => ({
    id: project.id,
    title: project.title,
    description: project.description,
    image: project.image,
    slug: project.slug,
    specs: project.specs,
    publishDate: new Date(project.publishDate).toLocaleDateString('pt-PT', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }));

  return {
    props: {
      intro,
      cards
    }
  };
};
