import Head from 'next/head';
import { Header } from 'components/sections';

export default function About(): JSX.Element {
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
      <h1>
        <br />
        <br />
        <br />
        About Wolf
      </h1>
    </>
  );
}
