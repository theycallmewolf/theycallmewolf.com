import { CardBody } from './CardBody';
import { CardContainer } from './CardContainer';
import { CardFooter } from './CardFooter';
import { CardHeader } from './CardHeader';

interface DefaultCardProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  imageFilter?: boolean;
}

const DefaultCard: React.FC<DefaultCardProps> = ({
  className = '',
  children,
  imageFilter = false,
  ...props
}) => {
  return (
    <CardContainer className={className} imageFilter={imageFilter} {...props}>
      {children}
    </CardContainer>
  );
};

export { DefaultCard, CardHeader, CardBody, CardFooter };
