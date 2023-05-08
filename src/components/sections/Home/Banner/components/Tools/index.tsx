import { IShuffle } from 'assets/icons';
import { UnsplashAPIData } from 'services/unsplash';

import { UnsplashCopyright } from '../UnsplashCopyright';
import styles from './tools.module.scss';

interface ToolsProps {
  addBackgroundImage: () => void;
  currentBgImage: UnsplashAPIData;
}

export const Tools: React.FC<ToolsProps> = (props) => {
  if (!props.currentBgImage) return null;

  return (
    <div className={styles.tools}>
      <button
        className={styles['shuffle-button']}
        onClick={props.addBackgroundImage}
        aria-label="shuffle background">
        <IShuffle />
      </button>

      <UnsplashCopyright
        currentBgImage={props.currentBgImage}
        image={{
          src: props.currentBgImage.urls.thumb,
          alt: props.currentBgImage.alt_description
        }}
      />
    </div>
  );
};
