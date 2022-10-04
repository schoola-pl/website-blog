import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import AnimatedBackground from 'assets/icons/AnimatedBackground.svg';
import Grow from 'assets/icons/Grow.svg';
import TickIcon from 'assets/interactive-icons/TickIcon';
import Modal from 'react-modal';
import { Input } from 'components/atoms/core/Input';
import { Label } from 'components/atoms/core/Label';
import { Button } from 'components/atoms/core/Button';

import Image from 'next/image';

const benefits = [
  {
    text: 'Automatycznie wystawiaj rachunki oraz pobieraj płatności od rodziców',
  },
  { text: 'Sprowadź codzienną komunikację w placówce do jednego miejsca' },
  { text: 'Wspieraj swoich uczniów oraz pomóż im w ich szkolnym życiu' },
];

const Home = () => {
  const [isOpen, setModalOpen] = useState(false);

  const handleChangeModal = () => {
    setModalOpen(!isOpen);
  };
  return (
    <>
      <HeroSection>
        <AnimatedBackgroundDiv />
        <TextWrapper>
          <HeadingSmall>System do zarządzania szkołą średnią</HeadingSmall>
          <HeadingBig>
            Ty zajmij się kreowaniem edukacji,{' '}
            <span>my odciążymy cię od codziennej bieżączki.</span>
          </HeadingBig>
          {/* <ImageWrapper>
          <Image src={Grow} layout="responsive" />
        </ImageWrapper> */}
          <BenefitsWrapper>
            {benefits.map(({ text }: { text: string }) => (
              <div key={text}>
                <TickIcon fill="#00d003" />
                <p>{text}</p>
              </div>
            ))}
          </BenefitsWrapper>
          <Modal isOpen={isOpen} style={modalStyles} ariaHideApp={false}>
            <ModalContentWrapper>
              <InfoWrapper>
                <CloseModalButton onClick={handleChangeModal}>
                  x
                </CloseModalButton>
                <Heading>
                  comm<span>unite</span>
                </Heading>
                <p>
                  Zapisz się na listę oczekujących i pozostań z nami w
                  kontakcie!
                </p>
              </InfoWrapper>
              <ModalLabel
                caption="Nazwa placówki
      ">
                <Input placeholder="Liceum nr. 1 w Jastrzębiej Górze" />
              </ModalLabel>
              <ModalLabel caption="E-mail">
                <Input placeholder="mail@example.com" />
              </ModalLabel>
              <CheckboxWrapper>
                <input type="checkbox" required />
                <Label caption="Akceptuję politykę prywatności i wyrażam zgodę na kontakt" />
              </CheckboxWrapper>
              <SubmitButton isModal onClick={handleChangeModal}>
                Zapisz się!
              </SubmitButton>
            </ModalContentWrapper>
          </Modal>
          <SubmitButton isOpen={isOpen} onClick={handleChangeModal}>
            Chcę się dowiedzieć więcej!
          </SubmitButton>
        </TextWrapper>
      </HeroSection>
    </>
  );
};

const HeroSection = styled.div<{ icon?: string }>`
  width: 100vw;
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  /* grid-template-columns: 50% 50%; */
`;

const ImageWrapper = styled.div`
  /* transform: translate(10%, 5%); */
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
`;

const TextWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    align-items: flex-start;
  }
`;

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-45%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '50rem',
    maxHeight: '60rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '#f0f5f6',
    boxShadow: '-2px 4px 10px rgba(115, 124, 142, 0.09)',
    borderRadius: '2rem',
    zIndex: '1000',
  },
};

const ModalLabel = styled(Label)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  padding: 1rem;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  label {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.xs};
    padding: 2.5rem 1rem 1rem 1rem;
  }
`;

const InfoWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;

  p {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.xs};
    justify-self: center;
  }
`;

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  span {
    color: ${({ theme }) => theme.colors.mainBlue};
  }
`;

const ModalContentWrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

const CloseModalButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background-color: white;
  font-size: ${({ theme }) => theme.fontSize.s};
  cursor: pointer;
`;

const HeadingBig = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  padding-top: 3.5rem;

  span {
    color: ${({ theme }) => theme.colors.mainBlue};
  }
`;

const HeadingSmall = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: #d4d4d4;
  text-transform: uppercase;
  letter-spacing: 2px;
  transform: translateY(75%);
  align-self: flex-start;
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
    }
  }
`;

const SubmitButton = styled(Button)<{ isModal?: boolean; isOpen?: boolean }>`
  background-color: ${({ theme }) => theme.colors.mainBlue};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: white;
  border: none;
  cursor: pointer;
  /* width: ${({ isModal }) => (isModal ? ' 100%' : '50%')}; */

  width: 100%;
  height: 5rem;
  border-radius: 2rem;
  transition: ease-in 0.2s;
  cursor: pointer;
  margin-top: ${({ isModal }) => (isModal ? '4rem' : '4rem')};
  display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
  z-index: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    align-self: center;
    width: 40rem;
  }

  &:hover {
    transform: translateY(10%);
  }
`;

export default Home;
