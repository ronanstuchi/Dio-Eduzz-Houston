import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M99.7941 134.106C99.7672 134.134 99.7399 134.162 99.7123 134.19C97.3692 136.533 93.5702 136.533 91.227 134.19L24.7574 67.7201C22.4142 65.3769 22.4142 61.5779 24.7574 59.2348C27.1005 56.8916 30.8995 56.8916 33.2426 59.2348L95.4888 121.481L158.212 58.7574C160.556 56.4142 164.355 56.4142 166.698 58.7574C169.041 61.1005 169.041 64.8995 166.698 67.2426L100.228 133.712C100.088 133.852 99.9435 133.983 99.7941 134.106Z'
    />
  </svg>
);
