import 'react-typed/dist/animatedCursor.css';

import { bgImages, introCopy } from 'assets/constants';
import { IShuffle } from 'assets/icons';
import { useCallback, useEffect, useState } from 'react';
import Typed from 'react-typed';
import { getRandomInt } from 'utils';

import styles from './styles.module.scss';

export function Banner(): JSX.Element {
  const [bgImage, setBgImage] = useState(null);
  const [wallBackground, setWallBackground] = useState({});

  const addBackgroundImage = useCallback(() => {
    const index = getRandomInt(0, bgImages.length - 1);
    setBgImage(bgImages[index]);
  }, []);

  useEffect(() => {
    addBackgroundImage();
    // setInterval(() => addBackgroundImage(), 5000);
  }, [addBackgroundImage]);

  useEffect(() => {
    setWallBackground({ background: `url(${bgImage})` });
  }, [bgImage]);

  return (
    <section className={styles.container}>
      <button
        className={styles.shuffleButton}
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
        <div className={styles.wrap}>
          <div className={styles.wall + ' ' + styles.right} style={wallBackground}></div>
          <div className={styles.wall + ' ' + styles.left} style={wallBackground}></div>
          <div className={styles.wall + ' ' + styles.top} style={wallBackground}></div>
          <div className={styles.wall + ' ' + styles.bottom} style={wallBackground}></div>
          <div className={styles.wall + ' ' + styles.back} style={wallBackground}></div>
        </div>
        <div className={styles.wrap}>
          <div className={styles.wall + ' ' + styles.right} style={wallBackground}></div>
          <div className={styles.wall + ' ' + styles.left} style={wallBackground}></div>
          <div className={styles.wall + ' ' + styles.top} style={wallBackground}></div>
          <div className={styles.wall + ' ' + styles.bottom} style={wallBackground}></div>
          <div className={styles.wall + ' ' + styles.back} style={wallBackground}></div>
        </div>
      </div>
    </section>
  );
}
