import React from 'react';
import LayoutElements from './LayoutElements';

const Layout = ({ children }) => (
  <>
    <LayoutElements />
    {children}
  </>
);

export default Layout;
