import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Wrapper } from './Navbar.styles';

export const Navbar = () => {
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
    <Wrapper>
      <Link href={isBlog ? '/' : '/blog'}>
        {isBlog ? 'Strona główna' : 'Blog'}
      </Link>
      <a href="https://schoola.pl" target="_blank" rel="noopener noreferrer">
        O nas
      </a>
      <a
        href="mailto:teo.wolski@communite.io"
        target="_blank"
        rel="noopener noreferrer">
        Kontakt
      </a>
    </Wrapper>
  );
};
