import { CardListProps } from 'types';

import styles from './styles.module.scss';

export function CardList({ children, slug }: CardListProps): JSX.Element {
  return (
    <section className={`${styles.cardList} ${slug === 'activity' ? styles.col2 : undefined}`}>
      {children}
    </section>
  );
}
