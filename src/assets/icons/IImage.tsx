import { COLORS } from 'theme';

import { SvgIcon } from './types';

const SvgIImage: React.FC<SvgIcon> = (props) => (
  <svg
    width="22"
    height="23"
    viewBox="0 0 22 23"
    xmlns="http://www.w3.org/2000/svg"
    stroke={COLORS.IRIDIUM_WHITE}
    fill="none"
    {...props}>
    <path
      d="M17.875 3.77087H4.125C2.98591 3.77087 2.0625 4.69429 2.0625 5.83337V16.8334C2.0625 17.9725 2.98591 18.8959 4.125 18.8959H17.875C19.0141 18.8959 19.9375 17.9725 19.9375 16.8334V5.83337C19.9375 4.69429 19.0141 3.77087 17.875 3.77087Z"
      strokeWidth="0.75"
      strokeLinejoin="round"
    />
    <path
      d="M14.4375 9.27087C15.1969 9.27087 15.8125 8.65527 15.8125 7.89587C15.8125 7.13648 15.1969 6.52087 14.4375 6.52087C13.6781 6.52087 13.0625 7.13648 13.0625 7.89587C13.0625 8.65527 13.6781 9.27087 14.4375 9.27087Z"
      strokeWidth="0.75"
      strokeMiterlimit="10"
    />
    <path
      d="M13.0625 14.7619L9.16695 10.8736C8.91907 10.6258 8.58589 10.482 8.23552 10.4716C7.88515 10.4612 7.54404 10.5851 7.28191 10.8178L2.0625 15.4584M9.625 18.8959L14.9248 13.5961C15.1671 13.3533 15.4915 13.2098 15.8343 13.1939C16.177 13.178 16.5133 13.2908 16.7771 13.5102L19.9375 16.1459"
      strokeWidth="0.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgIImage;