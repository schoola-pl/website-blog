import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10rem 2rem 3rem;
  width: 100%;

  @media (min-width: 700px) {
    padding: 12rem 4rem 5rem;
  }

  @media (min-width: 1500px) {
    padding: 16rem 15% 10rem;
  }
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 1rem;
  margin: 2rem 0;

  @media (min-width: 500px) {
    margin-bottom: 4rem;
  }
`;

export const ContentWrapper = styled.div`
  h1 {
    font-size: clamp(${({ theme }) => theme.fontSize.m}, 4vw, ${({ theme }) => theme.fontSize.xl});
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    margin: 0;
  }

  button {
    color: ${({ theme }) => theme.colors.mainBlue};
    font-size: clamp(${({ theme }) => theme.fontSize.xs}, 2vw, ${({ theme }) => theme.fontSize.s});
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.s};
    text-align: justify;
    line-height: 1.6;

    @media (min-width: 700px) {
      text-align: left;
      letter-spacing: 0.2px;
      line-height: 1.75;
      font-size: 1.7rem;
    }
  }
`;

export const PhotoWrapper = styled.div`
  img {
    border-radius: 50%;
    overflow: hidden;
    margin-right: 2rem;
  }
`;

export const AuthorWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 1.5rem;
  margin-top: 6rem;
  text-align: right;

  @media (min-width: 700px) {
    margin-top: 10rem;
  }

  p {
    margin: 0;

    @media (min-width: 1000px) {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.m};
    @media (min-width: 1000px) {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
    position: relative;

    &::before {
      font-size: ${({ theme }) => theme.fontSize.xs};
      content: 'Artykuł dla Was napisała...';
      position: absolute;
      opacity: 0.9;
      bottom: calc(100% - 5px);
      right: 0;
      font-weight: normal;
    }
  }
`;
