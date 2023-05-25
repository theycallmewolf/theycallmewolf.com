import { CardBody } from "./CardBody";
import { CardContainer } from "./CardContainer";
import { CardFooter } from "./CardFooter";
import { CardHeader } from "./CardHeader";

interface CardProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  imageFilter?: boolean;
}

const Card: React.FC<CardProps> = ({
  className = "",
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

export { Card, CardHeader, CardBody, CardFooter };
