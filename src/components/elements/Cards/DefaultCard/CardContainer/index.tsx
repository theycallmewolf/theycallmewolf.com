import styles from './styles.module.scss';

interface CardContainerProps extends React.HTMLAttributes<HTMLElement> {
  adicionalClass?: string;
}
export function CardContainer({
  adicionalClass = '',
  children,
  ...rest
}: CardContainerProps): JSX.Element {
  return (
    <div className={`${styles.cardContainer} ${adicionalClass}`} {...rest}>
      {children}
    </div>
  );
}
