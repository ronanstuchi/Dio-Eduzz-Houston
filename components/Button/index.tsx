import * as React from 'react';

import ButtonMUI, { ButtonProps } from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ThemeProvider } from '@material-ui/core/styles';

import { useTheme } from '../ThemeProvider/context';

type ButtonPropsExtends =
  | 'id'
  | 'className'
  | 'style'
  | 'onClick'
  | 'disabled'
  | 'startIcon'
  | 'href'
  | 'endIcon'
  | 'children'
  | 'fullWidth';

interface IButtonProps extends Pick<ButtonProps, ButtonPropsExtends> {
  /**
   * Use case
   *
   * `primary` button contained
   * `secondary` button outlined
   * `text` button text
   */
  type: 'primary' | 'secondary' | 'text';
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const theme = useTheme();

  const {
    className,
    children,
    style,
    onClick,
    disabled = false,
    startIcon,
    type,
    href,
    endIcon,
    fullWidth,
    id,
    loading = false
  } = props;

  const buttonProps = { className, style, onClick, disabled, startIcon, href, endIcon, fullWidth, id, loading };

  const variantMap = {
    primary: 'contained',
    secondary: 'outlined'
  };

  const variant = variantMap[type] || 'text';

  return (
    <ThemeProvider theme={theme}>
      <ButtonMUI
        {...buttonProps}
        disabled={loading ? loading : disabled}
        startIcon={loading ? <CircularProgress size={18} color='inherit' /> : startIcon}
        variant={variant}
        color='primary'
        ref={ref}
      >
        {children}
      </ButtonMUI>
    </ThemeProvider>
  );
});

export default React.memo(Button);
