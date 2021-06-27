import { NavLink } from './NavLink';
import styles from './styles.module.scss';

export function Nav(): JSX.Element {
  return (
    <nav className={styles.nav}>
      <NavLink label="home" href="/" />
      <NavLink label="work" href="/work/code" />
      <NavLink label="about" href="/about/activity" />
    </nav>
  );
}
