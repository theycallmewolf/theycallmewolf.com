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

  return (
    <button
      className={
        styles.button +
        ' ' +
        (genre === 'outline' ? styles.outline : styles.fill) +
        ' ' +
        (hasDarkMode ? styles.dark : styles.light) +
        ' ' +
        className
      }
      {...props}>
      {children}
    </button>
  );
};
