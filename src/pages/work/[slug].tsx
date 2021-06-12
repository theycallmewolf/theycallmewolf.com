import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { TangramCard } from '../../assets/tangrams/';
import {
  CardBody,
  CardFooter,
  CardHeader,
  DefaultCard
} from '../../components/elements/Cards/DefaultCard';
import { CustomLink } from '../../components/elements/Link';
import ListPage from '../../components/layouts/ListPage';
import { useTheme } from '../../hooks/useTheme';
import { getContent } from '../../services/prismic';
import styles from './styles.module.scss';

type LinkData = { id: number; link: string; label: string };
type SpecsData = { id: string; spec: string };
type IntroData = { title: string; lead: string; linkList: LinkData[] };

type ProjectData = {
  id: string;
  type: 'code' | 'illustration' | 'design' | 'other';
  slug: string;
  title: string;
  description: string;
  image_large: string;
  image_small: string;
  projectDate: string;
  specs: SpecsData[];
};

interface WorkProps {
  intro: IntroData;
  cards: ProjectData[];
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
        <DefaultCard key={project.id} customClass={styles.card}>
          <CardHeader>
            {project.image_small !== '' ? (
              <picture>
                <source srcSet={project.image_large} media="(min-width: 425px)" />
                <img src={project.image_small} alt={project.title} />
              </picture>
            ) : (
              <TangramCard customClass={styles.placeholder} />
            )}
          </CardHeader>
          <CardBody>
            <span className={styles.date}>{project.projectDate}</span>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <ul className={styles.specs}>
              {project.specs && project.specs.map(({ spec, id }) => <li key={id}>{spec}</li>)}
            </ul>
          </CardBody>
          <CardFooter>
            <CustomLink
              label="more"
              href={`/work/project/${project.slug}`}
              customClass={styles.button}
            />
          </CardFooter>
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

  async function getProjectData(): Promise<ProjectData[]> {
    const projectsResponse = await getContent({
      type: 'projects',
      fields: ['title', 'imageurl', 'caption']
    });

    return projectsResponse.map((project) => {
      const { slug, title, description, images, dates, type, id, specs } = project;
      const { slider } = images;
      const { image_large, image_small } = slider;
      const { projectDate } = dates;
      return {
        id,
        type,
        slug,
        title,
        description,
        image_large,
        image_small,
        projectDate,
        specs
      };
    });
  }

  const projects: ProjectData[] = await getProjectData();

  const codeProjects = projects.filter((project) => project.type === 'code');
  const designProjects = projects.filter((project) => project.type === 'design');
  const illustrationProjects = projects.filter((project) => project.type === 'illustration');
  const otherProjects = projects.filter((project) => project.type === 'other');

  switch (slug) {
    case 'code':
      cards = codeProjects;
      break;

    case 'design':
      cards = designProjects;
      break;

    case 'illustration':
      cards = illustrationProjects;
      break;

    case 'other':
      cards = otherProjects;
      break;

    default:
      cards = codeProjects;
      break;
  }
  // function getCodeProjects(): CodeProjectsData[] {
  //   return [
  //     {
  //       id: 4,
  //       title: 'Hut reception',
  //       description: 'web app for Fitness Hut club interactive reception area',
  //       slug: 'hut-reception',
  //       image:
  //         'https://images.unsplash.com/photo-1540908300676-b00e9a003736?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80',
  //       publishDate: '2020-12-23T14:18:00Z',
  //       updateDate: '2021-05-11T13:12:00Z',
  //       repository: 'https://github.com/theycallmewolf/hut-reception',
  //       repositoryApi: 'https://api.github.com/repos/theycallmewolf/hut-reception',
  //       url: null,
  //       specs: [
  //         'reactjs',
  //         'html',
  //         'javascript',
  //         'yup',
  //         'styled-components',
  //         'crypto-js',
  //         'axios',
  //         'public-ip',
  //         'qrcode.react',
  //         'uuid'
  //       ],
  //       team: null
  //     },
  //     {
  //       id: 5,
  //       title: 'wheel of fortune',
  //       description: 'A wheel of fortune developed just to have fun with javascript',
  //       slug: 'wheel-of-fortune',
  //       image: '',
  //       url: 'https://wheeloffortune.theycallmewolf.pt/',
  //       repository: 'https://github.com/theycallmewolf/wheel-of-fortune',
  //       repositoryApi: 'https://api.github.com/repos/theycallmewolf/wheel-of-fortune',
  //       specs: ['javascript', 'html', 'css'],
  //       publishDate: '2020-07-23T18:16:12Z',
  //       updateDate: '2021-02-13T18:54:25Z',
  //       team: null
  //     },
  //     {
  //       id: 6,
  //       title: 'Go Barber',
  //       description: '',
  //       image:
  //         'https://images.unsplash.com/photo-1548053279-649e31d44b03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  //       publishDate: '2020-11-21T13:42:00Z',
  //       updateDate: '2021-02-09T14:51:56Z',
  //       url: 'https://gobarber.theycallmewolf.pt/',
  //       repository: 'https://github.com/theycallmewolf/gostack-gobarber-web',
  //       repositoryApi: 'https://api.github.com/repos/theycallmewolf/gostack-gobarber-web',
  //       team: null,
  //       slug: 'go-barber',
  //       specs: ['react', 'javascript', 'nodejs', 'react native']
  //     }
  //   ];
  // }

  return {
    props: {
      intro,
      cards
    }
  };
};
