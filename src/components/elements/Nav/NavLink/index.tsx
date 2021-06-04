import styles from './styles.module.scss';

interface NavLinkProps {
  link: string;
  label: string;
}
export function NavLink({ link, label }: NavLinkProps): JSX.Element {
  return (
    <a href={link} className={styles.link}>
      {label}
    </a>
  );
}
