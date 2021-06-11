import { Nav } from '../Nav';
import styles from './styles.module.scss';

type Links = {
  id: number;
  link: string;
  label: string;
};

interface IntroProps extends React.HTMLAttributes<HTMLElement> {
  linkList: Links[];
  title: string;
  lead: string;
}

export function Intro({ linkList, title, lead, ...rest }: IntroProps): JSX.Element {
  return (
    <aside className={styles.container} {...rest}>
      <h1>{title}</h1>
      <p className="lead">{lead}</p>
      <Nav customClass={styles.nav} linkList={linkList} />
    </aside>
  );
}
