import Prismic from '@prismicio/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
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
import { IntroData, LinkData, ProjectData } from '../../types';
import { formatDate } from '../../utils';
import styles from './styles.module.scss';

interface WorkProps {
  intro: IntroData;
  link_list: LinkData[];
  cards: ProjectData[];
}

export default function Work({ intro, link_list, cards }: WorkProps): JSX.Element {
  const router = useRouter();
  const { slug } = router.query;
  const { getTheme } = useTheme();

  useEffect(() => {
    getTheme();
  }, [getTheme]);

  return (
    <ListPage
      intro={intro}
      link_list={link_list}
      pageTitle="work"
      imageURL="/assets/img/cover-work.jpg"
      slug={slug}
      pageDescription="...">
      {cards.map((project) => (
        <DefaultCard key={project.id} customClass={styles.card}>
          <CardHeader>
            {project.slider.image_small !== '' ? (
              <Link href={`/work/project/${project.slug}`}>
                <a>
                  <picture>
                    <source
                      srcSet={`${project.slider.image_large}, ${project.slider.image_large_2x} 2x`}
                      media="(min-width: 425px)"
                    />
                    <source srcSet={`${project.slider.image_small_2x} 2x`} />
                    <img src={project.slider.image_small} alt={project.title} />
                  </picture>
                </a>
              </Link>
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

  async function getIntro(): Promise<IntroData[]> {
    const response = await prismic.query(Prismic.Predicates.at('document.type', 'intro'), {
      orderings: '[my.intro.order]'
    });
    return response.results
      .filter(({ data }) => data.type === 'work')
      .map(({ data }) => {
        const { title, lead, link } = data;

        return {
          lead: RichText.asText(lead),
          title: RichText.asText(title),
          link_list: [
            {
              link: RichText.asText(link),
              label: RichText.asText(title).toLowerCase()
            }
          ]
        };
      });
  }

  const introList = await getIntro();
  const link_list = introList.map((item) => item.link_list).flat();
  const intro = introList.filter(({ title }) => title === slug);

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
        'projects.image_large_2x',
        'projects.highlight'
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
        description,
        highlight
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
        type,
        title: RichText.asText(title),
        slug: uid,
        project_date: formatDate(project_date),
        description: RichText.asText(description),
        slider: {
          image_small: image_small.url,
          image_small_2x: image_small_2x.url ?? (image_small_2x.url || image_small.url),
          image_large: image_large.url,
          image_large_2x: image_large_2x.url ?? (image_large_2x.url || image_large.url)
        },
        highlight,
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
      link_list,
      cards
    },
    revalidate: 60 * 60 * 1 // 1 hour
  };
};
