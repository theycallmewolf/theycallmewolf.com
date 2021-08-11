import 'react-typed/dist/animatedCursor.css';

import { useEffect, useState } from 'react';
import Typed from 'react-typed';

import { bgImages, introCopy } from '../../../assets/constants';
import { getRandomInt } from '../../../utils';
import styles from './styles.module.scss';

export function Banner(): JSX.Element {
  const [bgImage, setBgImage] = useState(null);

  useEffect(() => {
    function addBackgroundImage() {
      const index = getRandomInt(0, bgImages.length - 1);
      setBgImage(bgImages[index]);
    }
    addBackgroundImage();
    // setInterval(() => addBackgroundImage(), 5000);
  }, []);

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
      <div className={styles.scene}>
        <div className={styles.wrap}>
          <div
            className={styles.wall + ' ' + styles.right}
            style={{ backgroundImage: `url(${bgImage})` }}></div>
          <div
            className={styles.wall + ' ' + styles.left}
            style={{ backgroundImage: `url(${bgImage})` }}></div>
          <div
            className={styles.wall + ' ' + styles.top}
            style={{ backgroundImage: `url(${bgImage})` }}></div>
          <div
            className={styles.wall + ' ' + styles.bottom}
            style={{ backgroundImage: `url(${bgImage})` }}></div>
          <div
            className={styles.wall + ' ' + styles.back}
            style={{ backgroundImage: `url(${bgImage})` }}></div>
        </div>
        <div className={styles.wrap}>
          <div
            className={styles.wall + ' ' + styles.right}
            style={{ backgroundImage: `url(${bgImage})` }}></div>
          <div
            className={styles.wall + ' ' + styles.left}
            style={{ backgroundImage: `url(${bgImage})` }}></div>
          <div
            className={styles.wall + ' ' + styles.top}
            style={{ backgroundImage: `url(${bgImage})` }}></div>
          <div
            className={styles.wall + ' ' + styles.bottom}
            style={{ backgroundImage: `url(${bgImage})` }}></div>
          <div
            className={styles.wall + ' ' + styles.back}
            style={{ backgroundImage: `url(${bgImage})` }}></div>
        </div>
      </div>
    </section>
  );
}
