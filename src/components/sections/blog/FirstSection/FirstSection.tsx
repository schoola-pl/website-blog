import React from 'react';
import Image from 'next/image';
import { Button } from 'components/atoms/core/Button';

import Waves from 'assets/icons/Waves.svg';

import { Wrapper, HeadingSection, ImageSection } from './FirstSection.styles';

const FirstSection = () => (
  <Wrapper>
    <HeadingSection>
      <h1>Unowocześnij swoją szkołę.</h1>
      <p>
        Co dwa tygodnie znajdziesz tutaj wpis, jak prowadzić placówkę edukacyjną
        nowej generacji!
      </p>
      <Button href="#posts">Zobacz jak!</Button>
    </HeadingSection>
    <ImageSection>
      <Image width="1250" height="725" alt="waves" src={Waves} />
      <Image width="1250" height="725" alt="waves" src={Waves} id="next" />
    </ImageSection>
  </Wrapper>
);

export default FirstSection;
