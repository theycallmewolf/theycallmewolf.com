type SvgIPlusProps = React.HTMLAttributes<HTMLOrSVGElement>;

function SvgIPlus({ ...rest }: SvgIPlusProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" {...rest}>
      <path d="M9.6 11H0m22 0H11.4M11 22V0" />
    </svg>
  );
}

export default SvgIPlus;
