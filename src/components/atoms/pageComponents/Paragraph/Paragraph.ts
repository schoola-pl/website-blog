import styled from 'styled-components';

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};

  @media (min-width: 1500px) {
    margin-bottom: 10rem;
  }
`;
