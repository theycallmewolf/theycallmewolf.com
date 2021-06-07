import styles from './styles.module.scss';

interface CardBodyProps extends React.HTMLAttributes<HTMLElement> {
  adicionalClass?: string;
}
export function CardBody({ adicionalClass = '', children, ...rest }: CardBodyProps): JSX.Element {
  return (
    <div className={`${styles.cardBody} ${adicionalClass}`} {...rest}>
      {children}
    </div>
  );
}
