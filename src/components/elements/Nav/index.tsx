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
  adicionalClassName?: string;
  linkList: Link[];
}

export function Nav({ adicionalClassName = '', linkList, ...rest }: NavProps): JSX.Element {
  const { hasDarkMode } = useTheme();
  return (
    <nav
      className={`${styles.nav} ${adicionalClassName} ${hasDarkMode ? styles.dark : ''}`}
      {...rest}>
      {linkList.map((link) => (
        <NavLink link={link.link} label={link.label} key={link.id} />
      ))}
    </nav>
  );
}
