import Head from 'next/head';

import { ListPageProps } from '../../../types';
import { Aside } from '../../sections/Aside';
import { CardList } from '../../sections/CardList';
import { Footer } from '../Footer';
import { Header } from '../Header';

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
        <Aside intro={intro} link_list={link_list} imageURL={imageURL} />
        <CardList slug={slug}>{children}</CardList>
      </main>
      <Footer />
    </>
  );
}
