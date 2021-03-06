import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M133.106 91.2059C133.134 91.2328 133.162 91.2601 133.19 91.2877C135.533 93.6308 135.533 97.4298 133.19 99.773L66.7201 166.243C64.3769 168.586 60.5779 168.586 58.2348 166.243C55.8916 163.899 55.8916 160.101 58.2348 157.757L120.481 95.5112L57.7574 32.7875C55.4142 30.4444 55.4142 26.6454 57.7574 24.3023C60.1005 21.9591 63.8995 21.9591 66.2426 24.3023L132.712 90.7719C132.852 90.9116 132.983 91.0565 133.106 91.2059Z'
    />
  </svg>
);
