import React, { useState } from 'react';

import CategoriesSection from 'components/sections/blog/CategoriesSection/CategoriesSection';
import PostsSection from 'components/sections/blog/PostsSection/PostsSection';

import { ArticlesType, CategoriesType } from './Articles.types';

const Articles: React.FC<{
  articles: ArticlesType;
  categories: CategoriesType;
}> = ({ articles, categories }) => {
  const [category, setCategory] = useState('all');

  return (
    <div>
      <article id="posts">
        <header>
          <nav>
            <CategoriesSection
              categories={categories}
              setCategory={setCategory}
            />
          </nav>
        </header>
        <PostsSection articles={articles[category]} />
      </article>
    </div>
  );
};

export default Articles;
