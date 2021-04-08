/* eslint-disable max-lines */
import { StyleRules } from '@material-ui/core/styles';
import { Palette } from '@material-ui/core/styles/createPalette';
import { Overrides } from '@material-ui/core/styles/overrides';
import { LabComponentNameToClassKey } from '@material-ui/lab/themeAugmentation';

import palette from './palette';
import themeVariable from './variables';

export type LabOverrides = {
  [Name in keyof LabComponentNameToClassKey]?: Partial<StyleRules<LabComponentNameToClassKey[Name]>>;
};

interface ICustomOverrides extends Partial<Overrides>, Partial<LabOverrides> {
  MuiTabScrollButton: any;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function overrides(pallet: Palette): ICustomOverrides {
  return {
    MuiButton: {
      root: {
        textTransform: 'none',
        padding: '10px 16px',
        height: 40,
        borderRadius: themeVariable.radius(),
        fontWeight: themeVariable.fontWeight('semibold'),

        '&:before': {
          content: '" "',
          position: 'absolute',
          left: -4,
          right: -4,
          top: -4,
          bottom: -4,
          border: '2px solid transparent',
          transition: '0.3s',
          borderRadius: themeVariable.radius(2)
        },

        '&:focus:not(:active):not(:hover):before': {
          borderColor: themeVariable.colors.focusLine
        }
      },

      label: {
        fontFamily: themeVariable.fontFamily,
        lineHeight: themeVariable.lineHeight('compact'),
        fontSize: themeVariable.textSize('small')
      },

      sizeSmall: {
        height: 30
      },

      sizeLarge: {
        height: 50
      },

      startIcon: {
        marginRight: 8
      },

      containedPrimary: {
        '&:hover': {
          backgroundColor: pallet.primary.light
        },
        '&:active': {
          backgroundColor: pallet.primary.dark
        },
        '&$disabled': {
          color: pallet.grey[500],
          backgroundColor: pallet.grey[300]
        }
      },

      outlinedPrimary: {
        borderColor: pallet.primary.lighter,
        '&:before': {
          left: -5,
          right: -5,
          top: -5,
          bottom: -5
        },
        '&:hover': {
          backgroundColor: 'transparent'
        },
        '&:active': {
          borderColor: pallet.primary.dark,
          color: pallet.primary.dark
        },
        '&$disabled': {
          color: pallet.grey[300],
          borderColor: pallet.grey[300]
        }
      },

      text: {
        '&$disabled': {
          color: pallet.grey[300]
        }
      }
    },

    MuiInputBase: {
      root: {
        fontFamily: themeVariable.fontFamily,

        '&$disabled': {
          backgroundColor: pallet.grey['100']
        }
      }
    },

    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: 'transparent'
        }
      },

      selectMenu: {
        height: 45
      },

      iconOutlined: {
        right: 4
      },

      icon: {
        top: 'calc(50% - 14px)'
      }
    },

    MuiOutlinedInput: {
      input: {
        height: 45,
        boxSizing: 'border-box',
        fontSize: themeVariable.textSize(),
        padding: `${themeVariable.spacing(3)}px ${themeVariable.spacing(4)}px`
      },
      inputMultiline: {
        minHeight: 96
      }
    },

    MuiFormHelperText: {
      root: {
        fontFamily: themeVariable.fontFamily,
        fontSize: themeVariable.textSize('x-small')
      },
      contained: {
        marginLeft: 2,
        marginRight: 0
      }
    },

    MuiFormControlLabel: {
      root: {
        color: themeVariable.palette.grey[500],
        fontFamily: themeVariable.fontFamily
      }
    },

    MuiFormControl: {
      marginNormal: {
        marginTop: themeVariable.spacing(1),
        marginBottom: themeVariable.spacing(3)
      }
    },

    MuiFormLabel: {
      root: {
        color: themeVariable.palette.grey[500],
        fontFamily: themeVariable.fontFamily
      }
    },

    MuiInputLabel: {
      root: {
        fontFamily: themeVariable.fontFamily,
        fontSize: themeVariable.textSize() + 1
      },
      outlined: {
        transform: `translate(${themeVariable.spacing(4)}px, ${themeVariable.spacing(4) - 2}px) scale(1)`
      },
      shrink: {
        transform: `translate(${themeVariable.spacing(4)}px, -6px) scale(0.70) !important`
      }
    },

    MuiAlertTitle: {
      root: {
        fontWeight: themeVariable.fontWeight('semibold')
      }
    },

    MuiAlert: {
      root: {
        borderRadius: 4
      },

      icon: {
        alignItems: 'center'
      },

      action: {
        marginRight: 0
      },

      message: {
        fontWeight: themeVariable.fontWeight('regular')
      },

      standardSuccess: {
        backgroundColor: themeVariable.palette.success['light']
      },

      standardError: {
        backgroundColor: themeVariable.palette.error['light']
      },

      standardInfo: {
        backgroundColor: themeVariable.palette.info['light']
      },

      standardWarning: {
        backgroundColor: themeVariable.palette.warning['light']
      }
    },

    MuiTableRow: {
      root: {
        '&$selected': {
          background: 'rgba(177, 177, 177, 0.08)'
        },

        '&$hover': {
          '&:hover': {
            background: themeVariable.palette.grey[100]
          }
        }
      }
    },

    MuiTableCell: {
      root: {
        padding: '12px 20px',
        borderColor: themeVariable.palette.grey[200],
        color: themeVariable.palette.grey[600]
      },

      head: {
        fontWeight: themeVariable.fontWeight('semibold'),
        color: themeVariable.palette.grey[600],
        lineHeight: themeVariable.lineHeight('compact')
      },

      body: {
        color: themeVariable.palette.grey[600]
      },

      sizeSmall: {
        fontSize: themeVariable.textSize('small'),
        padding: '8px 12px'
      }
    },

    MuiTableSortLabel: {
      root: {
        color: themeVariable.palette.grey[600],

        '&:focus': {
          color: 'inherit'
        },

        '&$active': {
          color: themeVariable.palette.grey[600],

          '&$root': {
            '&$active': {
              '& $icon': {
                color: themeVariable.palette.grey[600]
              }
            }
          }
        }
      }
    },

    MuiMenuItem: {
      root: {
        fontSize: themeVariable.textSize('normal'),
        fontWeight: themeVariable.fontWeight('regular')
      }
    },

    MuiPaginationItem: {
      root: {
        margin: '0 2px',
        minWidth: 30,
        padding: '0 4px',
        fontWeight: themeVariable.fontWeight('regular')
      }
    },

    MuiPagination: {
      ul: {
        '& li': {
          '&:first-child, &:last-child': {
            border: `1px solid ${palette.grey[300]}`,
            borderRadius: 4
          },

          '&:first-child': {
            marginRight: 8
          },

          '&:last-child': {
            marginLeft: 8
          }
        }
      }
    },

    MuiIconButton: {
      colorPrimary: {
        '&:hover, &:focus': {
          backgroundColor: `${palette.grey[200]}`
        },
        '&:active': {
          backgroundColor: `${palette.grey[300]}`
        }
      }
    },

    MuiTabs: {
      root: {
        height: 40,
        minHeight: 40,
        borderBottom: `1px solid ${palette.grey[200]}`
      },
      scrollButtons: {}
    },

    MuiTabScrollButton: {
      root: {
        color: palette.primary['main'],
        opacity: 1,
        '&$disabled': {
          opacity: 1,
          color: palette.grey[300]
        }
      }
    },

    MuiTab: {
      root: {
        height: 40,
        minHeight: 40,
        minWidth: '0 !important',
        lineHeight: themeVariable.lineHeight('normal'),
        fontSize: themeVariable.textSize('small'),
        fontWeight: themeVariable.fontWeight('semibold'),
        textTransform: 'none',
        padding: `0px ${themeVariable.spacing(4)}px`
      },
      labelIcon: {
        minHeight: 40,
        paddingTop: 0
      },
      wrapper: {
        flexDirection: 'row',
        '& > *:first-child': {
          marginBottom: '0 !important',
          maxWidth: 20,
          maxHeight: 20,
          marginRight: themeVariable.spacing(2)
        }
      },
      textColorPrimary: {
        color: palette.grey[400],
        transition: '0.3s',
        border: '2px solid transparent',
        borderBottom: 'none',
        borderRadius: `${themeVariable.radius(1)}px ${themeVariable.radius(1)}px 0 0`,
        '& svg': {
          fill: palette.grey[500],
          transition: '0.3s'
        },
        '&:focus': {
          borderColor: palette.grey[300]
        },
        '&:hover:not($selected):not(:active)': {
          color: palette.primary['light'],
          '& svg': {
            fill: palette.primary['light']
          }
        },
        '&:active': {
          color: palette.primary['dark'],
          '& svg': {
            fill: palette.primary['dark']
          }
        },
        '&$selected': {
          color: palette.primary['main'],
          '& svg': {
            fill: palette.primary['main']
          }
        },
        '&$disabled': {
          color: palette.grey[300],
          '& svg': {
            fill: palette.grey[300]
          }
        }
      }
    },

    MuiTooltip: {
      tooltip: {
        fontSize: themeVariable.textSize('xx-small'),
        backgroundColor: palette.grey[600],
        letterSpacing: 0.5
      },

      arrow: {
        color: palette.grey[600]
      }
    }
  };
}