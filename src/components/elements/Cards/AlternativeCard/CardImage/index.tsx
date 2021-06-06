import styles from './styles.module.scss';

interface CardImageProps {
  children: React.ReactNode;
  adicionalClass?: string;
}

export function CardImage({ children, adicionalClass }: CardImageProps): JSX.Element {
  return (
    <div className={`${styles.cardImageContainer} ${adicionalClass && adicionalClass}`}>
      {children}
    </div>
  );
}
