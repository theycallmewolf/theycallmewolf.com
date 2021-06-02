import Link from 'next/link';

import styles from './styles.module.scss';

export function Nav(): JSX.Element {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>start</a>
      </Link>
      <Link href="/">
        <a>about</a>
      </Link>
      <Link href="/">
        <a>work</a>
      </Link>
      <Link href="/">
        <a>bytes</a>
      </Link>
      <Link href="/">
        <a>say hi</a>
      </Link>
    </nav>
  );
}
