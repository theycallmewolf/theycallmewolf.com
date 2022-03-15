import { useEffect, useState } from 'react';

import styles from './styles.module.scss';

const TangramCover: React.FC = () => {
  const [isPathOneHidden, setIsPathOneHidden] = useState(true);
  const [isPathTwoHidden, setIsPathTwoHidden] = useState(true);
  const [isPathThreeHidden, setIsPathThreeHidden] = useState(true);
  const [isPathFourHidden, setIsPathFourHidden] = useState(true);
  const [isPathFiveHidden, setIsPathFiveHidden] = useState(true);
  const [isPathSixHidden, setIsPathSixHidden] = useState(true);
  const [isPathSevenHidden, setIsPathSevenHidden] = useState(true);
  const [isPathEightHidden, setIsPathEightHidden] = useState(true);
  const [isPathNineHidden, setIsPathNineHidden] = useState(true);
  const [isPathTenHidden, setIsPathTenHidden] = useState(true);

  useEffect(() => {
    const visibilityFunctions = [
      setIsPathOneHidden,
      setIsPathTwoHidden,
      setIsPathThreeHidden,
      setIsPathFourHidden,
      setIsPathFiveHidden,
      setIsPathSixHidden,
      setIsPathSevenHidden,
      setIsPathEightHidden,
      setIsPathNineHidden,
      setIsPathTenHidden
    ];

    visibilityFunctions.forEach((visibilityFunction) => visibilityFunction(true));
    const randomIndex = Math.floor(Math.random() * visibilityFunctions.length);
    visibilityFunctions[randomIndex](false);
  }, []);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 380" className={styles.container}>
      <g className={`${styles.styles} ${isPathOneHidden && styles.hide}`}>
        <path d="M623 189l79 78h98M61 0l237 237H0M298 237l142 142M440 379V189h183L724 0M440 189V0" />
      </g>

      <g className={`${styles.styles} ${isPathTwoHidden && styles.hide}`}>
        <path d="M335 273v107M41 0l159 273h68V0" />
        <path d="M451 157l116 115v108M567 272h233M609-1L335 273M200 273H0M268 273h67" />
      </g>

      <g className={`${styles.styles} ${isPathThreeHidden && styles.hide}`}>
        <path d="M0 124h432M583 276h217M480 378l103-102-151-152-254 254" />
      </g>

      <g className={`${styles.styles} ${isPathFourHidden && styles.hide}`}>
        <path d="M0 178l99 99V0M99 277L376 0M800 213H473l168 168" />
        <path d="M318 381V58l155 155" />
      </g>

      <g className={`${styles.styles} ${isPathFiveHidden && styles.hide}`}>
        <path d="M0 292h204" />
        <path d="M468 380V59M611 254L468 59h332M702 380l-91-126M204 0v292l150-132M204 292L468 59" />
      </g>

      <g className={`${styles.styles} ${isPathSixHidden && styles.hide}`}>
        <path d="M142 255h655" />
        <path d="M142 0v255" />
        <path d="M685 0L431 254l82 2M431 254v126" />
      </g>

      <g className={`${styles.styles} ${isPathSevenHidden && styles.hide}`}>
        <path d="M686,0v137h111 M686,137L486,337 M486,337v40 M150,0l336,337 M486,337L310,160L92,378" />
      </g>

      <g className={`${styles.styles} ${isPathEightHidden && styles.hide}`}>
        <path d="M281,167L73,376 M524,0l167,167 M404,167h287L480,377 M797,167H281" />
      </g>

      <g className={`${styles.styles} ${isPathNineHidden && styles.hide}`}>
        <path d="M276,168L166,278V0 M572,278H166" />
        <path d="M443,0L166,278" />
        <path d="M797,53L572,278" />
      </g>

      <g className={`${styles.styles} ${isPathTenHidden && styles.hide}`}>
        <path d="M437,232h360 M437,232l-93-94v239 M205,138h139L206,0 M0,138h344" />
      </g>
    </svg>
  );
};

export default TangramCover;
