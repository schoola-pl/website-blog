import React, { useState } from 'react';
import { S } from 'components/sections/website/HeroSection/HeroSection.styles';
import Grow from 'assets/icons/Grow.svg';
import TickIcon from 'assets/interactive-icons/TickIcon';
import { WaitlistModal } from 'components/molecules/WaitlistModal/WaitlistModal';
import { Toaster } from 'react-hot-toast';

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
      <S.HeroSection>
        <S.AnimatedBackgroundDiv />
        <S.SectionWrapper>
          <S.TextWrapper>
            <S.HeadingSmall>
              System do zarządzania szkołą średnią
            </S.HeadingSmall>
            <S.HeadingBig>
              Ty zajmij się kreowaniem edukacji,
              <br />
              <span>my odciążymy cię od codziennej bieżączki.</span>
            </S.HeadingBig>
            <S.BenefitsWrapper>
              {benefits.map(({ text }: { text: string }) => (
                <div key={text}>
                  <TickIcon fill="#00d003" />
                  <p>{text}</p>
                </div>
              ))}
            </S.BenefitsWrapper>
            <S.SubmitButton onClick={handleChangeModal}>
              Chcę się dowiedzieć więcej!
            </S.SubmitButton>
          </S.TextWrapper>
          <S.ImageWrapper>
            <img src={Grow.src} />
          </S.ImageWrapper>
        </S.SectionWrapper>
        <WaitlistModal setModalOpen={setModalOpen} isOpen={isOpen} />
        <Toaster />
      </S.HeroSection>
    </>
  );
};

export default Home;
