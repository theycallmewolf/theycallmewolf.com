import Head from 'next/head';

import { AboutCard } from '../../../components/elements/Cards/AboutCard';
import { Cover } from '../../../components/elements/Cover';
import { Graph } from '../../../components/elements/Graph';
import { Intro } from '../../../components/elements/Intro';
import { Header } from '../../../components/layouts/Header';
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
        <Cover imageURL="/assets/img/cover-about.jpg" />
        <Intro />
        <div className={styles.cardList}>
          <AboutCard adicionalClass={styles.card}>
            <h2>front-end</h2>
            <p>
              Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id
              elit. Cras justo odio, dapibus ac facilisis in
            </p>
            <div className={styles.graphList}>
              <Graph title="HTML 5" percentage={80} />
              <Graph title="CSS 3" percentage={80} />
              <Graph title="JavaScript" percentage={60} />
              <Graph title="ReactJS" percentage={50} />
              <Graph title="NextJS" percentage={50} />
              <Graph title="Sass" percentage={60} />
            </div>
          </AboutCard>
          <AboutCard adicionalClass={styles.card}>
            <h2>back-end</h2>
            <p>
              Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id
              elit. Cras justo odio, dapibus ac facilisis in
            </p>
            <div className={styles.graphList}>
              <Graph title="NodeJS" percentage={80} />
              <Graph title="PHP" percentage={80} />
            </div>
          </AboutCard>
          <AboutCard adicionalClass={styles.card}>
            <h2>other</h2>
            <p>
              Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id
              elit. Cras justo odio, dapibus ac facilisis in
            </p>
            <div className={styles.graphList}>
              <Graph title="React Native" percentage={80} />
              <Graph title="Git + Git Hub" percentage={80} />
              <Graph title="TypeScript" percentage={60} />
              <Graph title="yarn / npm" percentage={50} />
            </div>
          </AboutCard>
          <AboutCard adicionalClass={styles.card}>
            <h2>software</h2>
            <p>
              Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id
              elit. Cras justo odio, dapibus ac facilisis in
            </p>
            <div className={styles.graphList}>
              <Graph title="Visual Studio Code" percentage={80} />
              <Graph title="Adobe XD" percentage={80} />
              <Graph title="Adobe Illustrator" percentage={60} />
              <Graph title="Adobe Photoshop" percentage={50} />
              <Graph title="Insomnia" percentage={50} />
            </div>
          </AboutCard>
        </div>
      </main>
    </main>
  );
}
