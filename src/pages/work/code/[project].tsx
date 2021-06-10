import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import { IMinus, IPlus } from '../../../assets/icons';
import { Slider } from '../../../components/elements/Slider';
import { Footer } from '../../../components/layouts/Footer';
import { Header } from '../../../components/layouts/Header';
import { Blog } from '../../../components/sections/Blog';
import { useTheme } from '../../../hooks/useTheme';
import { getContent } from '../../../services/prismic';
import styles from './styles.module.scss';

type Project = {
  id: number;
  image: string;
  caption: string;
  title: string;
  slug: string;
};

type Post = {
  title: string;
  lead: string;
  slug: string;
  updateDate: string;
};

interface CodeProps {
  projects: Project[];
  posts: Post[];
}

export default function Code({ projects, posts }: CodeProps): JSX.Element {
  const [hidesAbout, setHidesAbout] = useState(true);
  const [hidesSpecs, setHidesSpec] = useState(true);
  const router = useRouter();
  const { getTheme } = useTheme();
  const { project } = router.query;

  useEffect(() => {
    getTheme();
  }, [getTheme]);

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
        <title>they call me wolf | ...</title>
        <meta name="description" content="..." />
      </Head>
      <main className={styles.main}>
        <Header />
        <section className={styles.intro}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1571085101460-051e238e0b7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1301&q=80"
              alt="..."
            />
          </div>
          <div>
            <h1>{project}</h1>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
              nec elit.
            </p>
          </div>
        </section>
        <Slider slides={projects} contentType="image" additionalClass={styles.slider} />
        <section className={styles.specs}>
          <div>
            <button onClick={() => handleAccordion('about')}>
              <h2>About</h2>
              {hidesAbout ? <IPlus className={styles.icon} /> : <IMinus className={styles.icon} />}
            </button>
            <p className={hidesAbout ? styles.hide : ''}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempora molestias
              dolor ducimus? Molestiae corporis iste, optio sunt quam quidem tempore cumque illum
              accusamus voluptatum sequi est ex perferendis quis! Labore quos, laborum porro
              voluptatibus quaerat nemo <strong>recusandae sunt modi earum</strong> aut deleniti
              mollitia ratione, suscipit fuga ea dolores et dicta sint. Vitae autem pariatur
              provident quos, labore ullam quidem! Reprehenderit, sed beatae. Quasi recusandae
              maxime laborum sunt veritatis at deserunt facere dolorum libero fuga a nobis, animi
              corporis, distinctio tempora unde saepe, eveniet iste. Consequatur quos quisquam amet
              corrupti. Dignissimos, obcaecati fugiat soluta ab ex repudiandae adipisci sit odio
              sapiente earum modi repellendus illo, quae laboriosam facere ut ipsum, cum pariatur
              impedit velit magnam eveniet dolorum! Error, eos doloremque? Atque nam, ad quos
              voluptates deleniti a labore quae numquam vel sapiente possimus recusandae dolores
              excepturi alias dignissimos ullam assumenda, cumque non voluptate eligendi optio
              officiis aut? Dolorum, atque reiciendis? Quae neque consequatur recusandae. Suscipit
              sapiente eos velit asperiores quae, quaerat debitis! Blanditiis rerum ea obcaecati
              tempore voluptate hic quam similique commodi. Cupiditate rem optio debitis saepe
              repudiandae, repellat officiis!
            </p>
          </div>
          <div>
            <button onClick={() => handleAccordion('specs')}>
              <h2>Specs</h2>
              {hidesSpecs ? <IPlus className={styles.icon} /> : <IMinus className={styles.icon} />}
            </button>
            <p className={hidesSpecs ? styles.hide : ''}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam distinctio
              aspernatur reiciendis, praesentium neque nemo, quia consequatur repellendus dicta
              eveniet modi dolorem nihil sunt earum. <a href="/">Eos quia fuga harum</a> expedita.
              Rerum, fugit reprehenderit harum ut sapiente id tenetur vel veniam obcaecati ex ullam
              nobis mollitia sunt minima corporis voluptatum deserunt natus debitis rem optio
              aperiam possimus! Reprehenderit vero inventore beatae. Sunt, natus? Perspiciatis
              possimus dolor suscipit non, fugiat dolores culpa minus animi tenetur, voluptates eum
              earum. Sit eligendi ad, tempore, vitae itaque nobis deleniti consectetur error animi
              voluptatum fugit modi. Saepe, alias fuga laudantium amet velit autem laboriosam sit
              beatae dolore odio ipsa laborum quidem iusto possimus exercitationem et quibusdam cum
              aperiam rem delectus nesciunt sint dicta aspernatur voluptatem? Similique?
            </p>
          </div>
        </section>
        <Blog posts={posts} />
      </main>
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const projects = await getContent({
    type: 'projects',
    fields: ['title', 'imageurl', 'caption']
  });

  const posts = await getContent({
    type: 'posts',
    fields: ['title', 'lead', 'content'],
    quantity: 2
  });

  return {
    props: {
      projects,
      posts
    }
  };
};
