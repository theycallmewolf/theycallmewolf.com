import Prismic from '@prismicio/client';
import { Layout } from 'components/layout';
import { Intro } from 'components/sections/Project/Intro';
import { Lead } from 'components/sections/Project/Lead';
import { NextProject } from 'components/sections/Project/NextProject';
import { ProjectSlider } from 'components/sections/Project/ProjectSlider';
import { Specs } from 'components/sections/Project/Specs';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from 'pages/_app';
import { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import { getNextProject, getPrismicClient, getProject } from 'services/prismic';
import { NextProject as NextProjectTypes, ProjectProps } from 'types';
import { getRandomInt } from 'utils';

import styles from './project.module.scss';

const ProjectPage: NextPageWithLayout<ProjectProps> = ({ project, nextProjects }) => {
  const router = useRouter();

  const topMarkRef = useRef<HTMLSpanElement>(null);
  const projectPreviewRef = useRef<HTMLDivElement>(null);

  const [slides, setSlides] = useState([]);
  const [nextProject, setNextProject] = useState<NextProjectTypes | undefined>(undefined);
  const [projectsSeenIDs, setProjectsSeenIDs] = useState<string[]>([]);

  const onScroll = useCallback(() => {
    const { top } = projectPreviewRef.current.getBoundingClientRect();
    const { slug } = nextProject;

    if (top <= 80) {
      router.push(`/work/project/${slug}`);
      topMarkRef.current.scrollIntoView();
    }
  }, [nextProject, router]);

  const handleNextProject = useCallback(() => {
    let i = getRandomInt(0, nextProjects.length);

    if (nextProject && projectsSeenIDs.includes[nextProjects[i].id]) {
      i = getRandomInt(0, nextProjects.length);

      setProjectsSeenIDs((state) => [...state, nextProjects[i].id]);
      setNextProject(
        nextProjects.map((p) => {
          if (p.id !== nextProjects[i].id) return p;
        })[i]
      );
    }

    setNextProject(nextProjects[i]);
  }, [nextProject, nextProjects, projectsSeenIDs.includes]);

  useEffect(handleNextProject);

  useEffect(() => {
    setSlides(
      project.images.project_images.map(({ image_large_2x }) => ({
        slider: {
          image_large_2x
        }
      }))
    );
  }, [project.images.project_images]);

  return (
    <main className={styles.main} onScroll={onScroll}>
      <span ref={topMarkRef} />
      <Intro
        project={{
          title: project.title,
          description: project.description,
          image: project.images.cover_large_2x
        }}
      />
      <Lead title={project.leads[0]} icon="plus" />
      <ProjectSlider slides={slides} />
      <Lead title={project.leads[1]} icon="arrow" />
      <Specs project={project} />
      <Lead title={project.leads[2]} icon="menu" />
      <NextProject projectPreviewRef={projectPreviewRef} nextProject={nextProject} />
    </main>
  );
};

export default ProjectPage;

ProjectPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      title={page.props.project?.title ?? 'Project'}
      description={page.props.project?.images.caption}>
      {page}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { uid } = params;

  const project = await getProject({ uid });
  const nextProjects = await getNextProject();

  return {
    props: {
      project,
      nextProjects
    },
    revalidate: 60
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const { results } = await prismic.query(Prismic.Predicates.at('document.type', 'projects'));
  return {
    paths: results.map(({ uid }) => ({
      params: { uid }
    })),
    fallback: 'blocking'
  };
};
