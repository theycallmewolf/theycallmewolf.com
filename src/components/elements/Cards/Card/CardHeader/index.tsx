import styles from "./card-header.module.scss";

interface CardHeaderProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}
export const CardHeader: React.FC<CardHeaderProps> = ({
  className = "",
  children,
  ...props
}) => (
  <div className={`${styles.cardHeader} ${className}`} {...props}>
    {children}
  </div>
);
