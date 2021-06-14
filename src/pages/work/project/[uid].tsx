import Prismic from '@prismicio/client';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { RichText } from 'prismic-dom';
import { useCallback, useEffect, useState } from 'react';

import { IMinus, IPlus } from '../../../assets/icons';
import {
  CardBody,
  CardFooter,
  CardHeader,
  DefaultCard
} from '../../../components/elements/Cards/DefaultCard';
import { CustomLink } from '../../../components/elements/Link';
import { Slider } from '../../../components/elements/Slider';
import { Footer } from '../../../components/layouts/Footer';
import { Header } from '../../../components/layouts/Header';
import { useTheme } from '../../../hooks/useTheme';
import { getPrismicClient } from '../../../services/prismic';
import { formatDate } from '../../../utils';
import styles from './styles.module.scss';

type SpecData = { id: string; uid: string };
type ProjectImagesData = { image_small: string; image_large: string; slug: string };

type ProjectData = {
  id: string;
  title: string;
  caption: string;
  publishDate: string;
  description: string;
  link: string;
  repository: string;
  repository_api: string;
  specs: SpecData[];
  images: {
    cover_small: string;
    cover_large: string;
    projectImages: ProjectImagesData[];
  };
};

type PostData = {
  title: string;
  lead: string;
  slug: string;
  publishDate: string;
};

interface CodeProps {
  project: ProjectData;
  posts: PostData[];
}

export default function Code({ project, posts }: CodeProps): JSX.Element {
  const [hidesAbout, setHidesAbout] = useState(true);
  const [hidesSpecs, setHidesSpec] = useState(true);
  const [slides, setSlides] = useState([]);

  const { getTheme } = useTheme();

  useEffect(() => {
    getTheme();
  }, [getTheme]);

  useEffect(() => {
    setSlides(
      project.images.projectImages.map((slide) => {
        const { image_large, image_small, slug } = slide;
        return {
          slider: {
            image_large,
            image_small
          },
          slug
        };
      })
    );
  }, [project.images.projectImages]);

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
        <meta name="description" content={project.caption} />
      </Head>
      <main className={styles.main}>
        <Header />
        <section className={styles.intro}>
          <div>
            <picture>
              <source srcSet={project.images.cover_large} media="(min-width: 425px)" />
              <img src={project.images.cover_small} alt={project.title} />
            </picture>
          </div>
          <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </div>
        </section>
        <Slider slides={slides} contentType="image" additionalClass={styles.slider} />
        <section className={styles.specs}>
          <div>
            <button onClick={() => handleAccordion('about')}>
              <h2>About</h2>
              {hidesAbout ? <IPlus className={styles.icon} /> : <IMinus className={styles.icon} />}
            </button>
            <div className={hidesAbout ? styles.hide : ''}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempora
                molestias dolor ducimus? Molestiae corporis iste, optio sunt quam quidem tempore
                cumque illum accusamus voluptatum sequi est ex perferendis quis! Labore quos,
                laborum porro voluptatibus quaerat nemo <strong>recusandae sunt modi earum</strong>{' '}
                aut deleniti mollitia ratione, suscipit fuga ea dolores et dicta sint. Vitae autem
                pariatur provident quos, labore ullam quidem! Reprehenderit, sed beatae. Quasi
                recusandae maxime laborum sunt veritatis at deserunt facere dolorum libero fuga a
                nobis, animi corporis, distinctio tempora unde saepe, eveniet iste. Consequatur quos
                quisquam amet corrupti. Dignissimos, obcaecati fugiat soluta ab ex repudiandae
                adipisci sit odio sapiente earum modi repellendus illo, quae laboriosam facere ut
                ipsum, cum pariatur impedit velit magnam eveniet dolorum! Error, eos doloremque?
                Atque nam, ad quos voluptates deleniti a labore quae numquam vel sapiente possimus
                recusandae dolores excepturi alias dignissimos ullam assumenda, cumque non voluptate
                eligendi optio officiis aut? Dolorum, atque reiciendis? Quae neque consequatur
                recusandae. Suscipit sapiente eos velit asperiores quae, quaerat debitis! Blanditiis
                rerum ea obcaecati tempore voluptate hic quam similique commodi. Cupiditate rem
                optio debitis saepe repudiandae, repellat officiis!
              </p>
            </div>
          </div>
          <div>
            <button onClick={() => handleAccordion('specs')}>
              <h2>Specs</h2>
              {hidesSpecs ? <IPlus className={styles.icon} /> : <IMinus className={styles.icon} />}
            </button>
            <div className={hidesSpecs ? styles.hide : ''}>
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
                  <span className={styles.date}>{post.publishDate}</span>
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { uid } = params;
  const prismic = getPrismicClient();

  async function getProject(): Promise<ProjectData> {
    const projectResponse = await prismic.getByUID('projects', String(uid), {});
    const { id, data } = projectResponse;
    const {
      title,
      project_date,
      description,
      link,
      repository,
      repository_api,
      cover_small,
      cover_large,
      caption,
      body,
      body1
    } = data;

    const specs = body
      .filter(({ slice_type }) => slice_type === 'technologies')[0]
      .items.map(({ tech }) => tech);

    const projectImages = body1
      .filter(({ slice_type }) => slice_type === 'slider')[0]
      .items.map(({ screen_small, screen_large }, i: number) => ({
        image_small: screen_small.url,
        image_large: screen_large.url,
        slug: String(i)
      }));

    return {
      id,
      title: RichText.asText(title),
      caption: RichText.asText(caption),
      publishDate: project_date,
      description: RichText.asText(description),
      link: link?.url ? link.url : null,
      repository: repository.url ? repository.url : null,
      repository_api: repository_api.url ? repository_api.url : null,
      specs,
      images: {
        cover_small: cover_small.url,
        cover_large: cover_large.url,
        projectImages
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
          publishDate: formatDate(first_publication_date),
          updateDate: formatDate(last_publication_date)
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
    }
  };
};
