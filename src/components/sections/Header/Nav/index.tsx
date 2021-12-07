import { NavButton } from './NavButton';
import styles from './styles.module.scss';

export function Nav(): JSX.Element {
  return (
    <nav className={styles.nav}>
      <NavButton label="home" href="/" />
      <NavButton label="work" href="/work/code" />
      <NavButton label="about" href="/about/activity" />
      <NavButton label="store" href="https://theycallmewolf.bigcartel.com/" />
    </nav>
  );
}
