import { BlogProps } from 'types';

import { Button } from '../../../elements/Button';
import { Card, CardBody, CardFooter } from '../../../elements/Cards/Card';
import { CustomLink } from '../../../elements/Link';
import styles from './blog.module.scss';

export const Blog: React.FC<BlogProps> = ({ posts }) => (
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
      <Card key={post.id} className={styles.cardContainer}>
        <CardBody>
          <span className={styles.date}>{post.update_date}</span>
          <h3>{post.title}</h3>
          <p>{post.lead}</p>
        </CardBody>
        <CardFooter className={styles.cardFooter}>
          <CustomLink href={`/${post.slug}`} label="Read" />
        </CardFooter>
      </Card>
    ))}
  </section>
);
