import styled, { css } from 'styled-components';

export const Button = styled.button`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${({ theme }) => theme.colors.mainBlue};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: white;
  padding: 1.2rem 2.5rem;
  border-radius: 2.5rem;
  transition: background-color 0.2s cubic-bezier(0.18, 0.67, 0.77, 0.8),
    opacity 0.1s ease-in-out;

  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover {
    cursor: pointer;
    background-color: $colors-darkBlue;
  }

  @media ${({ theme }) => theme.breakpoints.xs} {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: ${({ theme }) => theme.fontSize.s};
    padding: 1.5rem 3rem;
  }

  @media ${({ theme }) => theme.breakpoints.m} {
    font-size: ${({ theme }) => theme.fontSize.m};
    padding: 1.5rem 4rem;
  }

  @media ${({ theme }) => theme.breakpoints.l} {
    font-size: ${({ theme }) => theme.fontSize.l};
    padding: 1.7rem 4.2rem;
  }
`;
