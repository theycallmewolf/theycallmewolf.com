import 'react-typed/dist/animatedCursor.css';

import { useEffect, useState } from 'react';
import { deviceCheck } from 'utils/device-check';

import styles from './banner.module.scss';
import { Content } from './components/Content';
import { DialogBox } from './components/DialogBox';
import { Scene } from './components/Scene';
import { Tools } from './components/Tools';
import { UnsplashProvider, useUnsplash } from './useUnsplash';

export const Banner: React.FC = () => {
  return (
    <UnsplashProvider>
      <BannerComponent />
    </UnsplashProvider>
  );
};

const BannerComponent: React.FC = () => {
  const { images, addBackgroundImage } = useUnsplash();

  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');

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
      <Tools />
      <Content />
      <DialogBox />
      <Scene />
    </section>
  );
};
