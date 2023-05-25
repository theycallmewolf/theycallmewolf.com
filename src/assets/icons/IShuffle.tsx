import { COLORS } from "theme/colors";

import { SvgIcon } from "./types";

const SvgIShuffle: React.FC<SvgIcon> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 22"
    fill={COLORS.IRIDIUM_WHITE}
    {...props}
  >
    <path d="M5.7 16.5H0v.8h6.1l3.8-4.9-.5-.7-3.7 4.8zm13-9.3l.6.6L22 5.1l-2.8-2.6-.6.6 2.1 2-2 2.1zm.9 9.7l-.4-.4h-4.1L10.9 11l4.2-5.5h4.1l.4-.4-.5-.4h-4.5l-4.3 5.6-4.2-5.6H0v.8h5.7L9.9 11l2.5 3.3 2.3 3h4.4l.5-.4zm-.9-2.1l2.1 2.1-.5.4-.9.9-.7.7.6.6 2.7-2.6-2.7-2.7-.6.6z" />
  </svg>
);

export default SvgIShuffle;
