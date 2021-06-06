import { CardBody } from './CardBody';
import { CardContainer } from './CardContainer';
import { CardFooter } from './CardFooter';
import { CardHeader } from './CardHeader';

type DefaultCardProps = {
  children: React.ReactNode;
  adicionalClass?: string;
};

function DefaultCard({ children, adicionalClass }: DefaultCardProps): JSX.Element {
  return (
    <CardContainer adicionalClass={adicionalClass && adicionalClass}>{children}</CardContainer>
  );
}

export { DefaultCard, CardHeader, CardBody, CardFooter };
