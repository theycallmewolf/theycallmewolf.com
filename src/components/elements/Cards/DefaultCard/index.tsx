import { CardBody } from './CardBody';
import { CardContainer } from './CardContainer';
import { CardFooter } from './CardFooter';
import { CardHeader } from './CardHeader';

interface DefaultCardProps extends React.HTMLAttributes<HTMLElement> {
  customClass?: string;
  imageFilter?: boolean;
}

function DefaultCard({
  customClass,
  children,
  imageFilter = false,
  ...rest
}: DefaultCardProps): JSX.Element {
  return (
    <CardContainer customClass={customClass ?? ''} imageFilter={imageFilter} {...rest}>
      {children}
    </CardContainer>
  );
}

export { DefaultCard, CardHeader, CardBody, CardFooter };
