import Head from 'next/head';
import { Header, Aside } from 'components/sections';
import { GetServerSideProps } from 'next';
import { getIntro } from 'services/prismic';
import { AboutProps } from '../../types';

export default function About({ intro, link_list }: AboutProps): JSX.Element {
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
      <Aside intro={intro} link_list={link_list} imageURL="/assets/img/cover-about.jpg" />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;
  const introList = await getIntro({ area: 'about' });
  const link_list = introList.map((item) => item.link_list).flat();
  const intro = introList.filter(({ title }) => title === slug);

  return {
    props: {
      intro,
      link_list
    }
  };
};
