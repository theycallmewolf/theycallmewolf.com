import Prismic from '@prismicio/client';
import { IArrow, IMenu, IMinus, IPlus } from 'assets/icons';
import { Slider } from 'components/elements';
import { Header } from 'components/sections';
import { useTheme } from 'hooks/useTheme';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { getNextProject, getPrismicClient, getProject } from 'services/prismic';
import { COLORS } from 'theme';
import { ProjectProps } from 'types';
import { formatDate, getRandomInt } from 'utils';

import styles from './styles.module.scss';

export default function Code({ project, nextProjects }: ProjectProps): JSX.Element {
  const [hidesAbout, setHidesAbout] = useState(true);
  const [hidesSpecs, setHidesSpec] = useState(true);
  const [slides, setSlides] = useState([]);
  const [nextProject, setNextProject] = useState(null);
  const projectPreview = useRef(null);
  const topMark = useRef(null);

  const { getTheme, hasDarkMode } = useTheme();
  const router = useRouter();

  useEffect(getTheme);

  useEffect(() => {
    setSlides(
      project.images.project_images.map((slide) => {
        const { image_large_2x } = slide;
        return {
          slider: {
            image_large_2x
          }
        };
      })
    );
  }, [project.images.project_images]);

  useEffect(() => {
    if (window.matchMedia('(min-width: 768px)').matches) {
      setHidesAbout(false);
      setHidesSpec(false);
    } else {
      setHidesAbout(true);
      setHidesSpec(true);
    }
  }, []);

  useEffect(() => {
    let randomIndex = getRandomInt(0, nextProjects.length);
    if (nextProject && nextProjects[randomIndex].id === nextProject.id)
      randomIndex = getRandomInt(0, nextProjects.length);
    setNextProject(nextProjects[randomIndex]);
  }, [nextProject, nextProjects]);

  const onScroll = () => {
    const { top } = projectPreview.current.getBoundingClientRect();
    const { slug } = nextProject;

    if (top <= 80) {
      router.push(`/work/project/${slug}`);
      topMark.current.scrollIntoView();
    }
  };

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

  const {
    title,
    images,
    description,
    leads,
    about,
    dependencies,
    project_date,
    link,
    repository,
    specs
  } = project;
  const { caption, cover_large_2x } = images;

  return (
    <>
      <Head>
        <title>{title} | they call me wolf</title>
        <meta name="description" content={caption} />
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
        <span ref={topMark}></span>

        <section className={styles.intro}>
          <div className={styles.imageContainer}>
            <Image src={cover_large_2x} layout="fill" objectFit="cover" />
          </div>
          <div className={styles.projectDetails}>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <button className={styles.backBtn} onClick={() => router.back()}>
            <IArrow />
            back
          </button>
        </section>

        <section className={styles.lead}>
          <IPlus />
          <h2>{leads[0]}</h2>
        </section>

        <Slider slides={slides} contentType="image" additionalClass={styles.slider} />

        <section className={styles.lead}>
          <IArrow />
          <h2>{leads[1]}</h2>
        </section>

        <section className={styles.specs}>
          <div>
            <button onClick={() => handleAccordion('about')}>
              <h2>About</h2>
              {hidesAbout ? <IPlus className={styles.icon} /> : <IMinus className={styles.icon} />}
            </button>
            <div className={`${styles.content} ${hidesAbout ? styles.hide : ''}`}>
              {about.map((item, i) => item.type === 'paragraph' && <p key={i}>{item.text}</p>)}
            </div>
          </div>
          <div>
            <button onClick={() => handleAccordion('specs')}>
              <h2>Specs</h2>
              {hidesSpecs ? <IPlus className={styles.icon} /> : <IMinus className={styles.icon} />}
            </button>
            <div className={`${styles.content} ${hidesSpecs ? styles.hide : ''}`}>
              {project_date && (
                <div>
                  <strong>release date</strong>
                  <span>{formatDate(project_date)}</span>
                </div>
              )}
              <div className={!link && !repository ? 'hide' : undefined}>
                {link && (
                  <a href={link} className={styles.btn} target="_blank" rel="noopener noreferrer ">
                    visit project website <IArrow />
                  </a>
                )}
                {repository && (
                  <a
                    href={repository}
                    className={styles.btn}
                    target="_blank"
                    rel="noopener noreferrer ">
                    check the code at GitHub <IArrow />
                  </a>
                )}
              </div>
              {specs && (
                <div>
                  <strong>technologies</strong>
                  <div className={styles.tags}>
                    {specs.map(({ spec }, i) => (
                      <span key={i}>{spec}</span>
                    ))}
                  </div>
                </div>
              )}
              {dependencies && (
                <div>
                  <strong>dependencies</strong>
                  <div className={styles.tags}>
                    {dependencies.map(({ label, url }, i) => (
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

        <section className={styles.lead}>
          <IMenu />
          <h2>{leads[2]}</h2>
        </section>

        {nextProject && (
          <section className={`${styles.intro} ${styles.next}`} ref={projectPreview}>
            <div className={styles.title}>
              <h2>Next</h2>
              <p>just keep scrolling</p>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src={nextProject.images.cover_large_2x}
                layout="fill"
                objectFit="cover"
                quality={90}
              />
            </div>
            <div className={styles.projectDetails}>
              <h1>{nextProject.title}</h1>
              <p>{nextProject.description}</p>
            </div>
          </section>
        )}
      </main>
    </>
  );
}

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
