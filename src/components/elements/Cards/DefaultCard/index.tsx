import { CardBody } from './CardBody';
import { CardContainer } from './CardContainer';
import { CardFooter } from './CardFooter';
import { CardHeader } from './CardHeader';

interface DefaultCardProps extends React.HTMLAttributes<HTMLElement> {
  adicionalClass?: string;
  imageFilter?: boolean;
}

function DefaultCard({
  adicionalClass = '',
  children,
  imageFilter = false,
  ...rest
}: DefaultCardProps): JSX.Element {
  return (
    <CardContainer adicionalClass={adicionalClass} imageFilter={imageFilter} {...rest}>
      {children}
    </CardContainer>
  );
}

export { DefaultCard, CardHeader, CardBody, CardFooter };
