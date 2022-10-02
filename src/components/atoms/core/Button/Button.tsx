import React from 'react';

import { Button as ButtonWrapper } from './Button.styles';
import type { Props } from './Button.types';

export const Button: React.FC<Props> = ({
  children,
  type,
  href,
  small,
  ...rest
}) => {
  if (href)
    return (
      <ButtonWrapper as="a" href={href} {...rest}>
        {children}
      </ButtonWrapper>
    );

  return (
    <ButtonWrapper type={type || 'button'} {...rest}>
      {children}
    </ButtonWrapper>
  );
};
