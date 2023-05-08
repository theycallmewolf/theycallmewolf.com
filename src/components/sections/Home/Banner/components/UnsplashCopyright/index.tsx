import Image from 'next/image';
import { UnsplashAPIData } from 'services/unsplash';

import styles from './unsplash-copyright.module.scss';

interface UnsplashCopyrightProps {
  currentBgImage: UnsplashAPIData;
  image: {
    src: string;
    alt: string;
  };
}

export const UnsplashCopyright: React.FC<UnsplashCopyrightProps> = (props) => {
  if (!props.currentBgImage) return null;
  console.log('[I]', props.currentBgImage.color);
  return (
    <div className={styles.copyright}>
      <span className={styles.thumb} style={{ border: `2px solid ${props.currentBgImage.color}` }}>
        <a href={props.currentBgImage.links.html} target="_blank" rel="noopener noreferrer">
          <Image src={props.image.src} width="48" height="48" quality="50" alt={props.image.alt} />
          <UnsplashSymbol />
        </a>
      </span>

      <span className={styles.label}>
        {'Background generated with '}
        <Link label="photo" href={props.currentBgImage.links.html} />
        {' by '}
        <Link
          label={props.currentBgImage.user.name}
          href={`https://unsplash.com/@${props.currentBgImage.user.username}?utm_source=theycallmewolf.com&utm_medium=referral`}
        />
        {' on '}
        <Link
          label="Unsplash"
          href="https://unsplash.com/?utm_source=theycallmewolf.com&utm_medium=referral"
        />
      </span>
    </div>
  );
};

interface LinkProps {
  label: string;
  href: string;
}
const Link: React.FC<LinkProps> = (props) => {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      {props.label}
    </a>
  );
};

const UnsplashSymbol: React.FC = () => {
  return (
    <svg
      width="49"
      height="48"
      viewBox="0 0 49 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles['unsplash-symbol']}>
      <path
        d="M48.0081 21.2352H32.885V34.6115H15.1232V21.2352H0V48H48.0081V21.2352ZM32.885 0H15.1232V13.3845H32.885V0Z"
        fill="#F5F5F5"
      />
    </svg>
  );
};
