import SvgICross from 'assets/icons/ICross';
import ISearch from 'assets/icons/ISearch';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

import { useUnsplash } from '../../useUnsplash';
import styles from './dialog-box.module.scss';

export const DialogBox: React.FC = () => {
  const { images } = useUnsplash();

  const [showDialog, setShowDialog] = useState(true);

  useEffect(() => {
    setShowDialog(images?.length > 0);
  }, [images]);

  return (
    <div className={`${styles.dialog} ${showDialog ? styles.show : ''}`}>
      <button className={styles['btn-close']} onClick={() => setShowDialog(false)}>
        <SvgICross className={styles.icon} />
      </button>

      <div className={styles.content}>
        <Search />
        <List />
      </div>
    </div>
  );
};

const Search: React.FC = () => {
  const { setUnsplashQuery, unsplashQuery, getImages, setUserSearch } = useUnsplash();

  const onSearchSubmit = useCallback(
    (evt) => {
      evt.preventDefault();
      setUserSearch(true);
      getImages();
    },
    [getImages, setUserSearch]
  );

  // @todo: fix search
  return null;

  return (
    <form className={styles['search-form']} onSubmit={onSearchSubmit}>
      <input
        type="search"
        name="unsplash-search"
        id="unsplash-search"
        value={unsplashQuery}
        onChange={(evt) => setUnsplashQuery(evt.target.value)}
      />
      <button type="submit">
        <ISearch className={styles.icon} />
      </button>
    </form>
  );
};

const List: React.FC = () => {
  const { images, currentBgImage, setCurrentBgImage } = useUnsplash();

  const onThumbClick = useCallback(
    (id: string) => {
      const image = images.find((img) => img.id === id);
      setCurrentBgImage(image);
    },
    [images, setCurrentBgImage]
  );

  return (
    <>
      <div className={styles['thumbs-list']}>
        {images?.map((img) => (
          <button
            onClick={() => onThumbClick(img.id)}
            key={img.id}
            data-id={img.id}
            className={`${styles.button} ${currentBgImage?.id === img.id ? styles.selected : ''}`}>
            <Image src={img.urls.thumb} alt={img.description} layout="fill" />
          </button>
        ))}
      </div>

      <p className={styles.credits}>
        {'Powered by '}
        <a href="https://unsplash.com/developers" target="_blank" rel="noopener noreferrer">
          Unsplash API
        </a>
      </p>
    </>
  );
};
