import { TangramCover } from '../../../assets/tangrams';
import styles from './styles.module.scss';

interface CoverProps extends React.HTMLAttributes<HTMLElement> {
  imageURL: string;
}
export function Cover({ imageURL, ...rest }: CoverProps): JSX.Element {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${imageURL})`
      }}
      {...rest}>
      <TangramCover />
    </div>
  );
}
