import Head from 'next/head';
import { Header, Aside, Footer } from 'components/sections';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getIntro } from 'services/prismic';
import { AboutProps } from '../../types';

export default function About({ link_list }: AboutProps): JSX.Element {
  console.log({ link_list });
  return (
    <>
      <Head>
        <title>they call me wolf | About</title>
        <meta
          name="description"
          content="Get to know a little more about mr. Wolf's activity, skills, career and education."
        />
      </Head>
      <Header />
      {/* <Aside intro={intro} link_list={link_list} imageURL="/assets/img/cover-about.jpg" /> */}
      <main></main>
      <Footer />
    </>
  );
}

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
  // const intro = introList.filter(({ title }) => title === slug);

  if (!link_list) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      link_list
    },
    revalidate: 60 * 60 * 24 // 24 hours
  };
};
