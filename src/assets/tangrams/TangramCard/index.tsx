import { useEffect, useState } from 'react';

import styles from './tangram-card.module.scss';

interface TangramCardProps {
  className?: string;
}

const TangramCard: React.FC<TangramCardProps> = ({ className = '' }) => {
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
  const [isPathElevenHidden, setIsPathElevenHidden] = useState(true);
  const [isPathTwelveHidden, setIsPathTwelveHidden] = useState(true);
  const [isPathThirteenHidden, setIsPathThirteenHidden] = useState(true);
  const [isPathFourteenHidden, setIsPathFourteenHidden] = useState(true);
  const [isPathFifteenHidden, setIsPathFifteenHidden] = useState(true);
  const [isPathSixteenHidden, setIsPathSixteenHidden] = useState(true);

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
      setIsPathTenHidden,
      setIsPathElevenHidden,
      setIsPathTwelveHidden,
      setIsPathThirteenHidden,
      setIsPathFourteenHidden,
      setIsPathFifteenHidden,
      setIsPathSixteenHidden
    ];

    visibilityFunctions.forEach((visibilityFunction) => visibilityFunction(true));
    const randomIndex = Math.floor(Math.random() * visibilityFunctions.length);
    visibilityFunctions[randomIndex](false);
  }, []);

  return (
    <div className={`${styles.container} ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 225 315" preserveAspectRatio="xMidYMax">
        <g className={`${styles.styles} ${isPathOneHidden ? styles.hide : ''}`}>
          <polyline points="139.4,0 139.4,269.7 184.9,315.2" />
          <polyline points="139.4,38.1 53.2,124.3 53.2,315.2" />
        </g>

        <g className={`${styles.styles} ${isPathTwoHidden ? styles.hide : ''}`}>
          <polyline points="122.7,0 122.7,186.4 34.7,186.4 164.3,316" />
        </g>

        <g className={`${styles.styles} ${isPathThreeHidden ? styles.hide : ''}`}>
          <polyline points="184.5,0 184.5,89.9 38.9,235.5 38.9,315" />
          <line x1="108.6" y1="165.8" x2="225.3" y2="165.8" />
        </g>

        <g className={`${styles.styles} ${isPathFourHidden ? styles.hide : ''}`}>
          <polyline points="200.7,0 200.7,191.3 77,315" />
          <polyline points="200.7,191.3 108.9,191.3 108.9,0" />
        </g>

        <g className={`${styles.styles} ${isPathFiveHidden ? styles.hide : ''}`}>
          <polyline points="79.4,0 21.3,58.1 21.3,238.3 98,315" />
          <line x1="21.3" y1="153.5" x2="225.3" y2="153.5" />
        </g>

        <g className={`${styles.styles} ${isPathSixHidden ? styles.hide : ''}`}>
          <polyline points="185.4,0 22,163.4 22,315" />
          <line x1="88" y1="97.4" x2="225.3" y2="234.8" />
        </g>

        <g className={`${styles.styles} ${isPathSevenHidden ? styles.hide : ''}`}>
          <polyline points="12.3,0 103,90.7 103,315" />
          <line x1="103" y1="90.7" x2="225.3" y2="90.7" />
        </g>

        <g className={`${styles.styles} ${isPathEightHidden ? styles.hide : ''}`}>
          <polyline points="122,0 16.9,105.1 163.3,251.4 163.3,315" />
          <line x1="16.9" y1="105.1" x2="225.3" y2="105.1" />
        </g>

        <g className={`${styles.styles} ${isPathNineHidden ? styles.hide : ''}`}>
          <polyline points="64.6,0 64.6,170.4 224.9,10.1" />
          <polyline points="64.6,315 64.6,273.9 224.9,113.6" />
        </g>

        <g className={`${styles.styles} ${isPathTenHidden ? styles.hide : ''}`}>
          <polyline points="40.1,0 40.1,122.8 195.1,122.8 195.1,315" />
        </g>

        <g className={`${styles.styles} ${isPathElevenHidden ? styles.hide : ''}`}>
          <polyline points="223,268.3 166.3,268.3 166.3,0" />
          <line x1="166.3" y1="144.5" x2="21.8" y2="0" />
        </g>

        <g className={`${styles.styles} ${isPathTwelveHidden ? styles.hide : ''}`}>
          <polyline points="171.3,0 171.3,178.7 46.7,178.7 46.7,315" />
        </g>

        <g className={`${styles.styles} ${isPathThirteenHidden ? styles.hide : ''}`}>
          <polyline points="30.4,0 30.4,133.8 212,315.4" />
          <line x1="30.4" y1="133.8" x2="165" y2="-0.8" />
        </g>

        <g className={`${styles.styles} ${isPathFourteenHidden ? styles.hide : ''}`}>
          <polyline points="52,0 52,189.8 225.5,189.8" />
          <line x1="138.5" y1="189.8" x2="138.5" y2="315" />
        </g>

        <g className={`${styles.styles} ${isPathFifteenHidden ? styles.hide : ''}`}>
          <polyline points="83.2,0 83.2,191.3 217,57.5 217,183.5 85.7,314.9" />
        </g>

        <g className={`${styles.styles} ${isPathSixteenHidden ? styles.hide : ''}`}>
          <polyline points="40,315 40,234.4 184.5,90 184.5,0" />
          <line x1="225.4" y1="205.2" x2="69.1" y2="205.2" />
          <line x1="24.5" y1="-0.1" x2="149.5" y2="125" />
        </g>
      </svg>
    </div>
  );
};

export default TangramCard;
