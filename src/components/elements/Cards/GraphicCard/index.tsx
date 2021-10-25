import { TangramCard } from 'assets/tangrams';
import React from 'react';

import styles from './styles.module.scss';

interface GraphicCardProps extends React.HTMLAttributes<HTMLElement> {
  customClass?: string;
}

export function GraphicCard({ customClass, children, ...rest }: GraphicCardProps): JSX.Element {
  return (
    <div className={`${styles.container} ${customClass ?? ''}`} {...rest}>
      <div className={styles.content}>{children}</div>
      <TangramCard />
    </div>
  );
}
