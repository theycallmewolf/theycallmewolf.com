import { TangramCover } from '../../../assets/tangrams';
import { AsideProps } from '../../../types';
import { Nav } from '../../elements/Nav';
import styles from './styles.module.scss';

export function Aside({ imageURL, intro, link_list }: AsideProps): JSX.Element {
  return (
    <aside className={styles.aside}>
      <div
        className={styles.cover}
        style={{
          backgroundImage: `url(${imageURL})`
        }}>
        <TangramCover />
      </div>
      <div className={styles.content}>
        <h1>{intro[0].title}</h1>
        <p className="lead">{intro[0].lead}</p>
        <Nav customClass={styles.nav} link_list={link_list} />
      </div>
    </aside>
  );
}
