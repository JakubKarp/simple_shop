import React from 'react';

const SvgIcon = ({ children, className, ...props }) => (
  <svg className={className} {...props}>
    {children}
  </svg>
);

export default SvgIcon;
