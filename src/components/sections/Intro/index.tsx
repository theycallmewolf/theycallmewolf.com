import { IntroProps } from '../../../types';
import { Nav } from '../../elements/Nav';
import styles from './styles.module.scss';

export function Intro({ link_list, title, lead, ...rest }: IntroProps): JSX.Element {
  return (
    <aside className={styles.container} {...rest}>
      <h1>{title}</h1>
      <p className="lead">{lead}</p>
      <Nav customClass={styles.nav} link_list={link_list} />
    </aside>
  );
}
