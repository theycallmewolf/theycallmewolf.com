import 'react-typed/dist/animatedCursor.css';

import { bgImages, introCopy } from 'assets/constants';
import { IShuffle } from 'assets/icons';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Typed from 'react-typed';
import { getRandomInt } from 'utils';

import styles from './styles.module.scss';

export const Banner: React.FC = () => {
  const [bgImage, setBgImage] = useState(null);

  const addBackgroundImage = useCallback(() => {
    const index = getRandomInt(0, bgImages.length - 1);
    setBgImage(bgImages[index]);
  }, []);

  useEffect(() => {
    addBackgroundImage();
    setInterval(() => addBackgroundImage(), 10_000);
  }, [addBackgroundImage]);

  const wrap = ['1', '2'];

  const frames = useMemo(
    () => [
      {
        id: '1',
        className: `${styles.wall} ${styles.right}`
      },
      {
        id: '2',
        className: `${styles.wall} ${styles.left}`
      },
      {
        id: '3',
        className: `${styles.wall} ${styles.top}`
      },
      {
        id: '4',
        className: `${styles.wall} ${styles.bottom}`
      },
      {
        id: '5',
        className: `${styles.wall} ${styles.back}`
      }
    ],
    []
  );

  const style = useMemo(() => ({ background: `url(${bgImage})` }), [bgImage]);

  return (
    <section className={styles.container}>
      <button
        className={styles['shuffle-button']}
        onClick={addBackgroundImage}
        aria-label="shuffle background">
        <IShuffle />
      </button>

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
          startDelay={5000}
          backDelay={1000}
          className={styles.typed}
        />
      </div>

      <div className={styles.scene}>
        {wrap.map((key) => (
          <div key={key} className={styles.wrap}>
            {frames.map((f) => (
              <div key={f.id} className={f.className} style={style} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
