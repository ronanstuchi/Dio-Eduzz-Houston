import * as React from 'react';

import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import { useContextSelector } from 'use-context-selector';

import WrapperTheme from '../../styles/ThemeProvider/WrapperTheme';
import { FormFieldsContext } from '../Form';
import LabelBase from './LabelBase';

const useStyles = makeStyles(() =>
  createStyles({
    marginDense: {
      padding: '0 8px'
    }
  })
);

type FieldCheckboxPropsExtends = 'checked' | 'value' | 'onChange';

export interface ICheckboxBaseFieldProps extends Pick<CheckboxProps, FieldCheckboxPropsExtends> {
  Control: typeof Checkbox;
  label?: React.ReactNode;
  description?: string;
  name: string;
  errorMessage?: string;
  isMultiple?: boolean;
  margin?: 'none' | 'normal';
}

const CheckboxRadioField = React.memo<ICheckboxBaseFieldProps>(
  ({
    Control,
    label,
    name,
    description,
    checked,
    value,
    errorMessage: errorMessageProp,
    isMultiple,
    onChange,
    margin
  }) => {
    const classes = useStyles();

    const formValue = useContextSelector(FormFieldsContext, context => context?.getFieldValue(name));
    const formError = useContextSelector(FormFieldsContext, context => context?.getFieldError(name));
    const setFieldValue = useContextSelector(FormFieldsContext, context => context?.setFieldValue);

    if (!name && setFieldValue) {
      throw new Error('@eduzz/houston-ui: to use form prop you need provide a name for the field');
    }

    const isChecked = React.useMemo(() => {
      if (isMultiple) {
        return (formValue ?? []).includes(value);
      }

      return formValue === true || checked;
    }, [checked, formValue, isMultiple, value]);

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        if (!isMultiple) {
          setFieldValue && setFieldValue(name, checked);
          onChange && onChange(e, checked);
          return;
        }

        const setValue = new Set(formValue ?? []);

        if (checked) {
          setValue.add(value);
        } else {
          setValue.delete(value);
        }

        setFieldValue && setFieldValue(name, Array.from(setValue));
      },
      [formValue, isMultiple, name, onChange, setFieldValue, value]
    );

    const errorMessage = errorMessageProp ?? formError;
    const hasError = !!errorMessage;

    return (
      <WrapperTheme>
        <FormControlLabel
          control={
            <Control
              classes={{ root: margin === 'none' && classes.marginDense }}
              checked={isChecked}
              onChange={handleChange}
              name={name}
              color='primary'
            />
          }
          label={<LabelBase hasError={hasError} errorMessage={errorMessage} label={label} description={description} />}
        />
      </WrapperTheme>
    );
  }
);

export default CheckboxRadioField;