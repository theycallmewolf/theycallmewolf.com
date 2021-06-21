import React from 'react';

import { useTheme } from '../../../hooks/useTheme';
import { LinkData } from '../../../types';
import { NavLink } from './NavLink';
import styles from './styles.module.scss';

interface NavProps extends React.HTMLAttributes<HTMLElement> {
  customClass?: string;
  link_list: LinkData[];
}

export function Nav({ customClass, link_list, ...rest }: NavProps): JSX.Element {
  const { hasDarkMode } = useTheme();
  return (
    <nav
      className={`${styles.nav} ${customClass ?? ''} ${hasDarkMode ? styles.dark : ''}`}
      {...rest}>
      {link_list.map((link, i) => (
        <NavLink link={link.link} label={link.label} key={i} />
      ))}
    </nav>
  );
}
