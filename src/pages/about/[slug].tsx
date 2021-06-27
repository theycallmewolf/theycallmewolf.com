import Prismic from '@prismicio/client';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { RichText } from 'prismic-dom';
import { useEffect } from 'react';

import { ServicesSVG } from '../../assets/services';
import { CardBody, CardHeader, DefaultCard } from '../../components/elements/Cards/DefaultCard';
import { GraphicCard } from '../../components/elements/Cards/GraphicCard';
import { Graph } from '../../components/elements/Graph';
import { Footer } from '../../components/layouts/Footer';
import { Header } from '../../components/sections/Header';
import { Aside } from '../../components/sections/Aside';
import { CardList } from '../../components/sections/CardList';
import { useTheme } from '../../hooks/useTheme';
import { getPrismicClient } from '../../services/prismic';
import {
  AboutProps,
  ActivityData,
  CareerData,
  EducationData,
  IntroData,
  SkillData
} from '../../types';
import styles from './styles.module.scss';

export default function About({
  intro,
  link_list,
  activity,
  career,
  education,
  skills
}: AboutProps): JSX.Element {
  const router = useRouter();
  const { slug } = router.query;
  const { getTheme } = useTheme();

  useEffect(() => {
    getTheme();
  }, [getTheme]);

  useEffect(() => {
    const activeArea = ['activity', 'skills', 'career', 'education'].filter(
      (area) => area === slug
    );
    activeArea.length === 0 && router.push('/');
  }, [router, slug]);

  return (
    <>
      <Head>
        <title>they call me wolf | About</title>
        <meta name="description" content="..." />
      </Head>
      <main>
        <Header />
        <Aside intro={intro} link_list={link_list} imageURL="/assets/img/cover-about.jpg" />
        <CardList slug={slug}>
          {slug === 'skills' &&
            skills.map(({ id, title, description, graphs }) => (
              <GraphicCard key={id} customClass={styles.card}>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className={styles.graphList}>
                  {graphs.map((graph) => (
                    <Graph title={graph.title} percentage={graph.percentage} key={graph.id} />
                  ))}
                </div>
              </GraphicCard>
            ))}

          {slug === 'activity' &&
            activity.map(({ id, icon, title, description }) => (
              <DefaultCard key={id}>
                <CardHeader>
                  <ServicesSVG icon={icon} />
                </CardHeader>
                <CardBody customClass={styles.card}>
                  <h2>{title}</h2>
                  <p>{description}</p>
                </CardBody>
              </DefaultCard>
            ))}

          {slug === 'career' &&
            career.map(({ id, logo_svg, year_start, year_end, title, description }) => (
              <GraphicCard customClass={styles.card} key={id}>
                <div
                  className={styles.svgContainer}
                  dangerouslySetInnerHTML={{ __html: logo_svg }}
                />
                <span className={styles.center}>
                  <p className={styles.date}>{`${year_start} - ${year_end}`}</p>
                  <h2>{title}</h2>
                  <p>{description}</p>
                </span>
              </GraphicCard>
            ))}

          {slug === 'education' &&
            education.map(({ id, logo_svg, year_start, year_end, title, description }) => (
              <GraphicCard customClass={styles.card} key={id}>
                <div
                  className={styles.svgContainer}
                  dangerouslySetInnerHTML={{ __html: logo_svg }}
                />
                <span className={styles.center}>
                  <p className={styles.date}>{`${year_start} - ${year_end}`}</p>
                  <h2>{title}</h2>
                  <p>{description}</p>
                </span>
              </GraphicCard>
            ))}
        </CardList>
      </main>
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const prismic = getPrismicClient();
  const { slug } = params;

  async function getIntro(): Promise<IntroData[]> {
    const response = await prismic.query(Prismic.Predicates.at('document.type', 'intro'), {
      orderings: '[my.intro.order]'
    });
    return response.results
      .filter(({ data }) => data.type === 'about')
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

  async function getActivityContent(): Promise<ActivityData[]> {
    const response = await prismic.query(Prismic.Predicates.at('document.type', 'activities'), {
      orderings: '[my.activities.order]'
    });

    return response.results.map(({ id, data }) => {
      const { icon, title, description } = data;
      return {
        id,
        icon,
        title: RichText.asText(title),
        description: RichText.asText(description)
      };
    });
  }

  async function getCareerContent(): Promise<CareerData[]> {
    const response = await prismic.query(Prismic.Predicates.at('document.type', 'career'), {
      orderings: '[my.career.date_start desc]'
    });

    return response.results.map(({ id, data }) => {
      const { logo_svg, name, date_start, date_end, title, description } = data;
      return {
        id,
        logo_svg: RichText.asText(logo_svg),
        name: RichText.asText(name),
        year_start: new Date(date_start).getFullYear(),
        year_end: new Date(date_end).getFullYear(),
        title: RichText.asText(title),
        description: RichText.asText(description)
      };
    });
  }

  async function getEducationContent(): Promise<EducationData[]> {
    const response = await prismic.query(Prismic.Predicates.at('document.type', 'education'), {
      orderings: '[my.career.date_start desc]'
    });

    return response.results.map(({ id, data }) => {
      const { logo_svg, name, date_start, date_end, title, description } = data;
      return {
        id,
        logo_svg: RichText.asText(logo_svg),
        name: RichText.asText(name),
        year_start: new Date(date_start).getFullYear(),
        year_end: new Date(date_end).getFullYear(),
        title: RichText.asText(title),
        description: RichText.asText(description)
      };
    });
  }

  async function getSkillsContent(): Promise<SkillData[]> {
    async function getCategories() {
      const response = await prismic.query(
        Prismic.Predicates.at('document.type', 'skills_categories'),
        {
          orderings: '[my.skills_categories.order]'
        }
      );
      return response.results.map(({ data, id }) => {
        const { title, description } = data;
        return {
          id,
          title: RichText.asText(title),
          description: RichText.asText(description)
        };
      });
    }

    async function getGraphs() {
      const response = await prismic.query(Prismic.Predicates.at('document.type', 'skills_graphs'));
      return response.results.map(({ id, data }) => {
        const { title, percentage, category } = data;
        return {
          id,
          title: RichText.asText(title),
          percentage,
          category
        };
      });
    }

    const categories = await getCategories();
    const graphs = await getGraphs();

    return categories.map(({ id, title, description }) => ({
      id: id,
      title: title,
      description: description,
      graphs: graphs.filter(({ category }) => category === title)
    }));
  }

  const introList = await getIntro();
  const link_list = introList.map((item) => item.link_list).flat();
  const intro = introList.filter(({ title }) => title === slug);
  const activity = await getActivityContent();
  const career = await getCareerContent();
  const education = await getEducationContent();
  const skills = await getSkillsContent();

  return {
    props: {
      intro,
      link_list,
      activity,
      career,
      education,
      skills
    }
  };
};
