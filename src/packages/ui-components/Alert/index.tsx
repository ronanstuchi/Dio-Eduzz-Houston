import * as React from 'react';

import Collapse from '@material-ui/core/Collapse';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AlertMUI, { AlertProps, Color } from '@material-ui/lab/Alert';
import MUIAlertTitle from '@material-ui/lab/AlertTitle';

import Button from '../Button';
import { useChildrenProps, useFirstChildrenProps } from '../hooks/useChildrenProps';
import WrapperTheme from '../styles/ThemeProvider/WrapperTheme';
import AlertAction, { IAlertActionProps } from './Action';
import AlertTitle, { IAlertTitleProps } from './Title';

type AlertPropsExtends = 'id' | 'className' | 'children' | 'severity' | 'onClose' | 'icon';

interface IAlertProps extends Pick<AlertProps, AlertPropsExtends> {
  type?: Color;
  closable?: boolean;
  multiline?: boolean;
}

const useStyles = makeStyles(() =>
  createStyles({
    message: {
      width: '100%'
    },

    controlButtons: {
      display: 'flex',
      alignItems: 'center',

      '& button': {
        marginLeft: 4
      }
    },

    controlButtonsMultiline: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginTop: 16,

      '& button': {
        marginLeft: 4
      }
    },

    multilineIcon: {
      alignItems: 'flex-start'
    },

    multilineAction: {
      paddingLeft: 0
    }
  })
);

type IAlertSubcomponentes = {
  Action: typeof AlertAction;
  Title: typeof AlertTitle;
};

interface IAlertComponent
  extends IAlertSubcomponentes,
    React.ForwardRefExoticComponent<IAlertProps & React.RefAttributes<AlertProps>> {}

let alertActionIncrementer = 0;

const Alert = React.forwardRef<AlertProps, IAlertProps>((props, ref) => {
  const classes = useStyles();

  const [hide, setHide] = React.useState<boolean>(false);

  const { id, className, children, type = 'success', icon, onClose, closable, multiline } = props;
  const alertProps = { id, className, severity: type, icon, onClose };

  const handleClickHide = React.useCallback(() => setHide(true), []);

  const title = useFirstChildrenProps<IAlertTitleProps>(children, AlertTitle);

  const actions = useChildrenProps<IAlertActionProps>(children, AlertAction).map(props => ({
    ...props,
    id: `action-${alertActionIncrementer++}`
  }));

  const buttonActions = React.useMemo(
    () =>
      actions?.map((act, index) => {
        const buttonProps = { ...act };
        delete buttonProps.label;

        return (
          <Button {...buttonProps} key={`alert-action-${index}`}>
            {act.label}
          </Button>
        );
      }),
    [actions]
  );

  const renderActions = React.useMemo(() => {
    if (multiline) return false;
    if (!!actions.length) return <div className={classes.controlButtons}>{buttonActions}</div>;
    return null;
  }, [multiline, actions, classes, buttonActions]);

  return (
    <WrapperTheme>
      <Collapse in={!hide} timeout={500}>
        <AlertMUI
          {...alertProps}
          ref={ref}
          onClose={closable ? handleClickHide : onClose}
          action={renderActions}
          classes={{
            icon: multiline && classes.multilineIcon,
            action: multiline && classes.multilineAction,
            message: classes.message
          }}
        >
          {title && <MUIAlertTitle>{title?.children}</MUIAlertTitle>}
          {children}
          {multiline && buttonActions.length > 0 && (
            <div className={classes.controlButtonsMultiline}>{buttonActions}</div>
          )}
        </AlertMUI>
      </Collapse>
    </WrapperTheme>
  );
}) as IAlertComponent;

Alert.Title = AlertTitle;
Alert.Action = AlertAction;

export default Alert;