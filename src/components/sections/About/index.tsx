import { HomeCard } from '../../Cards/HomeCard';
import styles from './styles.module.scss';

export const About: React.FC = () => {
  return (
    <section className={styles.section}>
      <HomeCard />
    </section>
  );
};
