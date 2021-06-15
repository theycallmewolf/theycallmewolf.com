import { Nav } from '../Nav';
import styles from './styles.module.scss';

type Links = {
  id: number;
  link: string;
  label: string;
};

interface IntroProps extends React.HTMLAttributes<HTMLElement> {
  link_list: Links[];
  title: string;
  lead: string;
}

export function Intro({ link_list, title, lead, ...rest }: IntroProps): JSX.Element {
  return (
    <aside className={styles.container} {...rest}>
      <h1>{title}</h1>
      <p className="lead">{lead}</p>
      <Nav customClass={styles.nav} link_list={link_list} />
    </aside>
  );
}
