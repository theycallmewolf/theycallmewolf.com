import styles from './styles.module.scss';

interface CardHeaderProps {
  children: React.ReactNode;
  adicionalClass?: string;
}
export function CardHeader({ children, adicionalClass }: CardHeaderProps): JSX.Element {
  return (
    <div className={`${styles.cardHeader} ${adicionalClass && adicionalClass}`}>{children}</div>
  );
}
