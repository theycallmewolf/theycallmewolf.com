type SvgICrossData = React.HTMLAttributes<HTMLOrSVGElement>;

function SvgICross({ ...rest }: SvgICrossData): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" {...rest}>
      <path
        d="M10 12L.3 21.7M21.7.3L11.3 10.7m10.4 11L.3.3"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
    </svg>
  );
}

export default SvgICross;
