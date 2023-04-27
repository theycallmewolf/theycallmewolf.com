import styles from './card-body.module.scss';

interface CardBodyProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}
export const CardBody: React.FC<CardBodyProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={`${styles.cardBody} ${className}`} {...props}>
      {children}
    </div>
  );
};
