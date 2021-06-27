import Prismic from '@prismicio/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { RichText } from 'prismic-dom';
import { useCallback, useEffect, useState } from 'react';

import { IArrow, IMinus, IPlus } from '../../../assets/icons';
import {
  CardBody,
  CardFooter,
  CardHeader,
  DefaultCard
} from '../../../components/elements/Cards/DefaultCard';
import { CustomLink } from '../../../components/elements/Link';
import { Slider } from '../../../components/elements/Slider';
import { Footer } from '../../../components/layouts/Footer';
import { Header } from '../../../components/sections/Header';
import { useTheme } from '../../../hooks/useTheme';
import { getPrismicClient } from '../../../services/prismic';
import { CodeProps, PostData, ProjectDetails } from '../../../types';
import { formatDate } from '../../../utils';
import styles from './styles.module.scss';

export default function Code({ project, posts }: CodeProps): JSX.Element {
  const [hidesAbout, setHidesAbout] = useState(true);
  const [hidesSpecs, setHidesSpec] = useState(true);
  const [slides, setSlides] = useState([]);

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
      <main className={styles.main}>
        <Header />

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

        <Slider slides={slides} contentType="image" additionalClass={styles.slider} />
        <section className={styles.specs}>
          <div>
            <button onClick={() => handleAccordion('about')}>
              <h2>About</h2>
              {hidesAbout ? <IPlus className={styles.icon} /> : <IMinus className={styles.icon} />}
            </button>
            <div className={hidesAbout ? styles.hide : undefined}>
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
            <div className={hidesSpecs ? styles.hide : undefined}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam distinctio
                aspernatur reiciendis, praesentium neque nemo, quia consequatur repellendus dicta
                eveniet modi dolorem nihil sunt earum. <a href="/">Eos quia fuga harum</a> expedita.
                Rerum, fugit reprehenderit harum ut sapiente id tenetur vel veniam obcaecati ex
                ullam nobis mollitia sunt minima corporis voluptatum deserunt natus debitis rem
                optio aperiam possimus! Reprehenderit vero inventore beatae. Sunt, natus?
                Perspiciatis possimus dolor suscipit non, fugiat dolores culpa minus animi tenetur,
                voluptates eum earum. Sit eligendi ad, tempore, vitae itaque nobis deleniti
                consectetur error animi voluptatum fugit modi. Saepe, alias fuga laudantium amet
                velit autem laboriosam sit beatae dolore odio ipsa laborum quidem iusto possimus
                exercitationem et quibusdam cum aperiam rem delectus nesciunt sint dicta aspernatur
                voluptatem? Similique?
              </p>
            </div>
          </div>
        </section>

        <section className={styles.recomended}>
          <h2>You may also like</h2>
          <div className={styles.cardContainer}>
            {posts.map((post) => (
              <DefaultCard key={post.slug}>
                <CardHeader>
                  <img
                    src="https://images.unsplash.com/photo-1550165702-5d96d4dc8f76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                    alt="..."
                  />
                </CardHeader>
                <CardBody>
                  <span className={styles.date}>{post.publish_date}</span>
                  <h3>{post.title}</h3>
                  <p>{post.lead}</p>
                </CardBody>
                <CardFooter customClass={styles.cardFooter}>
                  <CustomLink href={`/${post.slug}`} label="Read" />
                </CardFooter>
              </DefaultCard>
            ))}
          </div>
        </section>
      </main>
      <Footer />
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
    const projectResponse = await prismic.getByUID('projects', String(uid), {});
    const { id, data } = projectResponse;
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

  async function getPosts(): Promise<PostData[]> {
    const response = await prismic.query(Prismic.predicates.at('document.type', 'posts'), {
      orderings: '[document.last_publication_date]',
      fetch: ['posts.title', 'posts.lead', 'posts.content'],
      pageSize: 2,
      lang: 'en-us'
    });

    return response.results.map(
      ({ id, uid, data, first_publication_date, last_publication_date }) => {
        const { title, lead } = data;
        return {
          id,
          slug: uid,
          title: RichText.asText(title),
          lead: RichText.asText(lead),
          publish_date: formatDate(first_publication_date),
          update_date: formatDate(last_publication_date)
        };
      }
    );
  }

  const project = await getProject();
  const posts = await getPosts();

  return {
    props: {
      project,
      posts
    },
    revalidate: 60 * 60 * 1 // 1 hour
  };
};
