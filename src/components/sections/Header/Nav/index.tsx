import { NavButton } from './NavButton';
import styles from './styles.module.scss';

const BUTTONS = [
  {
    id: 1,
    label: 'home',
    href: '/'
  },
  {
    id: 2,
    label: 'work',
    href: '/work/code'
  },
  {
    id: 3,
    label: 'about',
    href: '/about/activity'
  },
  {
    id: 4,
    label: 'store',
    href: 'https://theycallmewolf.bigcartel.com/'
  }
];

export const Nav: React.FC = () => (
  <nav className={styles.nav}>
    {BUTTONS.map((b) => (
      <NavButton label={b.label} href={b.href} key={b.id.toString()} />
    ))}
  </nav>
);
