import styles from './styles.module.scss';

interface CardImageProps extends React.HTMLAttributes<HTMLElement> {
  adicionalClass?: string;
}

export function CardImage({ adicionalClass = '', children, ...rest }: CardImageProps): JSX.Element {
  return (
    <div className={`${styles.cardImageContainer} ${adicionalClass}`} {...rest}>
      {children}
    </div>
  );
}
