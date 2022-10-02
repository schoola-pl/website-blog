import React from 'react';

export interface Props {
  children: React.ReactNode;
  onClick?: () => unknown;
  href?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  small?: boolean;
}
