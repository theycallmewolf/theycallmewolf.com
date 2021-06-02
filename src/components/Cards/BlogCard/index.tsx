import { Button } from '../../elements/Button';
import styles from './styles.module.scss';

type BlogCardProps = {
  title: string;
  lead: string;
};

export function BlogCard({ title, lead }: BlogCardProps): JSX.Element {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{lead}</p>
      <Button genre="fill">Read</Button>
    </div>
  );
}
