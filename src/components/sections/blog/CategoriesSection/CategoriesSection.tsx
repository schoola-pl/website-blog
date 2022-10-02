import React from 'react';

import Category from 'components/atoms/pageComponents/Category/Category';
import { CategoriesType } from 'components/organisms/Articles/Articles.types';
import { Paragraph } from 'components/atoms/pageComponents/Paragraph/Paragraph';

import { CategoriesList, Wrapper } from './Categories.styles';

const CategoriesSection: React.FC<{
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  categories: CategoriesType;
}> = ({ setCategory, categories }) => (
  <Wrapper>
    <h1>
      Kategorie <span>postów</span>
    </h1>
    <CategoriesList>
      <Category onClick={() => setCategory('all')} categoryType="all" />
      {categories.map((category) => (
        <Category
          onClick={() => setCategory(category)}
          key={category}
          categoryType={category}
        />
      ))}
    </CategoriesList>
    <Paragraph>
      Aby zobaczyć inne kategorie postów, <br /> przesuń palcem w lewo lub
      prawo!
    </Paragraph>
  </Wrapper>
);

export default React.memo(CategoriesSection);
