import styles from './styles.module.scss';

interface CardContainerProps {
  children: React.ReactNode;
  adicionalClass?: string;
}
export function CardContainer({ children, adicionalClass }: CardContainerProps): JSX.Element {
  return (
    <div className={`${styles.cardContainer} ${adicionalClass && adicionalClass}`}>{children}</div>
  );
}
