import { SvgIcon } from './types';

function SvgILoading(props: SvgIcon): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" {...props}>
      <path d="M11 6V0m0 22v-5.9m5.1-5.1H22M0 11h6m8.6 3.6l4.2 4.2M3.2 3.2l4.2 4.2m0 7.2l-4.2 4.2M18.8 3.2l-4.2 4.2" />
    </svg>
  );
}

export default SvgILoading;
