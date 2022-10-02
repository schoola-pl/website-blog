import React from 'react';
import { Input as InputStyles } from './Input.styles';

export const Input = React.forwardRef<any, any>(
  ({ children, ...rest }, ref) => <InputStyles ref={ref} {...rest} />
);
