import Head from 'next/head';

import { Cover } from '../../components/elements/Cover';
import { Header } from '../../components/layouts/Header';
import styles from './styles.module.scss';

export default function About(): JSX.Element {
  return (
    <>
      <Head>
        <title>they call me wolf | about</title>
        <meta name="description" content="..." />
      </Head>
      <Header />
      <main>
        <Cover />
        <h1>About</h1>
      </main>
    </>
  );
}
