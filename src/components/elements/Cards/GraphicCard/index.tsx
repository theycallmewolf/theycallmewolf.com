import React from 'react';

import { TangramCard } from '../../../../assets/tangrams';
import styles from './styles.module.scss';

type GraphicCardProps = {
  children: React.ReactNode;
  adicionalClass?: string;
};

export function GraphicCard({ children, adicionalClass }: GraphicCardProps): JSX.Element {
  return (
    <div className={`${styles.container} ${adicionalClass && adicionalClass}`}>
      <div className={styles.content}>{children}</div>
      <TangramCard />
    </div>
  );
}
