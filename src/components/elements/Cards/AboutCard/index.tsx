import React from 'react';

import { TangramCard } from '../../../../assets/tangrams';
import styles from './styles.module.scss';

type AboutCardProps = {
  children: React.ReactNode;
  adicionalClass?: string;
};

export function AboutCard({ children, adicionalClass }: AboutCardProps): JSX.Element {
  return (
    <div className={`${styles.container} ${adicionalClass && adicionalClass}`}>
      <div className={styles.content}>{children}</div>
      <TangramCard />
    </div>
  );
}
