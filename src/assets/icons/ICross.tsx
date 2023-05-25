import { SvgIcon } from "./types";

const SvgICross: React.FC<SvgIcon> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" {...props}>
    <path
      d="M10 12L.3 21.7M21.7.3L11.3 10.7m10.4 11L.3.3"
      strokeMiterlimit={10}
      strokeWidth={2}
    />
  </svg>
);

export default SvgICross;
