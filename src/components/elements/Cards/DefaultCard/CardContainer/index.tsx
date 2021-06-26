import styles from './styles.module.scss';

interface CardContainerProps extends React.HTMLAttributes<HTMLElement> {
  customClass?: string;
  imageFilter?: boolean;
}
export function CardContainer({
  customClass = '',
  imageFilter = false,
  children,
  ...rest
}: CardContainerProps): JSX.Element {
  return (
    <div
      className={`${styles.cardContainer} ${customClass} ${imageFilter ?? styles.imageFilter}`}
      {...rest}>
      {children}
    </div>
  );
}
