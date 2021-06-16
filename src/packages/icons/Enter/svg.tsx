import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M33 95.0001C33 91.6864 34.8582 89.0001 37.1504 89.0001H120.85C123.142 89.0001 125 91.6864 125 95.0001C125 98.3138 123.142 101 120.85 101H37.1504C34.8582 101 33 98.3138 33 95.0001Z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M99.727 58.7574C97.3839 56.4143 93.5849 56.4143 91.2417 58.7574C88.8986 61.1006 88.8986 64.8996 91.2417 67.2427L120.014 96.0148L91.7565 124.272C89.4133 126.615 89.4133 130.414 91.7565 132.757C94.0996 135.101 97.8986 135.101 100.242 132.757L132.756 100.243C135.1 97.8996 135.1 94.1006 132.756 91.7574C132.63 91.6305 132.498 91.5105 132.363 91.3974C132.324 91.3552 132.283 91.3134 132.242 91.2721L99.727 58.7574Z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M153 175.001C149.686 175.001 147 172.315 147 169.001L146.989 23.0009C146.989 19.6872 149.675 17.0007 152.988 17.0004C156.302 17.0002 158.989 19.6863 158.989 23L159 169C159 172.314 156.314 175 153 175.001Z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M68 23.0001C68 19.6864 70.6863 17.0001 74 17.0001L153 17.0001C156.314 17.0001 159 19.6864 159 23.0001C159 26.3138 156.314 29.0001 153 29.0001L74 29.0001C70.6863 29.0001 68 26.3138 68 23.0001Z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M68 169C68 165.686 70.6863 163 74 163L153 163C156.314 163 159 165.686 159 169C159 172.314 156.314 175 153 175H74C70.6863 175 68 172.314 68 169Z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M74 20.0001C77.3137 20.0001 80 22.6864 80 26.0001V39.0001C80 42.3138 77.3137 45.0001 74 45.0001C70.6863 45.0001 68 42.3138 68 39.0001V26.0001C68 22.6864 70.6863 20.0001 74 20.0001Z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M74 150C77.3137 150 80 152.686 80 156V169C80 172.314 77.3137 175 74 175C70.6863 175 68 172.314 68 169V156C68 152.686 70.6863 150 74 150Z'
    />
  </svg>
);