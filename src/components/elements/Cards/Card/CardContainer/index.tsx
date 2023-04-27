import styles from './card-container.module.scss';

interface CardContainerProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  imageFilter?: boolean;
}
export const CardContainer: React.FC<CardContainerProps> = ({
  className = '',
  imageFilter = false,
  children,
  ...props
}) => {
  return (
    <div
      className={`${styles.cardContainer} ${className} ${imageFilter ? styles.imageFilter : ''}`}
      {...props}>
      {children}
    </div>
  );
};
