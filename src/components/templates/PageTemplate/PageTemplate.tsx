import React, { useEffect, useState } from 'react';
import { Navbar } from '../../organisms/Navbar/Navbar';
import { Footer } from 'components/organisms/Footer/Footer';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const blogLocations = [
  { link: '/', content: 'Strona główna' },
  { link: '/about', content: 'O nas' },
  { link: '/contact', content: 'Kontakt' },
];

const websiteLocations = [
  { link: '/blog', content: 'Blog' },
  { link: '/about', content: 'O nas' },
  { link: '/contact', content: 'Kontakt' },
];

export const PageTemplate: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isBlog, setIsBlog] = useState<boolean>(false);
  const router = useRouter();
  const pathname = router.pathname;

  useEffect(() => {
    if (pathname.includes('/blog') && !pathname.includes('articles')) {
      setIsBlog(true);
    } else {
      setIsBlog(false);
    }
  }, [router.pathname]);

  return (
    <>
      <Navbar data={isBlog ? blogLocations : websiteLocations} />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  );
};
