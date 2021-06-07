import styles from './styles.module.scss';

interface GraphProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  percentage: number;
}

export function Graph({ title, percentage, ...rest }: GraphProps): JSX.Element {
  return (
    <div className={styles.container} {...rest}>
      <span className={styles.title}>{title}</span>
      <div className={styles.graph}>
        <div className={styles.active} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}
