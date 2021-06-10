type SvgIMinusProps = React.HTMLAttributes<HTMLOrSVGElement>;

function SvgIMinus({ ...rest }: SvgIMinusProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" {...rest}>
      <path strokeMiterlimit={10} d="M22 11H0" />
    </svg>
  );
}

export default SvgIMinus;
