import { useMemo } from 'react';
import { COLORS } from 'theme';
import { deviceCheck } from 'utils';

import { useUnsplash } from '../../useUnsplash';
import styles from './scene.module.scss';

export const Scene: React.FC = () => {
  const { hasDarkMode } = useTheme();
  const { currentBgImage } = useUnsplash();

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
    if (!currentBgImage) {
      return { background: hasDarkMode ? COLORS.NIGHT_BLACK : COLORS.IRIDIUM_WHITE };
    }

    const { isMobile } = deviceCheck();
    const image = isMobile ? currentBgImage.urls.small : currentBgImage?.urls.regular;

    return { background: `url(${image})` };
  }, [hasDarkMode, currentBgImage]);

  if (!currentBgImage) return null;

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
