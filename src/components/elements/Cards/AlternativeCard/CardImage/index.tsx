import React from 'react';

import styles from './styles.module.scss';

interface CardImageProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

export const CardImage: React.FC<CardImageProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={`${styles.cardImageContainer} ${className}`} {...props}>
      {children}
    </div>
  );
};
