import Link from 'next/link';
import { useState } from 'react';

import { Nav } from './Nav';
import styles from './styles.module.scss';
import { SVGSprite } from './svg.sprite';

export function Header(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`${styles.container} ${isOpen && styles.open}`}>
      <SVGSprite />
      <div className={styles.navigation}>
        <Nav />
      </div>
      <div className={styles.header}>
        <Link href="/">
          <a className={`${styles.logo} ${isOpen && styles.open}`}>
            <svg viewBox="0 0 202 190">
              <use href="#wolf" />
            </svg>
          </a>
        </Link>
        <div className={styles.buttonContainer}>
          <button className={styles.toggle} aria-label="toggle light/dark mode"></button>
          <button
            className={styles.menu}
            aria-label="menu button"
            onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? 'menu' : 'close'}
            {!isOpen ? (
              <svg>
                <use href="#i-burger" />
              </svg>
            ) : (
              <svg>
                <use href="#i-close" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
