type SvgICrossData = React.HTMLAttributes<HTMLOrSVGElement>;

function SvgIChat({ ...rest }: SvgICrossData): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" {...rest}>
      <path d="M5 6.8h11m-11 4h8m-7.5 9.4l5.4-4.4h10.6v-14H.5v14h5v4.4z" strokeMiterlimit={10} />
    </svg>
  );
}

export default SvgIChat;
