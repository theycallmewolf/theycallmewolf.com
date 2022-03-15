import { useTheme } from 'hooks/useTheme';
import { ButtonHTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  genre?: 'outline' | 'fill';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  genre = 'fill',
  ...props
}) => {
  const { hasDarkMode } = useTheme();

  const themeClassName = hasDarkMode ? styles.dark : styles.light;
  const genreClassName = genre === 'outline' ? styles.outline : styles.fill;
  return (
    <button
      className={`${styles.button} ${genreClassName} ${themeClassName} ${className}`}
      {...props}>
      {children}
    </button>
  );
};
