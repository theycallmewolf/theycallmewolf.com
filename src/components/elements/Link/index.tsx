import { IPlus } from 'assets/icons';
import Link from 'next/link';

import styles from './styles.module.scss';

interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  label?: string;
  customClass?: string;
  hasIcon?: boolean;
}

export function CustomLink({
  customClass,
  href,
  label,
  hasIcon,
  ...rest
}: CustomLinkProps): JSX.Element {
  return (
    <Link href={href}>
      <a
        className={`${styles.link} ${customClass ?? ''} ${hasIcon ? styles.icon : ''}`}
        {...rest}
        aria-label="show details">
        {label}
        {hasIcon && <IPlus />}
      </a>
    </Link>
  );
}
