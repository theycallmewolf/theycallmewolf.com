import Prismic from '@prismicio/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { RichText } from 'prismic-dom';
import { useCallback, useEffect, useRef, useState } from 'react';

import { IArrow, IMenu, IMinus, IPlus } from '../../../assets/icons';
import { Slider } from '../../../components/elements/Slider';
import { Header } from '../../../components/sections/Header';
import { useTheme } from '../../../hooks/useTheme';
import { getPrismicClient } from '../../../services/prismic';
import { NextProject, ProjectDetails, ProjectProps } from '../../../types';
import { getRandomInt } from '../../../utils';
import styles from './styles.module.scss';

export default function Code({ project, nextProjects }: ProjectProps): JSX.Element {
  const [hidesAbout, setHidesAbout] = useState(true);
  const [hidesSpecs, setHidesSpec] = useState(true);
  const [slides, setSlides] = useState([]);
  const [nextProject, setNextProject] = useState(null);
  const projectPreview = useRef(null);
  const topMark = useRef(null);

  const { getTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    getTheme();
  }, [getTheme]);

  useEffect(() => {
    setSlides(
      project.images.project_images.map((slide) => {
        const { image_large, image_large_2x, image_small, image_small_2x } = slide;
        return {
          slider: {
            image_large,
            image_large_2x,
            image_small,
            image_small_2x
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

  return (
    <>
      <Head>
        <title>they call me wolf | {project.title}</title>
        <meta name="description" content={project.images.caption} />
      </Head>
      <Header />
      <main className={styles.main} onScroll={onScroll}>
        <span ref={topMark}></span>

        <section className={styles.intro}>
          <div>
            <picture>
              <source
                srcSet={`${project.images.cover_large}, ${project.images.cover_large_2x} 2x`}
                media="(min-width: 425px)"
              />
              <source srcSet={`${project.images.cover_small_2x} 2x`} />
              <img src={project.images.cover_small} alt={project.title} />
            </picture>
          </div>
          <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </div>
          <button className={styles.backBtn} onClick={() => router.back()}>
            <IArrow color="white" />
          </button>
        </section>

        <section className={styles.lead}>
          <IPlus />
          <h2>{project.leads[0]}</h2>
        </section>

        <Slider slides={slides} contentType="image" additionalClass={styles.slider} />

        <section className={styles.lead}>
          <IArrow />
          <h2>{project.leads[1]}</h2>
        </section>

        <section className={styles.specs}>
          <div>
            <button onClick={() => handleAccordion('about')}>
              <h2>About</h2>
              {hidesAbout ? <IPlus className={styles.icon} /> : <IMinus className={styles.icon} />}
            </button>
            <div className={`${styles.content} ${hidesAbout ? styles.hide : ''}`}>
              {project.about.map(
                (item, i) => item.type === 'paragraph' && <p key={i}>{item.text}</p>
              )}
            </div>
          </div>
          <div>
            <button onClick={() => handleAccordion('specs')}>
              <h2>Specs</h2>
              {hidesSpecs ? <IPlus className={styles.icon} /> : <IMinus className={styles.icon} />}
            </button>
            <div className={`${styles.content} ${hidesSpecs ? styles.hide : ''}`}>
              <div>
                <strong>release date</strong>
                <span>20/07/2020</span>
              </div>
              <div>
                <a href="." className={styles.btn}>
                  visit project website <IArrow />
                </a>
                <a href="." className={styles.btn}>
                  check the code at GitHub <IArrow />
                </a>
              </div>
              <div>
                <strong>technologies</strong>
                <div className={styles.tags}>
                  <span>HTML</span>
                  <span>JavaScript</span>
                  <span>CSS</span>
                  <span>React</span>
                </div>
              </div>
              <div>
                <strong>dependencies</strong>
                <div className={styles.tags}>
                  <a href=".">axios</a>
                  <a href=".">react-slick</a>
                  <a href=".">slick-carousel</a>
                  <a href=".">react-dom</a>
                  <a href=".">react-router-dom</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.lead}>
          <IMenu />
          <h2>{project.leads[2]}</h2>
        </section>

        {nextProject && (
          <section className={styles.intro} ref={projectPreview}>
            <span className={styles.title}>
              <h2>You may also like</h2>
              <p>just keep scrolling</p>
            </span>
            <div>
              <picture>
                <source
                  srcSet={`${nextProject.images.cover_large}, ${nextProject.images.cover_large_2x} 2x`}
                  media="(min-width: 425px)"
                />
                <source srcSet={`${nextProject.images.cover_small_2x} 2x`} />
                <img src={nextProject.images.cover_small} alt={nextProject.title} />
              </picture>
            </div>
            <div>
              <h1>{nextProject.title}</h1>
              <p>{nextProject.description}</p>
            </div>
            <button
              className={styles.backBtn}
              onClick={() => {
                router.push(`/work/project/${nextProject.slug}`);
                topMark.current.scrollIntoView();
              }}>
              <IPlus />
            </button>
          </section>
        )}
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { uid } = params;
  const prismic = getPrismicClient();

  async function getProject(): Promise<ProjectDetails> {
    const response = await prismic.getByUID('projects', String(uid), {});
    const { id, data } = response;
    const {
      title,
      type,
      project_date,
      description,
      link,
      repository,
      repository_api,
      cover_small,
      cover_small_2x,
      cover_large,
      cover_large_2x,
      caption,
      about,
      body,
      body1
    } = data;

    let specs = body.filter(({ slice_type }) => slice_type === 'technologies').shift() ?? null;

    if (specs) {
      specs = specs.items.map(({ tech }, i: number) => ({
        spec: tech,
        id: i
      }));
    }

    let leads = body.filter(({ slice_type }) => slice_type === 'leads').shift() ?? null;

    if (leads) leads = leads.items.map(({ lead }) => RichText.asText(lead));

    const project_images = body1
      .filter(({ slice_type }) => slice_type === 'slider')
      .shift()
      .items.map(({ screen_small, screen_small_2x, screen_large, screen_large_2x }, i: number) => ({
        image_small: screen_small.url,
        image_small_2x: screen_small_2x.url ?? (screen_small.url || null),
        image_large: screen_large.url,
        image_large_2x: screen_large_2x.url ?? (screen_large.url || null),
        slug: String(i)
      }));

    return {
      id,
      title: RichText.asText(title),
      type,
      slug: uid[0],
      project_date: project_date,
      description: RichText.asText(description),
      link: link?.url ? link.url : null,
      repository: repository.url ? repository.url : null,
      repository_api: repository_api.url ? repository_api.url : null,
      specs,
      about,
      leads,
      images: {
        cover_small: cover_small.url ?? null,
        cover_small_2x: cover_small_2x.url ?? (cover_small.url || null),
        cover_large: cover_large.url ?? null,
        cover_large_2x: cover_large_2x.url ?? (cover_large.url || null),
        project_images,
        caption: RichText.asText(caption)
      }
    };
  }

  async function getNextProject(): Promise<NextProject[]> {
    const response = await prismic.query(Prismic.predicates.at('document.type', 'projects'), {
      fetch: [
        'projects.title',
        'projects.description',
        'projects.highlight',
        'projects.project_date',
        'projects.type',
        'projects.cover_large',
        'projects.cover_large_2x',
        'projects.cover_small',
        'projects.cover_small_2x'
      ],
      pageSize: 12,
      lang: 'en-us'
    });
    return response.results.map(({ id, uid, data }) => {
      const {
        title,
        project_date,
        type,
        cover_large,
        cover_large_2x,
        cover_small,
        cover_small_2x,
        description
      } = data;

      return {
        id,
        type,
        title: RichText.asText(title) ?? null,
        slug: uid,
        project_date: String(new Date(project_date).getFullYear()),
        description: RichText.asText(description),
        images: {
          cover_large: cover_large.url,
          cover_large_2x: cover_large_2x.url,
          cover_small: cover_small.url,
          cover_small_2x: cover_small_2x.url
        }
      };
    });
  }

  const project = await getProject();
  const nextProjects = await getNextProject();

  return {
    props: {
      project,
      nextProjects
    },
    revalidate: 60 * 60 * 1 // 1 hour
  };
};
