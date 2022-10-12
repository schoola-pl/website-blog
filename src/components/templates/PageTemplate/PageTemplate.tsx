import React from 'react';
import { Navbar } from '../../organisms/Navbar/Navbar';
import { Footer } from 'components/organisms/Footer/Footer';
import styled from 'styled-components';

const Wrapper = styled.div`
  /* width: 100vw;
  height: 100vh; */
  /* display: flex;
  flex-direction: column; */
`;

export const PageTemplate: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Navbar />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  );
};
