import React from 'react';
import axios, { AxiosResponse } from 'axios';
import Articles from 'components/organisms/Articles/Articles';
import {
  ArticleBody,
  ArticlesType,
  CategoriesType,
} from 'components/organisms/Articles/Articles.types';
import FirstSection from 'components/sections/blog/FirstSection/FirstSection';

const Home: React.FC<{
  articles: ArticlesType;
  categories: CategoriesType;
}> = ({ articles, categories }) => {
  return (
    <div>
      <FirstSection />
      <Articles articles={articles} categories={categories} />
    </div>
  );
};

export const getStaticProps = async () => {
  const articlesQuery = `
{
  allArticles {
    id
    title
    slug
    description
    category {
      title
    }
    thumbnail {
      url
      alt
    }
    _firstPublishedAt
  }

  _allArticlesMeta {
    count
  }
}
`;

  const categoriesQuery = `
{
  allCategories {
    title
  }
  _allCategoriesMeta {
    count
  }
}
`;

  const {
    data: { data: articlesData },
  } = await axios.post<
    { query: string },
    AxiosResponse<{ data: { allArticles: ArticleBody[] } }>
  >(
    'https://graphql.datocms.com/',
    {
      query: articlesQuery,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_READ_TOKEN}`,
      },
    }
  );
  const { allArticles } = articlesData;
  const categoriedArticles = allArticles.reduce(
    (acc: ArticlesType, article: ArticleBody) => {
      const { category } = article;
      if (!acc[category.title]) {
        acc[category.title] = [];
      }
      acc[category.title].push(article);
      return acc;
    },
    {}
  );
  const articles = { all: allArticles, ...categoriedArticles };

  const {
    data: { data: categoriesData },
  } = await axios.post<
    { query: string },
    AxiosResponse<{ data: { allCategories: { title: string }[] } }>
  >(
    'https://graphql.datocms.com/',
    {
      query: categoriesQuery,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_READ_TOKEN}`,
      },
    }
  );
  const categories = categoriesData.allCategories.map(({ title }) => title);

  return {
    props: {
      articles,
      categories,
    },
  };
};

export default Home;
