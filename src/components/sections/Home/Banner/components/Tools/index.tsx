import { IShuffle } from 'assets/icons';

import { useUnsplash } from '../../useUnsplash';
import { UnsplashCopyright } from '../UnsplashCopyright';
import styles from './tools.module.scss';

export const Tools: React.FC = () => {
  const { currentBgImage, addBackgroundImage } = useUnsplash();

  if (!currentBgImage) return null;

  return (
    <div className={styles.tools}>
      <button
        className={styles['shuffle-button']}
        onClick={addBackgroundImage}
        aria-label="shuffle background">
        <IShuffle />
      </button>

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
