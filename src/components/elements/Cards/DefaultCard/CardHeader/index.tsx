import styles from './styles.module.scss';

interface CardHeaderProps extends React.HTMLAttributes<HTMLElement> {
  customClass?: string;
}
export function CardHeader({ customClass = '', children, ...rest }: CardHeaderProps): JSX.Element {
  return (
    <div className={`${styles.cardHeader} ${customClass}`} {...rest}>
      {children}
      <div className={styles.clip}></div>
    </div>
  );
}
