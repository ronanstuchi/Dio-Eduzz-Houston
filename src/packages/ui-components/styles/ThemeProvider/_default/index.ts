/* eslint-disable @typescript-eslint/naming-convention */
import createPalette from '@material-ui/core/styles/createPalette';
import createTheme from '@material-ui/core/styles/createTheme';

import { IHoustonPalette } from '..';
import { IHoustonCustomVariables, IHoustonTheme } from '../../useHoustonTheme';
import overrides from './overrides';
import props from './props';
import typography from './typography';
import defaultThemeVariables from './variables';

declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    houston?: IHoustonTheme;
    variables?: IHoustonCustomVariables;
  }

  interface ThemeOptions {
    houston?: IHoustonTheme;
    variables?: IHoustonCustomVariables;
  }
}

export default function generateTheme(customPalette?: IHoustonPalette) {
  const variables = customPalette?.variables;
  delete customPalette?.variables;

  const palette = createPalette({ ...defaultThemeVariables.colors, ...customPalette });

  return createTheme({
    palette,
    overrides: overrides(palette),
    props,
    houston: {
      ...defaultThemeVariables,
      colors: palette
    },
    variables,
    typography,
    spacing: (factor: number) => {
      return defaultThemeVariables.spacing(factor);
    }
  });
}
