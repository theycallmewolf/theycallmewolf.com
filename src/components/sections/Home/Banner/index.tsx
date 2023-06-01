import "react-typed/dist/animatedCursor.css";

import { useEffect, useState } from "react";
import { deviceCheck } from "utils/device-check";

import styles from "./banner.module.scss";
import { Content } from "./components/Content";
import { DialogBox } from "./components/DialogBox";
import { Scene } from "./components/Scene";
import { Tools } from "./components/Tools";
import { UnsplashProvider, useUnsplash } from "./useUnsplash";

export const Banner: React.FC = () => (
  <UnsplashProvider>
    <BannerComponent />
  </UnsplashProvider>
);

const BannerComponent: React.FC = () => {
  const { getImages } = useUnsplash();

  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");

  useEffect(() => {
    getImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const { isMobile } = deviceCheck();
    setDevice(isMobile ? "mobile" : "desktop");
  }, []);

  return (
    <section className={`${styles.container} ${styles[device]}`}>
      {/* <Tools /> */}
      <Content />
      {/* <DialogBox /> */}
      {/* <Scene /> */}
    </section>
  );
};
