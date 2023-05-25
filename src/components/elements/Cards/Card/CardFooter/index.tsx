import styles from "./card-footer.module.scss";

interface CardFooterProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <div className={`${styles.cardFooter} ${className}`} {...props}>
      {children}
    </div>
  );
};
