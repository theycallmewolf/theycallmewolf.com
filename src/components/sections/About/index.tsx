import { Wolf } from '../../../assets/icons';
import { AlternativeCard, CardBody, CardImage } from '../../elements/Cards/AlternativeCard';
import { Graph } from '../../elements/Graph';
import { CustomLink } from '../../elements/Link';
import styles from './styles.module.scss';

export function About(): JSX.Element {
  return (
    <section className={styles.section}>
      <AlternativeCard customClass={styles.card}>
        <CardBody customClass={styles.cardBody}>
          <h3>
            coder
            <br /> + designer
          </h3>
          <div>
            <Graph title="html" percentage={80} />
            <Graph title="JavaScript" percentage={60} />
            <Graph title="ReactJS" percentage={60} />
            <Graph title="React Native" percentage={50} />
            <Graph title="Photoshop" percentage={90} />
            <Graph title="Illustrator" percentage={90} />
          </div>
        </CardBody>
        <CardImage customClass={styles.cardImage}>
          <Wolf />
        </CardImage>
        <CustomLink label="about" href="/about" customClass={styles.button} />
      </AlternativeCard>
    </section>
  );
}
