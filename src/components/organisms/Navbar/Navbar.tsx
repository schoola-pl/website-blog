import React from 'react';
import Link from 'next/link';
import { Wrapper } from './Navbar.styles';

export const Navbar: React.FC<any> = ({ data }) => (
  <Wrapper>
    {data.map(({ content, link }: { content: string; link: string }) => (
      <Link href={link} key={content} target="_blank" rel="noopener noreferrer">
        {content}
      </Link>
    ))}
  </Wrapper>
);
