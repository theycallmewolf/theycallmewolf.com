import { NavLink } from './NavLink';
import styles from './styles.module.scss';

interface NavProps {
  adicionalClassName?: string;
}
export function Nav({ adicionalClassName }: NavProps): JSX.Element {
  return (
    <nav className={`${styles.nav} ${adicionalClassName && adicionalClassName}`}>
      <NavLink link="/" label="skill set" />
      <NavLink link="/" label="services" isSelected />
      <NavLink link="/" label="professional" />
      <NavLink link="/" label="academic" />
    </nav>
  );
}
