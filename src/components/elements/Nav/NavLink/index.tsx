import styles from './styles.module.scss';

interface NavLinkProps {
  link: string;
  label: string;
  isSelected?: boolean;
}
export function NavLink({ link, label, isSelected }: NavLinkProps): JSX.Element {
  return (
    <a href={link} className={`${styles.link} ${isSelected && styles.selected}`}>
      {label}
    </a>
  );
}
