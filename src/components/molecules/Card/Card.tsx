import { useRouter } from 'next/router';
import Image from 'next/image';
import React from 'react';

import { ArticleBody } from 'components/organisms/Articles/Articles.types';
import Category from 'components/atoms/pageComponents/Category/Category';

import { Wrapper, Header, InfoSection } from './Card.styles';

const Card: React.FC<{ article: ArticleBody }> = ({
  article: { title, slug, category, thumbnail },
}) => {
  const router = useRouter();

  return (
    <Wrapper onClick={() => router.push(`/blog/articles/${slug}`)}>
      <Header>
        <div>
          <Image
            src={thumbnail.url}
            alt={thumbnail.alt}
            layout="responsive"
            height="200"
            width="370"
          />
        </div>
        <InfoSection>
          <h1>{title}</h1>
          <Category tabIndex={-1} categoryType={`${category.title}`} inline />
        </InfoSection>
      </Header>
    </Wrapper>
  );
};

export default Card;
