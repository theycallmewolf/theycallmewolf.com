import { Wolf } from 'assets/icons';
import { GraphData } from 'types';

import { AlternativeCard, CardBody, CardImage } from '../../../elements/Cards/AlternativeCard';
import { Graph } from '../../../elements/Graph';
import { CustomLink } from '../../../elements/Link';
import styles from './about.module.scss';

interface AboutProps {
  skills: GraphData[];
}

export const About: React.FC<AboutProps> = ({ skills }) => (
  <section className={styles.section}>
    <AlternativeCard className={styles.card}>
      <CardBody className={styles.cardBody}>
        <h2>
          coder
          <br /> + designer
        </h2>
        <div>
          {skills.map(({ id, title, percentage }) => (
            <Graph title={title} percentage={percentage} key={id} />
          ))}
        </div>
      </CardBody>
      <CardImage className={styles.cardImage}>
        <Wolf />
      </CardImage>
      <CustomLink label="about" href="/about/activity" className={styles.button} />
    </AlternativeCard>
  </section>
);
