import { COLORS } from 'theme';

import { SvgIcon } from './types';

const SvgIImageOff: React.FC<SvgIcon> = (props) => (
  <svg
    width="22"
    height="23"
    viewBox="0 0 22 23"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}>
    <g clipPath="url(#clip0_244_1576)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.67326 3.09341C2.51208 3.27976 1.625 4.28629 1.625 5.5V16.5C1.625 17.8462 2.71631 18.9375 4.0625 18.9375H17.8125C18.2981 18.9375 18.7506 18.7955 19.1306 18.5507L18.5821 18.0022C18.3513 18.1207 18.0897 18.1875 17.8125 18.1875H4.0625C3.13052 18.1875 2.375 17.432 2.375 16.5V5.5C2.375 4.56802 3.13052 3.8125 4.0625 3.8125H4.39235L3.67326 3.09341ZM19.2971 17.303C19.4265 17.0642 19.5 16.7907 19.5 16.5V5.5C19.5 4.56802 18.7445 3.8125 17.8125 3.8125H5.80656L5.05656 3.0625H17.8125C19.1587 3.0625 20.25 4.15381 20.25 5.5V16.5C20.25 16.9988 20.1002 17.4627 19.843 17.849L19.2971 17.303Z"
        fill={COLORS.IRIDIUM_WHITE}
      />
      <path
        d="M14.4375 8.9375C15.1969 8.9375 15.8125 8.32189 15.8125 7.5625C15.8125 6.80311 15.1969 6.1875 14.4375 6.1875C13.6781 6.1875 13.0625 6.80311 13.0625 7.5625C13.0625 8.32189 13.6781 8.9375 14.4375 8.9375Z"
        strokeWidth="0.75"
        strokeMiterlimit="10"
        stroke={COLORS.IRIDIUM_WHITE}
      />
      <path
        d="M13.0625 14.4285L9.16695 10.5403C8.91907 10.2924 8.58589 10.1486 8.23552 10.1382C7.88515 10.1279 7.54404 10.2517 7.28191 10.4844L2.0625 15.125M9.625 18.5625L14.1688 13.9867M15.1156 13.1768C15.358 12.934 15.4915 12.8764 15.8343 12.8605C16.177 12.8446 16.5133 12.9574 16.7771 13.1768L19.9375 15.8125"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={COLORS.IRIDIUM_WHITE}
      />
      <path d="M1 1L21 21" stroke={COLORS.IRIDIUM_WHITE} strokeLinecap="round" />
    </g>
    <defs>
      <clipPath id="clip0_244_1576">
        <rect width="22" height="22" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgIImageOff;
