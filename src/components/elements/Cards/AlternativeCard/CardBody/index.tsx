import styles from './styles.module.scss';

interface CardBodyProps extends React.HTMLAttributes<HTMLElement> {
  customClass?: string;
}

export function CardBody({ customClass, children, ...rest }: CardBodyProps): JSX.Element {
  return (
    <div className={`${styles.cardBody} ${customClass ?? ''}`} {...rest}>
      {children}
    </div>
  );
}
