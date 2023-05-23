import SvgICross from 'assets/icons/ICross';
import IDragHandle from 'assets/icons/IDragHandle';
import ISearch from 'assets/icons/ISearch';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';

import { useUnsplash } from '../../useUnsplash';
import styles from './dialog-box.module.scss';

export const DialogBox: React.FC = () => {
  const { showDialogBox, setShowDialogBox } = useUnsplash();
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const elementWidth = elementRef.current?.offsetWidth || 0;
    const elementHeight = elementRef.current?.offsetHeight || 0;

    const initialX = (viewportWidth - elementWidth) / 2;
    const initialY = (viewportHeight - elementHeight) / 2;

    setCoordinates({ x: initialX, y: initialY });

    if (elementRef.current) {
      elementRef.current.style.transform = `translate(${initialX}px, ${initialY}px)`;
    }
  }, []);

  /**
   * @doc https://github.com/react-grid-layout/react-draggable#draggable
   */
  return (
    <div className={`${styles.container} ${showDialogBox ? styles.show : ''}`}>
      <Draggable
        handle=".handle"
        bounds="parent"
        // position={coordinates}
        defaultPosition={coordinates}>
        <div ref={elementRef} className={`${styles.dialog} ${showDialogBox ? styles.show : ''}`}>
          <button className={`${styles['drag-handle']} handle`}>
            <IDragHandle />
          </button>
          <button className={styles['btn-close']} onClick={() => setShowDialogBox(false)}>
            <SvgICross className={styles.icon} />
          </button>

          <div className={styles.content}>
            <Search />
            <List />
          </div>
        </div>
      </Draggable>
    </div>
  );
};

const Search: React.FC = () => {
  const {
    setUnsplashQuery,
    unsplashQuery,
    getImages,
    setUserSearch,
    noResults,
    unsplashAPIUnavailable
  } = useUnsplash();

  const onSearchSubmit = useCallback(
    (evt) => {
      evt.preventDefault();
      setUserSearch(true);
      getImages();
    },
    [getImages, setUserSearch]
  );

  if (unsplashAPIUnavailable) return null;

  return (
    <form className={styles['search-form']} onSubmit={onSearchSubmit}>
      <div className={`${styles.error} ${noResults ? styles.show : ''}`}>No photos found.</div>

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
