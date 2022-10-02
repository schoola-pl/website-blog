import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  padding-top: 6rem;
  padding-bottom: 5rem;
  width: 100vw;
  height: auto;

  @media (min-width: 1000px) {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: 10rem;
    justify-content: center;
  }
`;

export const ImageSection = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0;
  width: 100%;
  z-index: -1;
`;

export const HeadingSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8rem 2rem;

  @media (min-width: 650px) {
    padding: 3rem;
  }

  h1 {
    color: black;
    font-size: clamp(${({ theme }) => theme.fontSize.l}, 6vw, ${({ theme }) => theme.fontSize.xxl});
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    margin: 0;

    @media (min-width: 440px) {
      margin-top: 7.5rem;
    }
  }

  p {
    margin: 1rem 0 2rem 0;
    font-size: clamp(${({ theme }) => theme.fontSize.xs}, 3vw, 2.7rem);
    color: black;
    z-index: 99999;

    @media (min-width: 1000px) {
      max-width: 70%;
    }
  }
`;
