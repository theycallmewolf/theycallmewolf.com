import 'react-typed/dist/animatedCursor.css';

import { fallbackBgImages } from 'assets/constants/bg-images';
import { introCopy } from 'assets/constants/intro';
import { IShuffle } from 'assets/icons';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Typed from 'react-typed';
import { getRandomImages, UnsplashAPIData } from 'services/unsplash';
import { getRandomInt } from 'utils';
import { NODE_DEV } from 'utils/dev';
import { deviceCheck } from 'utils/device-check';

import styles from './banner.module.scss';

export const Banner: React.FC = () => {
  const [images, setImages] = useState<UnsplashAPIData[]>();
  const [currentBgImage, setCurrentBgImage] = useState<UnsplashAPIData>();
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');

  const addBackgroundImage = useCallback(() => {
    const imgArray = images ?? fallbackBgImages;
    const index = getRandomInt(0, imgArray.length - 1);
    setCurrentBgImage(imgArray[index]);
  }, [images]);

  useEffect(() => {
    getImages();

    async function getImages() {
      if (images) return;

      try {
        const res = await getRandomImages();

        if (!res?.data) {
          setImages(fallbackBgImages);
          return;
        }

        setImages(res.data);
      } catch (error) {
        NODE_DEV && console.info('[error]', error);
      }
    }
  }, [images]);

  useEffect(() => {
    if (!images) return;

    addBackgroundImage();
    const intervalID = setInterval(() => addBackgroundImage(), 10_000);
    return () => clearInterval(intervalID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  useEffect(() => {
    const { isAndroid, isIOS } = deviceCheck();
    setDevice(isAndroid || isIOS ? 'mobile' : 'desktop');
  }, []);

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

  const style = useMemo(
    () => ({ background: `url(${currentBgImage?.urls.regular})` }),
    [currentBgImage?.urls.regular]
  );

  return (
    <section className={`${styles.container} ${styles[device]}`}>
      <div className={styles.tools}>
        <button
          className={styles['shuffle-button']}
          onClick={addBackgroundImage}
          aria-label="shuffle background">
          <IShuffle />
        </button>
      </div>

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

      {currentBgImage && (
        <div className={styles.copyright}>
          Background generated using{' '}
          <a href={currentBgImage.links.html} target="_blank" rel="noopener noreferrer">
            photo
          </a>{' '}
          by{' '}
          <a
            href={`https://unsplash.com/@${currentBgImage.user.username}?utm_source=theycallmewolf.com&utm_medium=referral`}
            target="_blank"
            rel="noopener noreferrer">
            {currentBgImage.user.name}
          </a>
          {' on '}
          <a
            href="https://unsplash.com/?utm_source=theycallmewolf.com&utm_medium=referral"
            target="_blank"
            rel="noopener noreferrer">
            Unsplash
          </a>
        </div>
      )}

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
