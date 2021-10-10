import { Wolf } from '../../../assets/icons';
import { GraphData } from '../../../types';
import { AlternativeCard, CardBody, CardImage } from '../../elements/Cards/AlternativeCard';
import { Graph } from '../../elements/Graph';
import { CustomLink } from '../../elements/Link';
import styles from './styles.module.scss';

interface AboutProps {
  skills: GraphData[];
}

export function About({ skills }: AboutProps): JSX.Element {
  return (
    <section className={styles.section}>
      <AlternativeCard customClass={styles.card}>
        <CardBody customClass={styles.cardBody}>
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
        <CardImage customClass={styles.cardImage}>
          <Wolf />
        </CardImage>
        <CustomLink label="about" href="/about/activity" customClass={styles.button} />
      </AlternativeCard>
    </section>
  );
}
