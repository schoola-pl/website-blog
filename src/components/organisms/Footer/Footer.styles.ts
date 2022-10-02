import styled from 'styled-components';

export const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.mainBlue};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xs};

  p {
    margin: 0.2rem 0;
    padding: 0;

    @media (min-width: 1500px) {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }

  @media (min-width: 728px) {
    flex-direction: row;
    padding: 2rem 4rem;

    p {
      margin: 0;
    }
  }

  @media (min-width: 1500px) {
    bottom: 0;
    position: fixed;
    width: 100vw;
  }
`;
