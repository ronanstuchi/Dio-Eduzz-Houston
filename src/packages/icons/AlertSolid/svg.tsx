import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.medium }) => (
  <svg width={width} viewBox='0 0 192 192' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M96.2246 37.7449L158.578 157.745H33.8708L96.2246 37.7449Z' fill='#546E7A' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M95.7249 39.0909L37.3466 155.038H154.103L95.7249 39.0909ZM104.549 29.6074C100.785 22.1309 90.6651 22.1309 86.9008 29.6073L25.1897 152.174C21.6382 159.227 26.4652 167.745 34.0138 167.745H157.436C164.985 167.745 169.812 159.227 166.26 152.174L104.549 29.6074Z'
      fill='#546E7A'
    />
    <path
      d='M100.085 119.437C100.001 120.902 98.6067 122.051 96.916 122.051H94.5751C92.8856 122.051 91.4923 120.903 91.4058 119.44L89.2289 82.6373C89.1358 81.0644 90.5816 79.7449 92.3981 79.7449H99.0511C100.866 79.7449 102.312 81.0627 102.221 82.6346L100.085 119.437Z'
      fill='white'
    />
    <path
      d='M102.225 131.604C102.225 134.995 99.3145 137.745 95.7246 137.745C92.1348 137.745 89.2246 134.995 89.2246 131.604C89.2246 128.212 92.1348 125.463 95.7246 125.463C99.3145 125.463 102.225 128.212 102.225 131.604Z'
      fill='white'
    />
  </svg>
);