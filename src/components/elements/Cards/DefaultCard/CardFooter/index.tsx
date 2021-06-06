import styles from './styles.module.scss';

interface CardFooterProps {
  children: React.ReactNode;
  adicionalClass?: string;
}

export function CardFooter({ children, adicionalClass }: CardFooterProps): JSX.Element {
  return (
    <div className={`${styles.cardFooter} ${adicionalClass && adicionalClass}`}>{children}</div>
  );
}
