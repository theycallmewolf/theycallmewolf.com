import { ButtonHTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  genre?: 'outline' | 'fill';
  customClass?: string;
}

export function Button({
  children,
  customClass,
  genre = 'fill',
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <button
      className={`${styles.button} ${
        genre === 'outline' ? styles.outline : styles.fill
      } ${customClass}`}
      {...rest}>
      {children}
    </button>
  );
}
