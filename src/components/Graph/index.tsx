import styles from './styles.module.scss';

interface GraphProps {
  title: string;
  percentage: number;
}

export const Graph: React.FC<GraphProps> = ({ title, percentage }) => {
  return (
    <div className={styles.container}>
      <small>{title}</small>
      <div className={styles.graph}>
        <div className={styles.active} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};
