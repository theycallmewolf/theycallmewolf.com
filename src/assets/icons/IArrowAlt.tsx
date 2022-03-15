import { SvgIcon } from './types';

const SvgIArrowAlt: React.FC<SvgIcon> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" {...props}>
      <path d="M22 12L11 1 0 12m11-8v18" strokeMiterlimit={10} />
    </svg>
  );
};

export default SvgIArrowAlt;
