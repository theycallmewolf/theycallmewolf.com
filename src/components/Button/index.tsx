import { ButtonHTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  genre: 'outline' | 'fill';
}

export const Button: React.FC<ButtonProps> = ({ children, type, genre, ...rest }) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${genre === 'outline' ? styles.outline : styles.fill}`}
      {...rest}>
      {children}
    </button>
  );
};
