import React from 'react';

import { CardBody } from './CardBody';
import { CardImage } from './CardImage';
import styles from './styles.module.scss';

interface AlternativeCardProps {
  children: React.ReactNode;
  adicionalClass?: string;
}
function AlternativeCard({ children, adicionalClass }: AlternativeCardProps): JSX.Element {
  return <div className={`${styles.container} ${adicionalClass}`}>{children}</div>;
}

export { AlternativeCard, CardBody, CardImage };
