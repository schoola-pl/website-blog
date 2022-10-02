import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import AnimatedBackground from 'assets/icons/AnimatedBackground.svg';
import Grow from 'assets/icons/Grow.svg';
import TickIcon from 'assets/interactive-icons/TickIcon';
import Modal from 'react-modal';
import { Input } from 'components/atoms/core/Input';
import { Label } from 'components/atoms/core/Label';

import Image from 'next/image';

const benefits = [
  {
    text: 'Automatycznie wystawiaj rachunki oraz pobieraj płatności od rodziców',
  },
  { text: 'Sprowadź codzienną komunikację w placówce do jednego miejsca' },
  { text: 'Wspieraj swoich uczniów oraz pomóż im w ich szkolnym życiu' },
];

const Home = () => {
  const [isOpen, setModalOpen] = useState(true);
  return (
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
        <Modal isOpen={isOpen} style={modalStyles}>
          <ModalContentWrapper>
            <CloseModalButton onClick={() => setModalOpen(false)}>
              x
            </CloseModalButton>
            <InfoWrapper>
              <Heading>
                comm<span>unite</span>
              </Heading>
              <p>
                Zapisz się na listę oczekujących i pozostań z nami w kontakcie!
              </p>
            </InfoWrapper>
            <Label
              caption="Nazwa placówki"
              style={{ padding: '1rem 0 1rem 0' }}>
              <Input placeholder="Liceum nr. 1 w Jastrzębiej Górze" />
            </Label>
            <Label caption="E-mail" style={{ padding: '1.5rem 0 1rem 0' }}>
              <Input placeholder="mail@example.com" />
            </Label>
            <Label caption="akceptuję politykę prywatności">
              <input type="checkbox" />
            </Label>
            <SubmitButton isModal onClick={() => setModalOpen(false)}>
              Zapisz się!
            </SubmitButton>
          </ModalContentWrapper>
        </Modal>
        <SubmitButton onClick={() => setModalOpen(true)}>
          Chcę się dowiedzieć więcej!
        </SubmitButton>
      </TextWrapper>
    </HeroSection>
  );
};

const HeroSection = styled.div<{ icon?: string }>`
  position: relative;
  height: 100%;
  border: none;
  display: block;
  background-position: center;
  display: grid;
  place-items: center;
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
  align-items: left;
  padding: 3rem;
  flex-direction: column;
`;

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50rem',
    height: '60rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '#f0f5f6',
    boxShadow: '-2px 4px 10px rgba(115, 124, 142, 0.09)',
    borderRadius: '2rem',
  },
};

const InfoWrapper = styled.div`
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
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const CloseModalButton = styled.button`
  position: absolute;
  top: 5%;
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
    }

    p {
      padding-left: 5px;
      font-size: ${({ theme }) => theme.fontSize.xs};
      font-weight: ${({ theme }) => theme.fontWeight.medium};
    }
  }
`;

const SubmitButton = styled.button<{ isModal?: boolean }>`
  background-color: ${({ theme }) => theme.colors.mainBlue};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: white;
  border: none;
  /* width: ${({ isModal }) => (isModal ? ' 100%' : '50%')}; */
  height: 5rem;
  border-radius: 2rem;
  transition: ease-in 0.2s;
  cursor: pointer;
  margin-top: ${({ isModal }) => (isModal ? '4rem' : '4rem')};

  &:hover {
    transform: translateY(10%);
  }
`;

export default Home;
