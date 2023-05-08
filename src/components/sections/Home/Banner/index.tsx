import 'react-typed/dist/animatedCursor.css';

import { fallbackBgImages } from 'assets/constants/bg-images';
import { useCallback, useEffect, useState } from 'react';
import { getRandomImages, UnsplashAPIData } from 'services/unsplash';
import { getRandomInt } from 'utils';
import { NODE_DEV } from 'utils/dev';
import { deviceCheck } from 'utils/device-check';

import styles from './banner.module.scss';
import { Content } from './components/Content';
import { Scene } from './components/Scene';
import { Tools } from './components/Tools';

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

  return (
    <section className={`${styles.container} ${styles[device]}`}>
      <Tools addBackgroundImage={addBackgroundImage} currentBgImage={currentBgImage} />
      <Content />
      <Scene currentBgImage={currentBgImage} />
    </section>
  );
};
