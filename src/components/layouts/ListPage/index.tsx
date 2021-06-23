import Head from 'next/head';

import { ListPageProps } from '../../../types';
import { Cover } from '../../elements/Cover';
import { Intro } from '../../sections/Intro';
import { Footer } from '../Footer';
import { Header } from '../Header';
import styles from './styles.module.scss';

export default function ListPage({
  intro,
  link_list,
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
        <Intro link_list={link_list} title={intro[0].title} lead={intro[0].lead} />
        <div className={styles.container}>
          <div className={`${styles.cardList} ${slug === 'activity' && styles.col2}`}>
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
