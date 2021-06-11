import { CardBody } from './CardBody';
import { CardImage } from './CardImage';
import styles from './styles.module.scss';

interface AlternativeCardProps extends React.HTMLAttributes<HTMLElement> {
  customClass?: string;
}

function AlternativeCard({ customClass, children, ...rest }: AlternativeCardProps): JSX.Element {
  return (
    <div className={`${styles.container} ${customClass ?? ''}`} {...rest}>
      {children}
    </div>
  );
}

export { AlternativeCard, CardBody, CardImage };
