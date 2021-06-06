import { NavLink } from './NavLink';
import styles from './styles.module.scss';

type Link = {
  id: number;
  link: string;
  label: string;
};

interface NavProps {
  adicionalClassName?: string;
  linkList: Link[];
}

export function Nav({ adicionalClassName, linkList }: NavProps): JSX.Element {
  return (
    <nav className={`${styles.nav} ${adicionalClassName && adicionalClassName}`}>
      {linkList.map((link) => (
        <NavLink link={link.link} label={link.label} key={link.id} />
      ))}
    </nav>
  );
}
