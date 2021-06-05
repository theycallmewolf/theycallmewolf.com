import Link from 'next/link';

import { ICross, IMenu, Wolf } from '../../../assets/icons';
import { useNav } from '../../../hooks/useNav';
import { Nav } from './Nav';
import styles from './styles.module.scss';

export function Header(): JSX.Element {
  const { isOpen, toggleNav } = useNav();
  return (
    <header className={`${styles.container} ${isOpen && styles.open}`}>
      <div className={styles.navigation}>
        <Nav />
      </div>
      <div className={styles.header}>
        <Link href="/">
          <a className={`${styles.logo} ${isOpen && styles.open}`}>
            <Wolf />
          </a>
        </Link>
        <div className={styles.buttonContainer}>
          <button className={styles.toggle} aria-label="toggle light/dark mode"></button>
          <button className={styles.menu} aria-label="menu button" onClick={toggleNav}>
            {!isOpen ? 'menu' : 'close'}
            {!isOpen ? <IMenu className={styles.icon} /> : <ICross className={styles.icon} />}
          </button>
        </div>
      </div>
    </header>
  );
}
