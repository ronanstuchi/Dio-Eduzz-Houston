import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.medium }) => (
  <svg width={width} viewBox='0 0 192 192' fill='#546E7A' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M59.2129 116C58.4211 109.608 58 102.906 58 96C58 89.094 58.4211 82.3924 59.2129 76H30.9888C29.0458 82.3234 28 89.0396 28 96C28 102.96 29.0458 109.677 30.9888 116H59.2129ZM61.2035 128H35.9848C43.9619 142.93 57.3468 154.534 73.5233 160.197C68.1796 151.926 63.9038 140.842 61.2035 128ZM73.4928 128H119.507C117.799 135.356 115.542 141.896 112.911 147.365C106.592 160.494 100.142 163.875 96.694 163.997C96.5931 163.998 96.4922 163.998 96.3912 163.999C92.9654 163.93 86.4601 160.603 80.0894 147.365C77.4576 141.896 75.2006 135.356 73.4928 128ZM121.688 116H71.3123C70.4644 109.704 70 102.998 70 96C70 89.0023 70.4644 82.2961 71.3123 76H121.688C122.536 82.2961 123 89.0023 123 96C123 102.998 122.536 109.704 121.688 116ZM131.796 128C129.147 140.6 124.981 151.508 119.778 159.727C135.37 153.907 148.253 142.527 156.015 128H131.796ZM161.011 116H133.787C134.579 109.608 135 102.906 135 96C135 89.094 134.579 82.3924 133.787 76H161.011C162.954 82.3234 164 89.0396 164 96C164 102.96 162.954 109.677 161.011 116ZM80.0894 44.6352C77.4576 50.1038 75.2006 56.644 73.4928 64H119.507C117.799 56.644 115.542 50.1038 112.911 44.6352C106.592 31.5063 100.142 28.1255 96.694 28.0035C96.5931 28.0025 96.4922 28.0017 96.3912 28.0011C92.9654 28.07 86.4601 31.3974 80.0894 44.6352ZM131.796 64H156.015C148.253 49.4725 135.37 38.0933 119.778 32.273C124.981 40.4921 129.147 51.4 131.796 64ZM35.9848 64H61.2035C63.9038 51.1581 68.1796 40.0739 73.5233 31.8025C57.3468 37.4658 43.9619 49.0705 35.9848 64ZM96.3376 175.999C96.3917 176 96.4458 176 96.5 176C96.6548 176 96.8094 175.998 96.9638 175.994C140.702 175.478 176 139.861 176 96C176 52.139 140.703 16.5221 96.9639 16.0057C96.8094 16.0019 96.6548 16 96.5 16C96.4458 16 96.3917 16.0002 96.3376 16.0007C96.2251 16.0002 96.1126 16 96 16C51.8172 16 16 51.8172 16 96C16 140.183 51.8172 176 96 176C96.1126 176 96.2251 176 96.3376 175.999Z'
    />
  </svg>
);