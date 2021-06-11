import Link from 'next/link';

import styles from './styles.module.scss';

interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  label: string;
  customClass?: string;
}

export function CustomLink({ customClass, href, label, ...rest }: CustomLinkProps): JSX.Element {
  return (
    <Link href={href}>
      <a className={`${styles.link} ${customClass ?? ''}`} {...rest}>
        {label}
      </a>
    </Link>
  );
}
