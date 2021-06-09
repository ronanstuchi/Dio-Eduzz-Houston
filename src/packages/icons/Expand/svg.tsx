import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.medium }) => (
  <svg width={width} viewBox='0 0 192 192' fill='#546E7A' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M155.937 43.3759L129.73 69.583C127.466 71.8471 123.795 71.8471 121.531 69.583C119.267 67.319 119.267 63.6482 121.531 61.3841L147.32 35.595L138.515 35.595C135.313 35.595 132.718 32.9994 132.718 29.7975C132.718 26.5956 135.313 24 138.515 24H161.705C163.314 24 164.769 24.655 165.819 25.7129C166.877 26.7632 167.532 28.2186 167.532 29.8271V53.0172C167.532 56.219 164.937 58.8147 161.735 58.8147C158.533 58.8147 155.937 56.219 155.937 53.0172V43.3759ZM36.0628 148.624L62.2699 122.417C64.534 120.153 68.2048 120.153 70.4688 122.417C72.7329 124.681 72.7329 128.352 70.4688 130.616L44.6797 156.405L53.4849 156.405C56.6868 156.405 59.2824 159.001 59.2824 162.202C59.2824 165.404 56.6868 168 53.4849 168H30.2949C28.6864 168 27.2309 167.345 26.1806 166.287C25.1228 165.237 24.4678 163.781 24.4678 162.173L24.4678 138.983C24.4678 135.781 27.0634 133.185 30.2653 133.185C33.4671 133.185 36.0628 135.781 36.0628 138.983L36.0628 148.624ZM122.417 129.73L148.624 155.937H138.983C135.781 155.937 133.185 158.533 133.185 161.735C133.185 164.937 135.781 167.532 138.983 167.532H162.173C163.781 167.532 165.237 166.877 166.287 165.819C167.345 164.769 168 163.314 168 161.705V138.515C168 135.313 165.404 132.718 162.202 132.718C159.001 132.718 156.405 135.313 156.405 138.515V147.32L130.616 121.531C128.352 119.267 124.681 119.267 122.417 121.531C120.153 123.795 120.153 127.466 122.417 129.73ZM43.3759 35.5952L69.583 61.8023C71.8471 64.0664 71.8471 67.7372 69.583 70.0013C67.319 72.2653 63.6482 72.2653 61.3841 70.0013L35.595 44.2122L35.595 53.0173C35.595 56.2192 32.9994 58.8149 29.7975 58.8149C26.5956 58.8149 24 56.2192 24 53.0173V29.8273C24 28.2188 24.655 26.7634 25.7129 25.7131C26.7632 24.6552 28.2186 24.0002 29.8271 24.0002L53.0172 24.0002C56.219 24.0002 58.8147 26.5958 58.8147 29.7977C58.8147 32.9996 56.219 35.5952 53.0172 35.5952L43.3759 35.5952Z'
    />
  </svg>
);