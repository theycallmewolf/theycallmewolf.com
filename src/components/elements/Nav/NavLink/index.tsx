import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './styles.module.scss';

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  link: string;
  label: string;
}
export function NavLink({ link, label, ...rest }: NavLinkProps): JSX.Element {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <Link href={link}>
      <a className={`${styles.link} ${slug === link.split('/')[2] && styles.selected}`} {...rest}>
        {label}
      </a>
    </Link>
  );
}
