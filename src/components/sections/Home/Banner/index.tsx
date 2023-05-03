import 'react-typed/dist/animatedCursor.css';

import { fallbackBgImages } from 'assets/constants/bg-images';
import { introCopy } from 'assets/constants/intro';
import { IShuffle } from 'assets/icons';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Typed from 'react-typed';
import { getRandomImages, UnsplashAPIResponse } from 'services/unsplash';
import { getRandomInt } from 'utils';
import { NODE_DEV } from 'utils/dev';

import styles from './banner.module.scss';

export const Banner: React.FC = () => {
  const [images, setImages] = useState<UnsplashAPIResponse['data']>();
  const [currentBgImage, setCurrentBgImage] = useState<string>();

  const addBackgroundImage = useCallback(() => {
    const imgArray = images ?? fallbackBgImages;
    const index = getRandomInt(0, imgArray.length - 1);
    setCurrentBgImage(imgArray[index].urls.regular);
  }, [images]);

  useEffect(() => {
    getImages();

    async function getImages() {
      if (images) return;

      try {
        const { data } = await getRandomImages();
        if (!data) {
          // @todo add fallback images with all api response
          // setImages(fallbackBgImages);
          // setBgImages(fallbackBgImages.map(({ urls }) => urls.regular));
          return;
        }

        setImages(data);
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

  const style = useMemo(() => ({ background: `url(${currentBgImage})` }), [currentBgImage]);

  return (
    <section className={styles.container}>
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
