import Head from 'next/head';

import { Cover } from '../../elements/Cover';
import { Intro } from '../../elements/Intro';
import { Header } from '../Header';
import styles from './styles.module.scss';

type Link = { id: number; link: string; label: string };
type IntroData = { title: string; lead: string; linkList: Link[] };

interface ListPageProps {
  intro: IntroData;
  slug: string | string[];
  children: React.ReactNode;
  pageTitle: string;
  imageURL: string;
  pageDescription: string;
}
export default function ListPage({
  intro,
  slug,
  imageURL,
  pageTitle,
  pageDescription,
  children
}: ListPageProps): JSX.Element {
  return (
    <>
      <Head>
        <title>they call me wolf | ${pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <main className={styles.main}>
        <Header />
        <Cover imageURL={imageURL} />
        <Intro {...intro} />
        <div className={`${styles.cardList} ${slug === 'activity' && styles.col2}`}>{children}</div>
      </main>
    </>
  );
}
