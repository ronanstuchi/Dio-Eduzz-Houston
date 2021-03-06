import * as React from 'react';

import maskMoney from '@eduzz/houston-forms/masks/money';

import TextField, { ITextFieldProps } from '../Text';

type IOmitProps = 'mask' | 'multiline' | 'maxLength' | 'rows';

export interface ICurrencyProps extends Omit<ITextFieldProps, IOmitProps> {}

const CurrencyField: React.FC<ICurrencyProps> = props => {
  return <TextField {...props} mask={maskMoney} />;
};

export default CurrencyField;
