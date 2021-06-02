import { HomeCard } from '../../Cards/HomeCard';
import styles from './styles.module.scss';

export function About(): JSX.Element {
  return (
    <section className={styles.section}>
      <HomeCard />
    </section>
  );
}
