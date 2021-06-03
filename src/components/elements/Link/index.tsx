import Link from 'next/link';
import { LinkHTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface CustomLinkProps extends LinkHTMLAttributes<HTMLLinkElement> {
  href: string;
  label: string;
}

export function CustomLink({ href, label }: CustomLinkProps): JSX.Element {
  return (
    <Link href={href}>
      <a className={styles.link}>{label}</a>
    </Link>
  );
}
