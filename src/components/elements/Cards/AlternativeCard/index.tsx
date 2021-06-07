import { CardBody } from './CardBody';
import { CardImage } from './CardImage';
import styles from './styles.module.scss';

interface AlternativeCardProps extends React.HTMLAttributes<HTMLElement> {
  adicionalClass?: string;
}

function AlternativeCard({
  adicionalClass = '',
  children,
  ...rest
}: AlternativeCardProps): JSX.Element {
  return (
    <div className={`${styles.container} ${adicionalClass}`} {...rest}>
      {children}
    </div>
  );
}

export { AlternativeCard, CardBody, CardImage };
