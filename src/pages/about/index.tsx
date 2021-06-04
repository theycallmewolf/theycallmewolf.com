import Head from 'next/head';

import { Cover } from '../../components/elements/Cover';
import { Intro } from '../../components/elements/Intro';
import { Header } from '../../components/layouts/Header';
import styles from './styles.module.scss';

export default function About(): JSX.Element {
  return (
    <main className={styles.main}>
      <Head>
        <title>they call me wolf | about</title>
        <meta name="description" content="..." />
      </Head>
      <Header />
      <main>
        <Cover />
        <Intro />
      </main>
    </main>
  );
}
