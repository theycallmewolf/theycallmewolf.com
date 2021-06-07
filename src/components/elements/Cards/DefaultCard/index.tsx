import { CardBody } from './CardBody';
import { CardContainer } from './CardContainer';
import { CardFooter } from './CardFooter';
import { CardHeader } from './CardHeader';

interface DefaultCardProps extends React.HTMLAttributes<HTMLElement> {
  adicionalClass?: string;
}

function DefaultCard({ adicionalClass = '', children, ...rest }: DefaultCardProps): JSX.Element {
  return (
    <CardContainer adicionalClass={adicionalClass} {...rest}>
      {children}
    </CardContainer>
  );
}

export { DefaultCard, CardHeader, CardBody, CardFooter };
