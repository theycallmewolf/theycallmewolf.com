import Link from 'next/link';

import styles from './styles.module.scss';

interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  label: string;
  adicionalClass?: string;
}

export function CustomLink({
  adicionalClass = '',
  href,
  label,
  ...rest
}: CustomLinkProps): JSX.Element {
  return (
    <Link href={href}>
      <a className={`${styles.link} ${adicionalClass}`} {...rest}>
        {label}
      </a>
    </Link>
  );
}
