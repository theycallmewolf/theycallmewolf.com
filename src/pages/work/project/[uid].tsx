import Prismic from '@prismicio/client';
import { IArrow, IMenu, IMinus, IPlus } from 'assets/icons';
import { Slider } from 'components/elements';
import { Header } from 'components/sections';
import { useTheme } from 'hooks/useTheme';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';
import { getNextProject, getPrismicClient, getProject } from 'services/prismic';
import { COLORS } from 'theme';
import { NextProject, ProjectProps } from 'types';
import { formatDate, getRandomInt } from 'utils';

import styles from './styles.module.scss';

type NextProjectProps = {
  nextProject: NextProject;
  projectPreviewRef: MutableRefObject<HTMLDivElement>;
};

type LeadProps = {
  title: string;
  icon: 'plus' | 'arrow' | 'menu';
};

const Intro: React.FC<ProjectProps> = ({ project }) => {
  const router = useRouter();

  return (
    <section className={styles.intro}>
      <div className={styles['image-container']}>
        <Image src={project.images.cover_large_2x} layout="fill" objectFit="cover" />
      </div>
      <div className={styles['project-details']}>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
      <button className={styles['back-btn']} onClick={() => router.back()}>
        <IArrow />
        back
      </button>
    </section>
  );
};

const Specs: React.FC<ProjectProps> = ({ project }) => {
  const [hidesAbout, setHidesAbout] = useState(true);
  const [hidesSpecs, setHidesSpec] = useState(true);

  const handleAccordion = useCallback(
    (content: 'about' | 'specs') => {
      if (window.matchMedia('(min-width: 768px)').matches) {
        setHidesAbout(false);
        setHidesSpec(false);
        return;
      }

      if (content === 'about') setHidesAbout(!hidesAbout);
      if (content === 'specs') setHidesSpec(!hidesSpecs);
    },
    [hidesAbout, hidesSpecs]
  );

  useEffect(() => {
    if (!window.matchMedia('(min-width: 768px)').matches) return;

    setHidesAbout(false);
    setHidesSpec(false);
  }, []);

  return (
    <section className={styles.specs}>
      <div>
        <button onClick={() => handleAccordion('about')}>
          <h2>About</h2>
          {hidesAbout ? <IPlus className={styles.icon} /> : <IMinus className={styles.icon} />}
        </button>
        <div className={`${styles.content} ${hidesAbout ? styles.hide : ''}`}>
          {project.about.map((item, i) => item.type === 'paragraph' && <p key={i}>{item.text}</p>)}
        </div>
      </div>
      <div>
        <button onClick={() => handleAccordion('specs')}>
          <h2>Specs</h2>
          {hidesSpecs ? <IPlus className={styles.icon} /> : <IMinus className={styles.icon} />}
        </button>
        <div className={`${styles.content} ${hidesSpecs ? styles.hide : ''}`}>
          {project.project_date && (
            <div>
              <strong>release date</strong>
              <span>{formatDate(project.project_date)}</span>
            </div>
          )}
          <div className={!project.link && !project.repository ? 'hide' : undefined}>
            {project.link && (
              <a
                href={project.link}
                className={styles.btn}
                target="_blank"
                rel="noopener noreferrer ">
                visit project website <IArrow />
              </a>
            )}
            {project.repository && (
              <a
                href={project.repository}
                className={styles.btn}
                target="_blank"
                rel="noopener noreferrer ">
                check the code at GitHub <IArrow />
              </a>
            )}
          </div>
          {project.specs && (
            <div>
              <strong>technologies</strong>
              <div className={styles.tags}>
                {project.specs.map(({ spec }, i) => (
                  <span key={i}>{spec}</span>
                ))}
              </div>
            </div>
          )}
          {project.dependencies && (
            <div>
              <strong>dependencies</strong>
              <div className={styles.tags}>
                {project.dependencies.map(({ label, url }, i) => (
                  <a href={url} key={i} target="_blank" rel="noreferrer noopener">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const NextProject: React.FC<NextProjectProps> = ({ nextProject, projectPreviewRef }) => {
  if (nextProject)
    return (
      <section className={`${styles.intro} ${styles.next}`} ref={projectPreviewRef}>
        <div className={styles.title}>
          <h2>Next</h2>
          <p>just keep scrolling</p>
        </div>
        <div className={styles['image-container']}>
          <Image
            src={nextProject.images.cover_large_2x}
            layout="fill"
            objectFit="cover"
            quality={90}
          />
        </div>
        <div className={styles['project-details']}>
          <h1>{nextProject.title}</h1>
          <p>{nextProject.description}</p>
        </div>
      </section>
    );

  return null;
};

const Lead: React.FC<LeadProps> = ({ title, icon }) => (
  <section className={styles.lead}>
    {icon === 'plus' && <IPlus />}
    {icon === 'arrow' && <IArrow />}
    {icon === 'menu' && <IMenu />}
    <h2>{title}</h2>
  </section>
);

const Code: NextPage<ProjectProps> = ({ project, nextProjects }) => {
  const router = useRouter();
  const { getTheme, hasDarkMode } = useTheme();

  const topMarkRef = useRef<HTMLSpanElement>(null);
  const projectPreviewRef = useRef<HTMLDivElement>(null);

  const [slides, setSlides] = useState([]);
  const [nextProject, setNextProject] = useState<NextProject | undefined>(undefined);
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
  useEffect(getTheme);

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
    <>
      <Head>
        <title>{project.title} | they call me wolf</title>
        <meta name="description" content={project.images.caption} />
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color={hasDarkMode ? COLORS.COSMOS_BLACK : COLORS.IRIDIUM_WHITE}
        />
        <meta
          name="msapplication-TileColor"
          content={hasDarkMode ? COLORS.COSMOS_BLACK : COLORS.IRIDIUM_WHITE}
        />
        <meta
          name="theme-color"
          content={hasDarkMode ? COLORS.COSMOS_BLACK : COLORS.IRIDIUM_WHITE}
        />
      </Head>
      <Header />

      <main className={styles.main} onScroll={onScroll}>
        <span ref={topMarkRef}></span>
        <Intro project={project} />
        <Lead title={project.leads[0]} icon="plus" />
        <Slider slides={slides} contentType="image" additionalClass={styles.slider} />
        <Lead title={project.leads[1]} icon="arrow" />
        <Specs project={project} />
        <Lead title={project.leads[2]} icon="menu" />
        <NextProject projectPreviewRef={projectPreviewRef} nextProject={nextProject} />
      </main>
    </>
  );
};

export default Code;

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const { results } = await prismic.query(Prismic.Predicates.at('document.type', 'projects'));
  return {
    paths: results.map(({ uid }) => `/work/project/${uid}`),
    fallback: 'blocking'
  };
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
    revalidate: 60 * 60 * 24 * 7 // 7 days
  };
};
