import { useNav } from 'hooks/useNav';
import { useRouter } from 'next/router';

import styles from './styles.module.scss';

interface NavLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  label: string;
}
export function NavLink({ href, label }: NavLinkProps): JSX.Element {
  const router = useRouter();
  const { toggleNav } = useNav();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.push(href);
    toggleNav();
  };

  return (
    <a
      href={href}
      className={`${styles.link} ${
        router.asPath.split('/')[1] === href.split('/')[1] ? styles.active : undefined
      }`}
      onClick={handleClick}>
      {label}
    </a>
  );
}
