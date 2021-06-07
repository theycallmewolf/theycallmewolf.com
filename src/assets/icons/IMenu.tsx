import React from 'react';

type SvgIMenuData = React.HTMLAttributes<HTMLOrSVGElement>;

function SvgIMenu({ ...rest }: SvgIMenuData): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" {...rest}>
      <path d="M0 11.5h22M0 .5h10.6m0 21H22" strokeMiterlimit={10} strokeWidth={2} />
    </svg>
  );
}

export default SvgIMenu;
