import { introCopy } from 'assets/constants/intro';
import Typed from 'react-typed';

import styles from './content.module.scss';

export const Content: React.FC = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.flame /* neon | vegas | rainbow | florida | shadow*/}>
        They <br />
        Call Me <br />
        {'<Wolf />'}
      </h1>
      <Typed
        strings={introCopy}
        typeSpeed={40}
        backSpeed={20}
        startDelay={5000}
        backDelay={1000}
        className={styles.typed}
      />
    </div>
  );
};
