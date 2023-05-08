import { useMemo } from 'react';
import { UnsplashAPIData } from 'services/unsplash';
import { COLORS } from 'theme';

import styles from './scene.module.scss';

interface SceneProps {
  currentBgImage?: UnsplashAPIData;
}

export const Scene: React.FC<SceneProps> = (props) => {
  const wrap = ['1', '2'];

  const frames = useMemo(
    () => [
      {
        id: '1',
        className: `${styles.wall} ${styles.right}`
      },
      {
        id: '2',
        className: `${styles.wall} ${styles.left}`
      },
      {
        id: '3',
        className: `${styles.wall} ${styles.top}`
      },
      {
        id: '4',
        className: `${styles.wall} ${styles.bottom}`
      },
      {
        id: '5',
        className: `${styles.wall} ${styles.back}`
      }
    ],
    []
  );

  const style = useMemo(() => {
    if (!props.currentBgImage || !props.currentBgImage?.urls.regular)
      return { background: COLORS.NIGHT_BLACK };

    return { background: `url(${props.currentBgImage?.urls.regular})` };
  }, [props.currentBgImage]);

  if (!props.currentBgImage) return null;

  return (
    <div className={styles.scene}>
      {wrap.map((key) => (
        <div key={key} className={styles.wrap}>
          {frames.map((f) => (
            <div key={f.id} className={f.className} style={style} />
          ))}
        </div>
      ))}
    </div>
  );
};
