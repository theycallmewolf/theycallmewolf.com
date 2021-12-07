import { useNav } from 'hooks/useNav';
import { useRouter } from 'next/router';

import styles from './styles.module.scss';

interface NavButtonProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  label: string;
}
export function NavButton({ href, label }: NavButtonProps): JSX.Element {
  const router = useRouter();
  const { toggleNav } = useNav();

  const handleClick = () => {
    router.push(href);
    toggleNav();
  };

  return (
    <button
      className={`${styles.button} ${
        router.asPath.split('/')[1] === href.split('/')[1] ? styles.active : ''
      }`}
      onClick={handleClick}>
      {label}
    </button>
  );
}
