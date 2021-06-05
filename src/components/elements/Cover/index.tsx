import { TangramCover } from '../../../assets/tangrams';
import styles from './styles.module.scss';

interface CoverProps {
  imageURL: string;
}
export function Cover({ imageURL }: CoverProps): JSX.Element {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${imageURL})`
      }}>
      <TangramCover />
    </div>
  );
}
