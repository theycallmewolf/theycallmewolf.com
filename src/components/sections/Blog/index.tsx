import { Button } from '../../elements/Button';
import { CardBody, CardFooter, DefaultCard } from '../../elements/Cards/DefaultCard';
import { CustomLink } from '../../elements/Link';
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
        <DefaultCard key={post.slug} customClass={styles.cardContainer}>
          <CardBody>
            <span className={styles.date}>{post.updateDate}</span>
            <h3>{post.title}</h3>
            <p>{post.lead}</p>
          </CardBody>
          <CardFooter customClass={styles.cardFooter}>
            <CustomLink href={`/${post.slug}`} label="Read" />
          </CardFooter>
        </DefaultCard>
      ))}
    </section>
  );
}
