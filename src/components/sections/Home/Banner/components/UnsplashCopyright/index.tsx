import { UnsplashAPIData } from 'services/unsplash';

import styles from './unsplash-copyright.module.scss';

interface UnsplashCopyrightProps {
  currentBgImage: UnsplashAPIData;
}

export const UnsplashCopyright: React.FC<UnsplashCopyrightProps> = (props) => {
  if (!props.currentBgImage) return null;
  return (
    <div className={styles.copyright}>
      Background generated using{' '}
      <a href={props.currentBgImage.links.html} target="_blank" rel="noopener noreferrer">
        photo
      </a>{' '}
      by{' '}
      <a
        href={`https://unsplash.com/@${props.currentBgImage.user.username}?utm_source=theycallmewolf.com&utm_medium=referral`}
        target="_blank"
        rel="noopener noreferrer">
        {props.currentBgImage.user.name}
      </a>
      {' on '}
      <a
        href="https://unsplash.com/?utm_source=theycallmewolf.com&utm_medium=referral"
        target="_blank"
        rel="noopener noreferrer">
        Unsplash
      </a>
    </div>
  );
};
