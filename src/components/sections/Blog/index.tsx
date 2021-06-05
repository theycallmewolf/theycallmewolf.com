import { Button } from '../../elements/Button';
import { BlogCard } from '../../elements/Cards/BlogCard';
import styles from './styles.module.scss';

type Post = {
  title: string;
  lead: string;
  slug: string;
  updateDate: string;
};

interface BlogProps {
  posts: Post[];
}

export function Blog({ posts }: BlogProps): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.intro}>
        <div>
          <h2>Wolf Bytes</h2>
          <p>
            <small>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
              nec elit.
            </small>
          </p>
        </div>
        <div>
          <Button genre="outline">More Bytes</Button>
        </div>
      </div>
      {posts.map((post) => (
        <BlogCard
          key={post.slug}
          title={post.title}
          lead={post.lead}
          date={post.updateDate}
          slug={post.slug}
        />
      ))}
    </section>
  );
}
