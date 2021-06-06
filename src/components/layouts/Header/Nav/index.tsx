import { NavLink } from './NavLink';
import styles from './styles.module.scss';

export function Nav(): JSX.Element {
  return (
    <nav className={styles.nav}>
      <NavLink label="start" href="/" />
      <NavLink label="about" href="/about/skills" />
      <NavLink label="work" href="/work" />
      <NavLink label="bytes" href="/bytes" />
      <NavLink label="say hi" href="/contact" />
    </nav>
  );
}
