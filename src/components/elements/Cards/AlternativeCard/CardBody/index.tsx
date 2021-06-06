import styles from './styles.module.scss';

interface CardBodyProps {
  children: React.ReactNode;
  adicionalClass?: string;
}

export function CardBody({ children, adicionalClass }: CardBodyProps): JSX.Element {
  return <div className={`${styles.cardBody} ${adicionalClass && adicionalClass}`}>{children}</div>;
}
