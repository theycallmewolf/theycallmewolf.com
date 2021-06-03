import Link from 'next/link';

import styles from './styles.module.scss';

type BlogCardProps = {
  title: string;
  lead: string;
  date: string;
};

export function BlogCard({ title, lead, date }: BlogCardProps): JSX.Element {
  return (
    <div className={styles.container}>
      <span className={styles.date}>{date}</span>
      <h3>{title}</h3>
      <p>{lead}</p>
      <Link href="/">
        <a>Read</a>
      </Link>
    </div>
  );
}
