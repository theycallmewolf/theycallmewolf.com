import { TangramCard } from 'assets/tangrams/';
import { Card, CardBody, CardFooter, CardHeader, CustomLink } from 'components/elements';
import { Layout } from 'components/layout';
import { Aside, CardList } from 'components/sections';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from 'pages/_app';
import { ReactElement } from 'react';
import { getIntro, getProjects } from 'services/prismic';
import { IntroData, LinkData, Project, ProjectData } from 'types';

import styles from './work.module.scss';

interface WorkPageProps {
  intro: IntroData;
  link_list: LinkData[];
  cards: ProjectData[];
}

const WorkPage: NextPageWithLayout<WorkPageProps> = (props) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <main>
      <Aside
        intro={props.intro}
        link_list={props.link_list}
        imageURL="/assets/img/cover-work-alt.jpg"
      />
      <CardList slug={slug}>
        {props.cards.map(({ id, slider, slug, project_date, title, description, specs }) => (
          <Card key={id} className={styles.card}>
            <CardHeader>
              {slider.image_large_2x === '' ? (
                <TangramCard className={styles.placeholder} />
              ) : (
                <div className={styles.imageContainer}>
                  <Link href={`/work/project/${slug}`}>
                    <a>
                      <Image
                        src={slider.image_large_2x}
                        layout="fill"
                        objectFit="cover"
                        quality={90}
                      />
                    </a>
                  </Link>
                </div>
              )}
            </CardHeader>
            <CardBody>
              <span className={styles.date}>{project_date}</span>
              <h2>{title}</h2>
              <p>{description}</p>
              <ul className={styles.specs}>
                {!!specs && specs.map(({ spec, id }) => <li key={id}>{spec}</li>)}
              </ul>
            </CardBody>
            <CardFooter>
              <CustomLink label="more" href={`/work/project/${slug}`} className={styles.button} />
            </CardFooter>
          </Card>
        ))}
      </CardList>
    </main>
  );
};

export default WorkPage;

WorkPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      title="WORK"
      description="Here's the list of some of the projects (personal and profissional) that Mr. Wolf worked on. From Web development to illustration, passing through UI design and graphic design. It's a lot... of gray hair at least.">
      {page}
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    // paths: ['/work/code', '/work/illustration', '/work/design', '/work/other'],
    paths: ['/work/code', '/work/illustration', '/work/design'],
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  let cards: unknown;

  const [introList, projects] = await Promise.all([getIntro({ area: 'work' }), getProjects()]);

  const link_list = introList.map(({ link_list }) => link_list).flat();
  const intro = introList.filter(({ title }) => title === slug);

  const [codeProjects, designProjects, illustrationProjects, otherProjects] = await Promise.all([
    filterProjectsByType(projects, 'code'),
    filterProjectsByType(projects, 'design'),
    filterProjectsByType(projects, 'illustration'),
    filterProjectsByType(projects, 'other')
  ]);

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
    revalidate: 60 // secs
  };
};

// Helper
const filterProjectsByType = async (projects: ProjectData[], type: Project['type']) => {
  return projects.filter((project) => project.type === type);
};
