import Head from 'next/head';

import { TangramCover } from '../../../assets/tangrams';
import { ListPageProps } from '../../../types';
import { Nav } from '../../elements/Nav';
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
      <main>
        <Header />
        <aside className={styles.aside}>
          <div
            className={styles.cover}
            style={{
              backgroundImage: `url(${imageURL})`
            }}>
            <TangramCover />
          </div>
          <div className={styles.content}>
            <h1>{intro[0].title}</h1>
            <p className="lead">{intro[0].lead}</p>
            <Nav customClass={styles.nav} link_list={link_list} />
          </div>
        </aside>
        <section className={`${styles.cardList} ${slug === 'activity' ? styles.col2 : undefined}`}>
          {children}
        </section>
      </main>
      <Footer />
    </>
  );
}
