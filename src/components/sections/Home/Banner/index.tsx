import "react-typed/dist/animatedCursor.css";

import { useEffect } from "react";

import styles from "./banner.module.scss";
import { Content } from "./components/Content";
import { DialogBox } from "./components/DialogBox";
import { Scene } from "./components/Scene";
import { Tools } from "./components/Tools";
import { DeviceProvider, useDevice } from "./useDevice";
import { UnsplashProvider, useUnsplash } from "./useUnsplash";

export const Banner: React.FC = () => (
  <UnsplashProvider>
    <DeviceProvider>
      <BannerComponent />
    </DeviceProvider>
  </UnsplashProvider>
);

export default Banner;

const BannerComponent: React.FC = () => {
  const { getImages } = useUnsplash();
  const { device, safeMode } = useDevice();

  useEffect(() => {
    getImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={`${styles.container} ${styles[device]}`}>
      {!safeMode && <Tools />}
      <Content />
      {!safeMode && <DialogBox />}
      <Scene />
    </section>
  );
};
