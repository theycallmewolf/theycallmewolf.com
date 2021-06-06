import Link from 'next/link';
import { LinkHTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface CustomLinkProps extends LinkHTMLAttributes<HTMLLinkElement> {
  href: string;
  label: string;
  adicionalClass?: string;
}

export function CustomLink({ href, label, adicionalClass }: CustomLinkProps): JSX.Element {
  return (
    <Link href={href}>
      <a className={`${styles.link} ${adicionalClass && adicionalClass}`}>{label}</a>
    </Link>
  );
}
