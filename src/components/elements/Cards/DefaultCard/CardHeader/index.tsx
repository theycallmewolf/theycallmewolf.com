import styles from './styles.module.scss';

interface CardHeaderProps extends React.HTMLAttributes<HTMLElement> {
  adicionalClass?: string;
}
export function CardHeader({
  adicionalClass = '',
  children,
  ...rest
}: CardHeaderProps): JSX.Element {
  return (
    <div className={`${styles.cardHeader} ${adicionalClass}`} {...rest}>
      {children}
      <div className={styles.clip}></div>
    </div>
  );
}
