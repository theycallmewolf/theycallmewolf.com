import { Button } from '../../Button';
import styles from './styles.module.scss';

type BlogCardProps = {
  title: string;
  lead: string;
};

export const BlogCard: React.FC<BlogCardProps> = ({ title, lead }) => {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{lead}</p>
      <Button genre="fill">Read</Button>
    </div>
  );
};
