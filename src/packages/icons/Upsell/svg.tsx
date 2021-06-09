import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.medium }) => (
  <svg width={width} viewBox='0 0 192 192' fill='#546E7A' xmlns='http://www.w3.org/2000/svg'>
    <path d='M25 30.4353C25 27.1216 27.6863 24.4353 31 24.4353H45C48.3137 24.4353 51 27.1216 51 30.4353C51 33.749 48.3137 36.4353 45 36.4353H31C27.6863 36.4353 25 33.749 25 30.4353Z' />
    <path d='M76 115.435C76 112.122 78.7677 109.435 82.1818 109.435H137.818C141.232 109.435 144 112.122 144 115.435C144 118.749 141.232 121.435 137.818 121.435H82.1818C78.7677 121.435 76 118.749 76 115.435Z' />
    <path d='M68 131.435C68 128.122 70.5584 125.435 73.7143 125.435H142.286C145.442 125.435 148 128.122 148 131.435C148 134.749 145.442 137.435 142.286 137.435H73.7143C70.5584 137.435 68 134.749 68 131.435Z' />
    <path d='M93 156.435C93 163.063 87.6274 168.435 81 168.435C74.3726 168.435 69 163.063 69 156.435C69 149.808 74.3726 144.435 81 144.435C87.6274 144.435 93 149.808 93 156.435Z' />
    <path d='M145 157.435C145 164.063 139.627 169.435 133 169.435C126.373 169.435 121 164.063 121 157.435C121 150.808 126.373 145.435 133 145.435C139.627 145.435 145 150.808 145 157.435Z' />
    <path d='M39.6768 33.3294C38.3371 30.3203 39.705 26.7882 42.7322 25.4404C45.7595 24.0926 49.2996 25.4394 50.6394 28.4486L87.6807 111.645C89.0205 114.654 87.6525 118.186 84.6253 119.534C81.5981 120.882 78.0579 119.535 76.7182 116.526L39.6768 33.3294Z' />
    <path d='M167.357 65.804C168.707 62.7732 167.347 59.2235 164.32 57.8757C161.292 56.5279 157.744 57.8923 156.395 60.9232L133.41 112.548C132.061 115.578 133.421 119.128 136.448 120.476C139.475 121.824 143.023 120.459 144.373 117.428L167.357 65.804Z' />
    <path d='M88.1505 114.549C89.1914 112.211 87.5811 109.223 84.5539 107.875C81.5267 106.528 78.2288 107.33 77.188 109.668L68.545 129.081C67.5041 131.418 69.1144 134.406 72.1416 135.754C75.1688 137.102 78.4667 136.299 79.5075 133.961L88.1505 114.549Z' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M85.4546 53.4606C83.1115 51.1175 83.1115 47.3185 85.4546 44.9753L104.376 26.0542C106.349 24.0813 109.354 23.7696 111.653 25.1192C112.218 25.4009 112.748 25.7773 113.22 26.2486L132.752 45.7811C135.095 48.1243 135.095 51.9233 132.752 54.2664C130.409 56.6096 126.61 56.6096 124.267 54.2664L115.001 45.0001V89.0001C115.001 92.3138 112.314 95.0001 109.001 95.0001C105.687 95.0001 103.001 92.3138 103.001 89.0001V44.3999L93.9399 53.4606C91.5968 55.8038 87.7978 55.8038 85.4546 53.4606Z'
    />
  </svg>
);