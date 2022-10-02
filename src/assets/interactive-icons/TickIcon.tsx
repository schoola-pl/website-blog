import React, { forwardRef, SVGProps } from 'react';

export const TickIcon = forwardRef((props: SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" ref={svgRef} {...props} height="48" width="48">
    <path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" />
  </svg>
));

export default TickIcon;
