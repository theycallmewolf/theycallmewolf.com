import { HomeCard } from '../../elements/Cards/HomeCard';
import styles from './styles.module.scss';

export function About(): JSX.Element {
  return (
    <section className={styles.section}>
      <HomeCard />
    </section>
  );
}
