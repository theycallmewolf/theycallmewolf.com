import styles from './graph.module.scss';

interface GraphProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  percentage: number;
}

export const Graph: React.FC<GraphProps> = ({ title, percentage, ...props }) => {
  return (
    <div className={styles.container} {...props}>
      <span className={styles.title}>{title}</span>
      <div className={styles.graph}>
        <div className={styles.active} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};
