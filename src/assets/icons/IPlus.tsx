import { COLORS } from 'theme/colors';

import { SvgIcon } from './types';

const SvgIPlus: React.FC<SvgIcon> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 22"
    stroke={COLORS.IRIDIUM_WHITE}
    {...props}>
    <path d="M9.6 11H0m22 0H11.4M11 22V0" />
  </svg>
);

export default SvgIPlus;
