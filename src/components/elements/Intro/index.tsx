import { Nav } from '../Nav';
import styles from './styles.module.scss';

type Links = {
  id: number;
  link: string;
  label: string;
};

interface IntroProps {
  linkList: Links[];
  title: string;
  lead: string;
}

export function Intro({ linkList, title, lead }: IntroProps): JSX.Element {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <p className="lead">{lead}</p>
      <Nav adicionalClassName={styles.nav} linkList={linkList} />
    </div>
  );
}
