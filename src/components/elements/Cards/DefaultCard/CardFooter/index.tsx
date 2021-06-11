import styles from './styles.module.scss';

interface CardFooterProps extends React.HTMLAttributes<HTMLElement> {
  customClass?: string;
}

export function CardFooter({ customClass, children, ...rest }: CardFooterProps): JSX.Element {
  return (
    <div className={`${styles.cardFooter} ${customClass ?? ''}`} {...rest}>
      {children}
    </div>
  );
}
