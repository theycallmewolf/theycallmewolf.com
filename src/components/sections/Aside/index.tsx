import { AsideProps } from 'types';

import { Nav } from '../../elements/Nav';
import styles from './styles.module.scss';

export const Aside: React.FC<AsideProps> = ({ intro, link_list }) => (
  <aside className={styles.aside}>
    <div className={styles.content}>
      <h1>{intro[0].title}</h1>
      <p className="lead">{intro[0].lead}</p>
    </div>
    <Nav className={styles.nav} link_list={link_list} />
  </aside>
);
