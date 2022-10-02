import React from 'react';
import type { Props } from './Label.types';
import { Label as LabelWrapper } from './Label.styles';

export const Label: React.FC<Props> = ({ children, caption, ...rest }) => (
  <div>
    <LabelWrapper {...rest}>{caption}</LabelWrapper>
    {children}
  </div>
);
