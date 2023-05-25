import { COLORS } from "theme/colors";

import { SvgIcon } from "./types";

const SvgIEyeOff: React.FC<SvgIcon> = (props) => (
  <svg
    width="22"
    height="23"
    viewBox="0 0 22 23"
    fill="none"
    stroke={COLORS.IRIDIUM_WHITE}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_202_757)">
      <path
        d="M16.445 16.445C14.878 17.6394 12.97 18.3011 11 18.3333C4.58333 18.3333 0.916667 11 0.916667 11C2.0569 8.87505 3.63837 7.01854 5.555 5.55498M9.075 3.88665C9.70597 3.73896 10.352 3.66513 11 3.66665C17.4167 3.66665 21.0833 11 21.0833 11C20.5269 12.041 19.8633 13.021 19.1033 13.9241M12.9433 12.9433C12.6916 13.2135 12.388 13.4302 12.0506 13.5805C11.7133 13.7308 11.3492 13.8116 10.9799 13.8182C10.6107 13.8247 10.2439 13.7567 9.90148 13.6184C9.55905 13.4801 9.24799 13.2743 8.98686 13.0131C8.72572 12.752 8.51986 12.4409 8.38155 12.0985C8.24324 11.7561 8.17532 11.3893 8.18183 11.0201C8.18835 10.6508 8.26917 10.2867 8.41947 9.94934C8.56977 9.61201 8.78648 9.30841 9.05667 9.05665"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.916667 0.916687L21.0833 21.0834"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_202_757">
        <rect width="22" height="22" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgIEyeOff;
