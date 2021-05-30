import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Header } from '../components/Header';

// import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>they call me wolf | home</title>
        <meta
          name="description"
          content="They call me wolf is the web portfolio of Bruno Lobato, a designer since 2001 that felt in love with coding around 2016."
        />
      </Head>
      <Header />
      <main>
        <h1>
          <a href=".">Hello, Wolf!</a>
        </h1>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 24 // 24 hours
  };
};
