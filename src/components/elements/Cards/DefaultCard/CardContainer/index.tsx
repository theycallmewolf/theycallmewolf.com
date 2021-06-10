import styles from './styles.module.scss';

interface CardContainerProps extends React.HTMLAttributes<HTMLElement> {
  adicionalClass?: string;
  imageFilter?: boolean;
}
export function CardContainer({
  adicionalClass = '',
  imageFilter = false,
  children,
  ...rest
}: CardContainerProps): JSX.Element {
  return (
    <div
      className={`${styles.cardContainer} ${adicionalClass} ${imageFilter && styles.imageFilter}`}
      {...rest}>
      {children}
    </div>
  );
}
