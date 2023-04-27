import styles from './alternative-card.module.scss';
import { CardBody } from './CardBody';
import { CardImage } from './CardImage';

interface AlternativeCardProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

const AlternativeCard: React.FC<AlternativeCardProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {children}
    </div>
  );
};

export { AlternativeCard, CardBody, CardImage };
