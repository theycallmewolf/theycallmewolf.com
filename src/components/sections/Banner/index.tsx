import 'react-typed/dist/animatedCursor.css';

import Typed from 'react-typed';

import { introCopy } from '../../../assets/constants';
import styles from './styles.module.scss';

export function Banner(): JSX.Element {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>
          They
          <br /> Call Me
          <br /> {'<Wolf />'}
        </h1>
        <Typed
          strings={introCopy}
          typeSpeed={40}
          backSpeed={20}
          startDelay={2000}
          backDelay={1000}
          className={styles.typed}
        />
      </div>
    </section>
  );
}
