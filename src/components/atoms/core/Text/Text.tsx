import { ComponentPropsWithoutRef, FC } from 'react';

import styled, { css } from 'styled-components';

type TextTag = 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
type TextSize = 'xl' | 'l' | 'm' | 's' | 'xs';
type TextWeight = 'regular' | 'medium' | 'bold' | 'semiBold';

export interface TextProps extends ComponentPropsWithoutRef<'span'> {
  tag: TextTag;
  weight?: TextWeight;
  size?: TextSize;
  color?: string;
  truncate?: boolean;
}

export const Text: FC<TextProps> = ({
  tag,
  weight = 'regular',
  size = 'm',
  color,
  truncate = false,
  ...props
}) => {
  return (
    <Wrapper
      as={tag}
      weight={weight}
      size={size}
      color={color}
      truncate={truncate}
      {...props}
    />
  );
};

const fontMap: Record<TextWeight, string> = {
  regular: 'primary400',
  medium: 'primary500',
  semiBold: 'primary600',
  bold: 'primary700',
};

const Wrapper = styled.div<{
  weight?: TextWeight;
  size: TextSize;
  color?: string;
  truncate: boolean;
}>`
  font-family: ${({ theme: { styles }, weight }) =>
    styles.fonts[fontMap[weight || 'regular']]};
  ${({ theme, size }) => theme.font[size]}
  color: ${({ theme: { styles }, color }) => color || styles.neutral100};

  ${({ truncate }) =>
    truncate &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;
