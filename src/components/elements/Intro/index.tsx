import { Nav } from '../Nav';
import styles from './styles.module.scss';

export function Intro(): JSX.Element {
  return (
    <div className={styles.container}>
      <h1>About</h1>
      <p className="lead">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
        elit.
      </p>
      <Nav adicionalClassName={styles.nav} />
    </div>
  );
}
