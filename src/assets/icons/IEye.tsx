import { COLORS } from 'theme/colors';

import { SvgIcon } from './types';

const SvgIImage: React.FC<SvgIcon> = (props) => (
  <svg
    width="22"
    height="23"
    viewBox="0 0 22 23"
    fill="none"
    stroke={COLORS.IRIDIUM_WHITE}
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M0.916668 11.25C0.916668 11.25 4.58333 3.91669 11 3.91669C17.4167 3.91669 21.0833 11.25 21.0833 11.25C21.0833 11.25 17.4167 18.5834 11 18.5834C4.58333 18.5834 0.916668 11.25 0.916668 11.25Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 14C12.5188 14 13.75 12.7688 13.75 11.25C13.75 9.73122 12.5188 8.5 11 8.5C9.48122 8.5 8.25 9.73122 8.25 11.25C8.25 12.7688 9.48122 14 11 14Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgIImage;
