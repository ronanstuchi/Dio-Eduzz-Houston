import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M21.0733 157.851C18.7047 157.048 17 154.807 17 152.167V69.167C17 65.8533 19.6863 63.167 23 63.167C26.3137 63.167 29 65.8533 29 69.167V146.611H106.998C110.312 146.611 112.998 149.297 112.998 152.611C112.998 155.925 110.312 158.611 106.998 158.611H23.998C22.9361 158.611 21.9386 158.335 21.0733 157.851Z'
    />
    <path d='M38.959 39.2083C38.959 35.7796 41.7385 33 45.1673 33H169.334C172.763 33 175.542 35.7796 175.542 39.2083V54.7292H38.959V39.2083Z' />
    <path d='M38.959 74.1304H175.542V126.125C175.542 129.554 172.763 132.333 169.334 132.333H45.1673C41.7386 132.333 38.959 129.554 38.959 126.125V74.1304Z' />
  </svg>
);