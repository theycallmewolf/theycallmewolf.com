import { useNav } from 'hooks';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import styles from './styles.module.scss';

interface NavButtonProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  label: string;
}
export const NavButton: React.FC<NavButtonProps> = ({ href, label }) => {
  const router = useRouter();
  const { toggleNav } = useNav();

  const handleClick = () => {
    router.push(href);
    toggleNav();
  };

  const className = useMemo(() => {
    const isActive = router.asPath.split('/')[1] === href.split('/')[1];
    return `${styles.button} ${isActive ? styles.active : ''}`;
  }, [href, router.asPath]);

  return (
    <button className={className} onClick={handleClick}>
      {label}
    </button>
  );
};
