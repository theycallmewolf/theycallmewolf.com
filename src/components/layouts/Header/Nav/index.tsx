import { NavLink } from './NavLink';
import styles from './styles.module.scss';

export function Nav(): JSX.Element {
  return (
    <nav className={styles.nav}>
      <NavLink label="home" href="/" />
      <NavLink label="about" href="/about/activity" />
      <NavLink label="work" href="/work/code" />
    </nav>
  );
}
