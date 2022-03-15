import { useTheme } from 'hooks';
import React from 'react';
import { LinkData } from 'types';

import { NavLink } from './NavLink';
import styles from './styles.module.scss';

interface NavProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  link_list: LinkData[];
}

export const Nav: React.FC<NavProps> = ({ className = '', link_list, ...props }) => {
  const { hasDarkMode } = useTheme();
  return (
    <nav
      className={`${styles.nav} ${className} ${hasDarkMode ? styles.dark : undefined}`}
      {...props}>
      {link_list.map((link, i) => (
        <NavLink link={link.link} label={link.label} key={i} />
      ))}
    </nav>
  );
};
