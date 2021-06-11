import styles from './styles.module.scss';

interface CardImageProps extends React.HTMLAttributes<HTMLElement> {
  customClass?: string;
}

export function CardImage({ customClass, children, ...rest }: CardImageProps): JSX.Element {
  return (
    <div className={`${styles.cardImageContainer} ${customClass ?? ''}`} {...rest}>
      {children}
    </div>
  );
}
