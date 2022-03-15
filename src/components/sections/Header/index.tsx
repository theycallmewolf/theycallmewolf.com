import { ICross, IMenu, Wolf } from 'assets/icons';
import { useNav, useTheme } from 'hooks';
import Link from 'next/link';

import { Nav } from './Nav';
import styles from './styles.module.scss';

export const Header: React.FC = () => {
  const { isOpen, toggleNav } = useNav();
  const { hasDarkMode, toggleTheme } = useTheme();

  return (
    <header
      className={`${styles.container} ${isOpen ? styles.open : undefined} ${
        hasDarkMode ? styles.dark : undefined
      }`}>
      <div className={styles.navigation}>
        <Nav />
      </div>
      <div className={styles.header}>
        <Link href="/">
          <a className={`${styles.logo} ${isOpen && styles.open}`} aria-label="back to homepage">
            <Wolf className={styles.logo} />
          </a>
        </Link>
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.toggle} ${hasDarkMode && styles.dark}`}
            onClick={toggleTheme}
            aria-label="toggle light/dark mode"
          />
          <button className={styles.menu} aria-label="menu button" onClick={toggleNav}>
            {!isOpen ? 'menu' : 'close'}
            {!isOpen ? <IMenu className={styles.icon} /> : <ICross className={styles.icon} />}
          </button>
        </div>
      </div>
    </header>
  );
};
