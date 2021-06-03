import { CustomLink } from '../../Link';
import styles from './styles.module.scss';

type BlogCardProps = {
  title: string;
  lead: string;
  date: string;
  slug: string;
};

export function BlogCard({ title, lead, date, slug }: BlogCardProps): JSX.Element {
  return (
    <div className={styles.container}>
      <span className={styles.date}>{date}</span>
      <h3>{title}</h3>
      <p>{lead}</p>
      <CustomLink href={`/${slug}`} label="Read" />
    </div>
  );
}
