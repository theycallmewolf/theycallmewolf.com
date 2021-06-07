import React from 'react';

import { TangramCard } from '../../../../assets/tangrams';
import styles from './styles.module.scss';

interface GraphicCardProps extends React.HTMLAttributes<HTMLElement> {
  adicionalClass?: string;
}

export function GraphicCard({
  adicionalClass = '',
  children,
  ...rest
}: GraphicCardProps): JSX.Element {
  return (
    <div className={`${styles.container} ${adicionalClass}`} {...rest}>
      <div className={styles.content}>{children}</div>
      <TangramCard />
    </div>
  );
}
