import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M95.0005 166.999C91.6868 166.999 89.0005 164.313 89.0005 160.999V39.9995C89.0005 36.6858 91.6868 33.9995 95.0005 33.9995C98.3142 33.9995 101.001 36.6858 101.001 39.9995V160.999C101.001 164.313 98.3142 166.999 95.0005 166.999Z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M58.7574 59.2726C56.4142 61.6158 56.4142 65.4148 58.7574 67.7579C61.1005 70.101 64.8995 70.101 67.2426 67.7579L96.0147 38.9858L124.272 67.2432C126.615 69.5863 130.414 69.5863 132.757 67.2432C135.101 64.9 135.101 61.101 132.757 58.7579L100.243 26.2432C97.8995 23.9 94.1005 23.9 91.7574 26.2432C91.6305 26.3701 91.5105 26.5012 91.3973 26.6362C91.3551 26.676 91.3134 26.7166 91.2721 26.7579L58.7574 59.2726Z'
    />
  </svg>
);