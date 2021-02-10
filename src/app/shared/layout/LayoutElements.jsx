import React from 'react';
import { useMediaQuery } from 'react-responsive';
import MobileElements from './layout_elements/MobileElements';
import DesktopElements from './layout_elements/DesktopElements';

const LayoutElements = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 991px)' });

  return <>{isMobile ? <MobileElements /> : <DesktopElements />}</>;
};

export default LayoutElements;
