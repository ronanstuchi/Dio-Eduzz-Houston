import * as React from 'react';

import Collapse from '@material-ui/core/Collapse';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AlertMUI, { AlertProps, Color } from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';

import Button, { IButtonProps } from '../Button';
import WrapperTheme from '../ThemeProvider/WrapperTheme';

type AlertPropsExtends = 'id' | 'className' | 'style' | 'children' | 'severity' | 'onClose' | 'icon';

interface IActions extends Omit<IButtonProps, 'onClick' | 'children'> {
  label: React.ReactNode;
  onClick: () => void;
}

interface IAlertProps extends Pick<AlertProps, AlertPropsExtends> {
  type?: Color;
  title?: React.ReactNode;
  closable?: boolean;
  actions?: IActions[];
}

const useStyles = makeStyles(() =>
  createStyles({
    controlButtons: {
      display: 'flex',
      alignItems: 'center',

      '& button': {
        marginLeft: 4
      }
    }
  })
);

const Alert = React.forwardRef<HTMLDivElement, IAlertProps>((props, ref) => {
  const classes = useStyles();

  const [hide, setHide] = React.useState<boolean>(false);

  const { id, className, children, style, type = 'success', icon, title, onClose, actions, closable } = props;
  const alertProps = { id, className, style, severity: type, icon, onClose };

  const handleClickHide = React.useCallback(() => setHide(true), []);

  return (
    <WrapperTheme>
      <Collapse in={!hide} timeout={500}>
        <AlertMUI
          {...alertProps}
          ref={ref}
          onClose={closable ? handleClickHide : onClose}
          action={
            actions?.length ? (
              <div className={classes.controlButtons}>
                {actions.map((act, index) => {
                  const buttonProps = { ...act };
                  delete buttonProps.label;

                  return (
                    <Button {...buttonProps} key={`action-${index}`}>
                      {act.label}
                    </Button>
                  );
                })}
              </div>
            ) : null
          }
        >
          {title && <AlertTitle>{title}</AlertTitle>}
          {children}
        </AlertMUI>
      </Collapse>
    </WrapperTheme>
  );
});

export default React.memo(Alert);
