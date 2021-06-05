import { Wolf } from '../../../../assets/icons';
import { Graph } from '../../Graph';
import { CustomLink } from '../../Link';
import styles from './styles.module.scss';

export function HomeCard(): JSX.Element {
  return (
    <div className={styles.container}>
      <div>
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
      </div>
      <div>
        <Wolf />
      </div>
      <CustomLink href="/" label="about" />
    </div>
  );
}
