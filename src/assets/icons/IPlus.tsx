import { SvgIcon } from './types';

function SvgIPlus(props: SvgIcon): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" {...props}>
      <path d="M9.6 11H0m22 0H11.4M11 22V0" />
    </svg>
  );
}

export default SvgIPlus;
