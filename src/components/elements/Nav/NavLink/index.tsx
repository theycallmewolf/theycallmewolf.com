import { useRouter } from 'next/router';

import styles from './styles.module.scss';

interface NavLinkProps {
  link: string;
  label: string;
}
export function NavLink({ link, label }: NavLinkProps): JSX.Element {
  const router = useRouter();
  return (
    <a href={link} className={`${styles.link} ${router.pathname === link && styles.selected}`}>
      {label}
    </a>
  );
}
