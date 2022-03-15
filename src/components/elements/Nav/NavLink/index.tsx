import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './styles.module.scss';

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  link: string;
  label: string;
}
export const NavLink: React.FC<NavLinkProps> = ({ link, label, ...props }) => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <Link href={link}>
      <a className={`${styles.link} ${slug === link.split('/')[2] && styles.selected}`} {...props}>
        {label}
      </a>
    </Link>
  );
};
