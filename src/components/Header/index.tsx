import Link from 'next/link';
import { useState } from 'react';

import { Nav } from './Nav';
import styles from './styles.module.scss';
import { SVGSprite } from './svg.sprite';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`${styles.container} ${isOpen && styles.open}`}>
      <SVGSprite />
      <div className={styles.background}>
        <div></div>
        <svg viewBox="0 0 1366 711">
          <use href="#wire" />
        </svg>
      </div>
      <div className={styles.content}>
        <Nav />
      </div>
      <div className={styles.header}>
        <svg
          className={styles.headerBackground}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1366 90"
          preserveAspectRatio="none">
          <path d="M0 0v63h345v27h565V73h456V0z" />
        </svg>
        <div className={styles.content}>
          <Link href="/">
            <a className={`${styles.logo} ${isOpen && styles.open}`}>
              <svg viewBox="0 0 202 190">
                <use href="#wolf" />
              </svg>
            </a>
          </Link>
          <div className={styles.buttonContainer}>
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
            <button className={styles.toggle} aria-label="toggle light/dark mode"></button>
          </div>
        </div>
      </div>
    </header>
  );
};
