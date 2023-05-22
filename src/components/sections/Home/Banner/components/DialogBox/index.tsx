import SvgICross from 'assets/icons/ICross';
import ISearch from 'assets/icons/ISearch';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

import { useUnsplash } from '../../useUnsplash';
import styles from './dialog-box.module.scss';

export const DialogBox: React.FC = () => {
  const { images, setCurrentBgImage, currentBgImage, setUnsplashQuery, setUserSearch } =
    useUnsplash();

  const [showDialog, setShowDialog] = useState(true);

  const inputRef = useRef<HTMLInputElement>(null);

  const onSearchSubmit = useCallback(
    (evt) => {
      evt.preventDefault();

      if (!inputRef.current) return;
      setUnsplashQuery(inputRef.current.value);
      setUserSearch(true);
    },
    [setUnsplashQuery, setUserSearch]
  );

  const onThumbClick = useCallback(
    (id: string) => {
      const image = images.find((img) => img.id === id);

      setCurrentBgImage(image);
    },
    [images, setCurrentBgImage]
  );

  useEffect(() => {
    setShowDialog(images?.length > 0);
  }, [images]);

  return (
    <div className={`${styles.dialog} ${showDialog ? styles.show : ''}`}>
      <button className={styles['btn-close']} onClick={() => setShowDialog(false)}>
        <SvgICross className={styles.icon} />
      </button>

      <div className={styles.content}>
        <form className={styles['search-form']} onSubmit={onSearchSubmit}>
          <input ref={inputRef} type="search" name="unsplash-search" id="unsplash-search" />
          <button type="submit">
            <ISearch className={styles.icon} />
          </button>
        </form>

        <div className={styles['thumbs-list']}>
          {images?.map((img) => (
            <button
              onClick={() => onThumbClick(img.id)}
              key={img.id}
              data-id={img.id}
              className={`${styles.button} ${
                currentBgImage?.id === img.id ? styles.selected : ''
              }`}>
              <Image src={img.urls.thumb} alt={img.description} layout="fill" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
