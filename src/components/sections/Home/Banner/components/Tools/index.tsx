import IEye from 'assets/icons/IEye';
import IEyeOff from 'assets/icons/IEyeOff';
import IImage from 'assets/icons/IImage';
import IImageOff from 'assets/icons/IImageOff';
import IMinus from 'assets/icons/IMinus';
import IPlus from 'assets/icons/IPlus';
import IShuffle from 'assets/icons/IShuffle';
import { useState } from 'react';

import { useUnsplash } from '../../useUnsplash';
import { UnsplashCopyright } from '../UnsplashCopyright';
import styles from './tools.module.scss';

export const Tools: React.FC = () => {
  const {
    currentBgImage,
    addBackgroundImage,
    setShowDialogBox,
    showDialogBox,
    setShowContent,
    showContent
  } = useUnsplash();

  const [open, setOpen] = useState(false);

  if (!currentBgImage) return null;

  return (
    <div className={styles.tools}>
      <div className={styles.commands}>
        <div className={`${styles.list} ${open ? styles.show : ''}`}>
          <button
            className={styles.button}
            onClick={addBackgroundImage}
            aria-label="shuffle background">
            <IShuffle />
          </button>

          <button
            className={styles.button}
            onClick={() => setShowDialogBox((st) => !st)}
            aria-label="show images dialog box">
            {showDialogBox ? <IImageOff /> : <IImage />}
          </button>

          <button
            className={styles.button}
            onClick={() => setShowContent((st) => !st)}
            aria-label="toggle content visibility">
            {showContent ? <IEyeOff /> : <IEye />}
          </button>
        </div>

        <button
          className={styles.button}
          onClick={() => setOpen((st) => !st)}
          aria-label="toggle commands">
          {open ? <IMinus /> : <IPlus />}
        </button>
      </div>

      <UnsplashCopyright
        currentBgImage={currentBgImage}
        image={{
          src: currentBgImage.urls.thumb,
          alt: currentBgImage.alt_description
        }}
      />
    </div>
  );
};
