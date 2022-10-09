import styled from 'styled-components';

export const Wrapper = styled.nav`
  position: fixed;
  width: 100vw;
  height: 6rem;
  background-color: white;
  align-items: center;
  justify-content: space-around;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  display: flex;
  z-index: 999;
  top: 0;

  @media (min-width: 1000px) {
    height: 10rem;
  }

  p,
  a {
    text-decoration: none;
    color: black;
    font-size: ${({ theme }) => theme.fontSize.s};
    cursor: pointer;

    @media (min-width: 700px) {
      font-size: 1.75rem;
    }
  }
`;
