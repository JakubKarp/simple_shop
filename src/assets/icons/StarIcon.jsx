import React from 'react';
import SvgIcon from '../../app/shared/icon/SvgIcon';

const StarIcon = ({ ...props }) => (
  <SvgIcon width="18" height="18" viewBox="0 0 62 62" {...props}>
    <path
      style={
        props.rating
          ? { stroke: '#F9A52B', strokeWidth: '20%' }
          : { stroke: '#9194A5', strokeWidth: '20%' }
      }
      d="M12.81 6.62L20 7.24L14.55 11.97L16.18 19L10 15.27L3.82 19L5.46 11.97L0 7.24L7.19 6.63L10 0L12.81 6.62ZM6.24 15.67L10 13.4L13.77 15.68L12.77 11.4L16.09 8.52L11.71 8.14L10 4.1L8.3 8.13L3.92 8.51L7.24 11.39L6.24 15.67Z"
      transform="translate(20 20)"
    />
  </SvgIcon>
);

export default StarIcon;
