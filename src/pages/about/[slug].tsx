import { ServicesSVG } from 'assets/services';
import { CardBody, CardHeader, DefaultCard, Graph, GraphicCard } from 'components/elements';
import { Aside, CardList, Footer, Header } from 'components/sections';
import { useTheme } from 'hooks';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {
  getActivityContent,
  getCareerContent,
  getEducationContent,
  getIntro,
  getSkillsContent
} from 'services/prismic';
import { COLORS } from 'theme';
import { AboutProps, ActivityData, CareerData, SkillData } from 'types';

import styles from './styles.module.scss';

const PROJECT_AREAS = ['activity', 'skills', 'career', 'education'];

const Skills_Cards: React.FC<{ skills: SkillData[] }> = ({ skills }) => (
  <>
    {skills.map(({ id, title, description, graphs }) => (
      <GraphicCard key={id} className={styles.card}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={styles.graphList}>
          {graphs.map((graph) => (
            <Graph title={graph.title} percentage={graph.percentage} key={graph.id} />
          ))}
        </div>
      </GraphicCard>
    ))}
  </>
);

const Activities_Cards: React.FC<{ activity: ActivityData[] }> = ({ activity }) => (
  <>
    {activity.map(({ id, icon, title, description }) => (
      <DefaultCard key={id}>
        <CardHeader>
          <ServicesSVG icon={icon} />
        </CardHeader>
        <CardBody className={styles.card}>
          <h2>{title}</h2>
          <p>{description}</p>
        </CardBody>
      </DefaultCard>
    ))}
  </>
);

const Career_Cards: React.FC<{ career: CareerData[] }> = ({ career }) => (
  <>
    {career.map(({ id, logo_svg, year_start, year_end, title, description }) => (
      <GraphicCard className={styles.card} key={id}>
        <div className={styles.svgContainer} dangerouslySetInnerHTML={{ __html: logo_svg }} />
        <span className={styles.center}>
          <p className={styles.date}>{`${year_start} - ${year_end || 'today'}`}</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </span>
      </GraphicCard>
    ))}
  </>
);

const Education_Cards: React.FC<{ education: CareerData[] }> = ({ education }) => (
  <>
    {education.map(({ id, logo_svg, year_start, year_end, title, description }) => (
      <GraphicCard className={styles.card} key={id}>
        <div className={styles.svgContainer} dangerouslySetInnerHTML={{ __html: logo_svg }} />
        <span className={styles.center}>
          <p className={styles.date}>{`${year_start} - ${year_end}`}</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </span>
      </GraphicCard>
    ))}
  </>
);

const About: NextPage<AboutProps> = ({ intro, link_list, activity, career, education, skills }) => {
  const router = useRouter();
  const { slug } = router.query;
  const { getTheme, hasDarkMode } = useTheme();

  useEffect(getTheme);

  useEffect(() => {
    const activeArea = PROJECT_AREAS.filter((area) => area === slug);
    activeArea.length === 0 && router.push('/');
  }, [router, slug]);

  return (
    <>
      <Head>
        <title>{slug} | they call me wolf</title>
        <meta
          name="description"
          content="Get to know a little more about mr. Wolf's activity, skills, career and education."
        />
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
      <Aside intro={intro} link_list={link_list} imageURL="/assets/img/cover-about.jpg" />
      <main>
        <CardList slug={slug}>
          {slug === 'skills' && <Skills_Cards skills={skills} />}
          {slug === 'activity' && <Activities_Cards activity={activity} />}
          {slug === 'career' && <Career_Cards career={career} />}
          {slug === 'education' && <Education_Cards education={education} />}
        </CardList>
      </main>
      <Footer />
    </>
  );
};

export default About;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ['/about/activity', '/about/skills', '/about/career', '/about/education'],
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const introList = await getIntro({ area: 'about' });
  const link_list = introList.map((item) => item.link_list).flat();
  const intro = introList.filter(({ title }) => title === slug);
  const activity = await getActivityContent();
  const career = await getCareerContent();
  const education = await getEducationContent();
  const skills = await getSkillsContent();

  if (!link_list) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      intro,
      link_list,
      activity,
      career,
      education,
      skills
    },
    revalidate: 60 * 60 * 24 // 24 hours
  };
};
