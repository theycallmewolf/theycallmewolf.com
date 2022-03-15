import { IPlus } from 'assets/icons';
import Link from 'next/link';

import styles from './styles.module.scss';

interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  label?: string;
  className?: string;
  hasIcon?: boolean;
}

export const CustomLink: React.FC<CustomLinkProps> = ({
  className = '',
  href,
  label,
  hasIcon = false,
  ...props
}) => {
  return (
    <Link href={href}>
      <a
        className={`${styles.link} ${className} ${hasIcon && styles.icon}`}
        {...props}
        aria-label="show details">
        {label}
        {hasIcon && <IPlus />}
      </a>
    </Link>
  );
};
