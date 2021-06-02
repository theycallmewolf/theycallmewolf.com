import Head from 'next/head';

import { Header } from '../../components/layouts/Header';
import styles from './styles.module.scss';

export default function About(): JSX.Element {
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
        <h1>About</h1>
      </main>
    </>
  );
}
