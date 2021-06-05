import Link from 'next/link';
import { useState } from 'react';

import { ICross, IMenu, Wolf } from '../../../assets/icons';
import { Nav } from './Nav';
import styles from './styles.module.scss';

export function Header(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

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
          <button
            className={styles.menu}
            aria-label="menu button"
            onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? 'menu' : 'close'}
            {!isOpen ? <IMenu className={styles.icon} /> : <ICross className={styles.icon} />}
          </button>
        </div>
      </div>
    </header>
  );
}
