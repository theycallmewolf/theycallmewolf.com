import styles from './styles.module.scss';

interface CardFooterProps extends React.HTMLAttributes<HTMLElement> {
  adicionalClass?: string;
}

export function CardFooter({
  adicionalClass = '',
  children,
  ...rest
}: CardFooterProps): JSX.Element {
  return (
    <div className={`${styles.cardFooter} ${adicionalClass}`} {...rest}>
      {children}
    </div>
  );
}
