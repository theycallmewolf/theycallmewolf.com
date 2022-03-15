import { CardListProps } from 'types';

import styles from './styles.module.scss';

export const CardList: React.FC<CardListProps> = ({ children, slug }) => (
  <section className={`${styles.cardList} ${slug === 'activity' ? styles.col2 : ''}`}>
    {children}
  </section>
);
