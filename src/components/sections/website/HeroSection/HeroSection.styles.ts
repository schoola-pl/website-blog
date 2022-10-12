import styled from 'styled-components';
import AnimatedBackground from 'assets/icons/AnimatedBackground.svg';
import { Button } from 'components/atoms/core/Button';

const HeroSection = styled.div<{ icon?: string }>`
  width: 100vw;
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  margin: 2rem 0 0 0;
  padding: 0;
  align-self: center;
`;

const ImageWrapper = styled.div`
  display: none;
  position: relative;
  height: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    display: flex;
    width: 44%;
    justify-content: center;
    align-items: center;
    align-self: center;
    img {
      margin: 1rem;
      align-self: center;
      max-height: 50rem;
    }
  }
`;

const AnimatedBackgroundDiv = styled.div`
  position: absolute;
  top: 0;
  background-image: url(${AnimatedBackground.src});
  background-repeat: no-repeat;
  background-color: transparent;
  height: 100%;
  width: 100%;
  background-size: 120%;
  z-index: -1;
`;

const SectionWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    flex-direction: row;
    padding: 0rem 3rem 0 3rem;
    align-self: center;
    justify-self: center;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 95%;
    padding: 2rem;
  }
`;

const TextWrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    width: 90%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    width: 50%;
    height: 100%;
    justify-content: center;
    align-items: flex-start;
  }
`;

const HeadingBig = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  align-self: flex-start;
  span {
    color: ${({ theme }) => theme.colors.mainBlue};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    align-self: flex-start;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    align-self: flex-start;
    padding-top: 3.5rem;
  }
`;

const HeadingSmall = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: #d4d4d4;
  text-transform: uppercase;
  letter-spacing: 2px;
  align-self: flex-start;
  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    font-size: ${({ theme }) => theme.fontSize.m};
    transform: translateY(75%);
  }
`;

const BenefitsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  div {
    display: flex;
    align-items: center;
    & > svg {
      height: 50px;
      width: 70px;
      @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
        height: 50px;
        width: 80px;
      }
    }
    p {
      padding-left: 5px;
      font-size: ${({ theme }) => theme.fontSize.xs};
      @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
        font-size: ${({ theme }) => theme.fontSize.s};
      }
      font-weight: ${({ theme }) => theme.fontWeight.medium};
      @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
        font-size: ${({ theme }) => theme.fontSize.s};
      }
    }
  }
`;

const SubmitButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.mainBlue};
  font-size: ${({ theme }) => theme.fontSize.xs};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: none;
  cursor: pointer;
  width: 100%;
  height: 5rem;
  border-radius: 2rem;
  transition: ease-in 0.2s;
  margin-top: 4rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    align-self: center;
    width: 40rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: ${({ theme }) => theme.fontSize.s};
    height: 5.5rem;
    border-radius: 2.5rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    align-self: flex-start;
  }
  &:hover {
    transform: translateY(10%);
  }
`;

export const S = {
  SectionWrapper,
  TextWrapper,
  HeadingBig,
  HeadingSmall,
  BenefitsWrapper,
  SubmitButton,
  ImageWrapper,
  AnimatedBackgroundDiv,
  HeroSection,
};
