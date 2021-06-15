import React from 'react';

import { useTheme } from '../../../hooks/useTheme';
import { NavLink } from './NavLink';
import styles from './styles.module.scss';

type Link = {
  id: number;
  link: string;
  label: string;
};

interface NavProps extends React.HTMLAttributes<HTMLElement> {
  customClass?: string;
  link_list: Link[];
}

export function Nav({ customClass, link_list, ...rest }: NavProps): JSX.Element {
  const { hasDarkMode } = useTheme();
  return (
    <nav
      className={`${styles.nav} ${customClass ?? ''} ${hasDarkMode ? styles.dark : ''}`}
      {...rest}>
      {link_list.map((link) => (
        <NavLink link={link.link} label={link.label} key={link.id} />
      ))}
    </nav>
  );
}
