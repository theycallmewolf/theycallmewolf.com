import Prismic from '@prismicio/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { RichText } from 'prismic-dom';
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
import { getPrismicClient } from '../../services/prismic';
import { formatDate } from '../../utils';
import styles from './styles.module.scss';

type LinkData = { id: number; link: string; label: string };
type SpecsData = { id: string; spec: string };
type IntroData = { title: string; lead: string; link_list: LinkData[] };

type ProjectData = {
  id: string;
  type: 'code' | 'illustration' | 'design' | 'other';
  slug: string;
  title: string;
  description: string;
  image_large: string;
  image_large_2x: string;
  image_small: string;
  image_small_2x: string;
  project_date: string;
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
                <source
                  srcSet={`${project.image_large}, ${project.image_large_2x} 2x`}
                  media="(min-width: 425px)"
                />
                <source srcSet={`${project.image_small_2x} 2x`} />
                <img src={project.image_small} alt={project.title} />
              </picture>
            ) : (
              <TangramCard customClass={styles.placeholder} />
            )}
          </CardHeader>
          <CardBody>
            <span className={styles.date}>{project.project_date}</span>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <ul className={styles.specs}>
              {!!project.specs && project.specs.map(({ spec, id }) => <li key={id}>{spec}</li>)}
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
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ['/work/code', '/work/illustration', '/work/design', '/work/other'],
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const prismic = getPrismicClient();
  const { slug } = params;
  let cards: unknown;

  const intro: IntroData = {
    title: 'work',
    lead: 'Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit.',
    link_list: [
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
    const response = await prismic.query(Prismic.predicates.at('document.type', 'projects'), {
      orderings: '[my.projects.project_date desc]',
      fetch: [
        'projects.title',
        'projects.description',
        'projects.type',
        'projects.project_date',
        'projects.body',
        'projects.image_small',
        'projects.image_small_2x',
        'projects.image_large',
        'projects.image_large_2x'
      ],
      lang: 'en-us'
    });

    return response.results.map(({ id, uid, data }) => {
      const {
        title,
        type,
        project_date,
        body,
        image_large,
        image_large_2x,
        image_small,
        image_small_2x,
        description
      } = data;
      let specs = body.filter(({ slice_type }) => slice_type === 'technologies').shift() ?? null;

      if (specs) {
        specs = specs.items.map(({ tech }, i: number) => ({
          spec: tech,
          id: i
        }));
      }

      return {
        id,
        slug: uid,
        type,
        title: RichText.asText(title),
        description: RichText.asText(description),
        image_large: image_large.url,
        image_large_2x: image_large_2x.url ?? (image_large_2x.url || image_large.url),
        image_small: image_small.url,
        image_small_2x: image_small_2x.url ?? (image_small_2x.url || image_small.url),
        project_date: formatDate(project_date),
        specs
      };
    });
  }

  const projects = await getProjectData();

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

  return {
    props: {
      intro,
      cards
    },
    revalidate: 60 * 60 * 1 // 1 hour
  };
};
