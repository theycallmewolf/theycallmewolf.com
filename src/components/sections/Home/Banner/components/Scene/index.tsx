import { useTheme } from "hooks";
import { useEffect, useMemo, useState } from "react";
import { COLORS } from "theme";
import { deviceCheck } from "utils";

// import { useDevice } from "../../useDevice";
import { useUnsplash } from "../../useUnsplash";
import styles from "./scene.module.scss";

export const Scene: React.FC = () => {
  // use to debug the "A problem repeatedly occurred" issue
  // const { safeMode } = useDevice();

  const { hasDarkMode } = useTheme();
  const { currentBgImage } = useUnsplash();

  const [wrap, setWrap] = useState(["1", "2"]);

  const frames = useMemo(
    () => [
      {
        id: "1",
        className: `${styles.wall} ${styles.right}`,
      },
      {
        id: "2",
        className: `${styles.wall} ${styles.left}`,
      },
      {
        id: "3",
        className: `${styles.wall} ${styles.top}`,
      },
      {
        id: "4",
        className: `${styles.wall} ${styles.bottom}`,
      },
      {
        id: "5",
        className: `${styles.wall} ${styles.back}`,
      },
    ],
    []
  );

  const style = useMemo(() => {
    if (!currentBgImage) {
      return {
        background: hasDarkMode ? COLORS.NIGHT_BLACK : COLORS.IRIDIUM_WHITE,
      };
    }

    const { isMobile } = deviceCheck();
    const size = isMobile ? "small" : "regular";

    return { background: `url(${currentBgImage?.urls[size]})` };
  }, [hasDarkMode, currentBgImage]);

  useEffect(() => {
    const { isMobile } = deviceCheck();
    if (!isMobile) return;

    // add only one images effect group case is mobile
    // to avoid the "A problem repeatedly occurred" issue
    setWrap(["1"]);
  }, []);

  // use to debug the "A problem repeatedly occurred" issue
  // if (safeMode) return null;

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
