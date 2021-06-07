import Link from 'next/link';

import { ICross, IMenu, Wolf } from '../../../assets/icons';
import { useNav } from '../../../hooks/useNav';
import { useTheme } from '../../../hooks/useTheme';
import { Nav } from './Nav';
import styles from './styles.module.scss';

export function Header(): JSX.Element {
  const { isOpen, toggleNav } = useNav();
  const { hasDarkMode, toggleTheme } = useTheme();

  return (
    <header
      className={`${styles.container} ${isOpen && styles.open} ${hasDarkMode && styles.dark}`}>
      <div className={styles.navigation}>
        <Nav />
      </div>
      <div className={styles.header}>
        <Link href="/">
          <a className={`${styles.logo} ${isOpen && styles.open}`}>
            <Wolf className={styles.logo} />
          </a>
        </Link>
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.toggle} ${hasDarkMode && styles.dark}`}
            onClick={toggleTheme}
            aria-label="toggle light/dark mode"></button>
          <button className={styles.menu} aria-label="menu button" onClick={toggleNav}>
            {!isOpen ? 'menu' : 'close'}
            {!isOpen ? <IMenu className={styles.icon} /> : <ICross className={styles.icon} />}
          </button>
        </div>
      </div>
    </header>
  );
}
