import { ButtonHTMLAttributes } from 'react';

import { useTheme } from '../../../hooks/useTheme';
import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  genre?: 'outline' | 'fill';
  customClass?: string;
}

export function Button({
  children,
  customClass = '',
  genre = 'fill',
  ...rest
}: ButtonProps): JSX.Element {
  const { hasDarkMode } = useTheme();

  return (
    <button
      className={
        styles.button +
        ' ' +
        (genre === 'outline' ? styles.outline : styles.fill) +
        ' ' +
        (hasDarkMode ? styles.dark : styles.light) +
        ' ' +
        customClass
      }
      {...rest}>
      {children}
    </button>
  );
}
