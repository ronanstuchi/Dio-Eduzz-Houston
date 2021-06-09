import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.medium }) => (
  <svg width={width} viewBox='0 0 192 192' fill='#546E7A' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M95.5305 41.5C132.737 41.5 164.318 64.3231 175.531 96C164.318 127.677 132.737 150.5 95.5305 150.5C58.3237 150.5 26.7428 127.677 15.5305 96C26.7428 64.3231 58.3237 41.5 95.5305 41.5ZM115.531 94.5C115.531 105.546 106.576 114.5 95.5305 114.5C84.4848 114.5 75.5305 105.546 75.5305 94.5C75.5305 83.4543 84.4848 74.5 95.5305 74.5C106.576 74.5 115.531 83.4543 115.531 94.5ZM127.531 94.5C127.531 112.173 113.204 126.5 95.5305 126.5C77.8574 126.5 63.5305 112.173 63.5305 94.5C63.5305 76.8269 77.8574 62.5 95.5305 62.5C113.204 62.5 127.531 76.8269 127.531 94.5Z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.0591 95.8332C26.3445 63.9495 58.1194 41 95.5304 41C132.941 41 164.716 63.9495 176.002 95.8332L176.061 96L176.002 96.1668C164.716 128.051 132.941 151 95.5304 151C58.1194 151 26.3445 128.051 15.0591 96.1668L15 96L15.0591 95.8332ZM16.061 96C27.2518 127.383 58.5932 150 95.5304 150C132.468 150 163.809 127.383 175 96C163.809 64.6165 132.468 42 95.5304 42C58.5932 42 27.2518 64.6165 16.061 96ZM63.0304 94.5C63.0304 76.5507 77.5811 62 95.5304 62C113.48 62 128.03 76.5507 128.03 94.5C128.03 112.449 113.48 127 95.5304 127C77.5811 127 63.0304 112.449 63.0304 94.5ZM95.5304 63C78.1334 63 64.0304 77.103 64.0304 94.5C64.0304 111.897 78.1334 126 95.5304 126C112.927 126 127.03 111.897 127.03 94.5C127.03 77.103 112.927 63 95.5304 63ZM75.0304 94.5C75.0304 83.1782 84.2086 74 95.5304 74C106.852 74 116.03 83.1782 116.03 94.5C116.03 105.822 106.852 115 95.5304 115C84.2086 115 75.0304 105.822 75.0304 94.5ZM95.5304 75C84.7608 75 76.0304 83.7304 76.0304 94.5C76.0304 105.27 84.7608 114 95.5304 114C106.3 114 115.03 105.27 115.03 94.5C115.03 83.7304 106.3 75 95.5304 75Z'
    />
  </svg>
);