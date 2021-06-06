import styles from './styles.module.scss';

interface GraphProps {
  title: string;
  percentage: number;
}

export function Graph({ title, percentage }: GraphProps): JSX.Element {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      <div className={styles.graph}>
        <div className={styles.active} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}
