import { Button } from '../../Button';
import { BlogCard } from '../../Cards/BlogCard';
import styles from './styles.module.scss';

type Post = {
  id: number;
  title: string;
  lead: string;
  slug: string;
};

interface BlogProps {
  posts: Post[];
}

export const Blog: React.FC<BlogProps> = ({ posts }) => {
  return (
    <section className={styles.section}>
      <div className={styles.intro}>
        <h2>Wolf Bytes</h2>
        <small>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
          elit.
        </small>
        <Button genre="outline">More Bytes</Button>
      </div>
      {posts.map((post) => (
        <BlogCard key={post.id} title={post.title} lead={post.lead} />
      ))}
    </section>
  );
};
