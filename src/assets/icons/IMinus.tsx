import { COLORS } from "theme";

import { SvgIcon } from "./types";

const SvgIMinus: React.FC<SvgIcon> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 22"
    stroke={COLORS.IRIDIUM_WHITE}
    {...props}
  >
    <path d="M22 11H0" />
  </svg>
);

export default SvgIMinus;
