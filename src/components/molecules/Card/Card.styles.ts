import styled from 'styled-components';

export const Wrapper = styled.article`
  width: 36rem;
  padding: 0;
  text-align: left;
  box-shadow: ${({ theme }) => theme.innerStyles.boxShadow};
  margin-bottom: 4rem;
  border-radius: 2rem;
  overflow: hidden;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.accentGray};
  color: ${({ theme }) => theme.colors.black};

  h1 {
    opacity: 0.9;
    transition: opacity 0.1s linear;
  }

  &:hover {
    h1 {
      opacity: 1;
    }
  }

  div {
    height: 100%;
    width: 100%;
    position: relative;
  }

  @media (min-width: 1500px) {
    width: 40rem;
  }
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const InfoSection = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column-reverse;
  padding: 1rem 1.5rem;

  h1 {
    margin: 0;
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    font-size: ${({ theme }) => theme.fontSize.s};
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    @media (min-width: 1500px) {
      font-size: 1.8rem;
    }
  }
`;
