import { GetStaticProps } from 'next';
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import axios, { AxiosResponse } from 'axios';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';

import WeraPhoto from 'assets/icons/WeraPhoto.png';
import { ArticleExtendedBody } from 'components/organisms/Articles/Articles.types';
import Category from 'components/atoms/pageComponents/Category/Category';
import {
  Wrapper,
  ImageWrapper,
  ContentWrapper,
  PhotoWrapper,
  AuthorWrapper,
} from 'components/pageStyles/blog/Articles.styles';

const Article: React.FC<{ article: ArticleExtendedBody }> = ({
  article: {
    title,
    thumbnail,
    _firstPublishedAt,
    content,
    slug,
    category,
    seo,
  },
}) => {
  const publishDate = format(new Date(_firstPublishedAt), 'yyyy-MM-dd');

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} key="description" />
        <meta property="og:title" content={seo.title} key="og:title" />
        <meta
          property="og:description"
          content={seo.description}
          key="og:description"
        />
        <meta property="og:image" content={seo.image.url} key="og:image" />
        <meta property="og:type" content="article" key="og:type" />
        <meta
          property="og:url"
          content={`https://blog.communite.pl/articles/${slug}`}
          key="og:url"
        />
        <meta
          name="twitter:card"
          content={seo.twitterCard}
          key="twitter:card"
        />
        <meta name="twitter:site" content="@communite__" key="twitter:site" />
        <meta
          name="twitter:creator"
          content="@communite__"
          key="twitter:creator"
        />
      </Head>
      <Wrapper>
        <ImageWrapper>
          <Image
            src={thumbnail.url}
            alt={title}
            layout="responsive"
            width="400"
            height="200"
          />
        </ImageWrapper>
        <ContentWrapper>
          <Category categoryType={category.title} inline />
          <h1>{title}</h1>
          <ReactMarkdown>{content}</ReactMarkdown>
          <AuthorWrapper>
            <PhotoWrapper>
              <Image src={WeraPhoto} alt="author" width="80" height="80" />
            </PhotoWrapper>
            <div>
              <h1>Weronika Latala</h1>
              <p>
                Opublikowano <i>{publishDate}</i>
              </p>
            </div>
          </AuthorWrapper>
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

export const getStaticPaths = async () => {
  const query = `
{
  allArticles {
    id
    slug
  }
}
`;

  const {
    data: { data: articlesData },
  } = await axios.post<
    { query: string },
    AxiosResponse<{ data: { allArticles: { slug: string }[] } }>
  >(
    'https://graphql.datocms.com/',
    {
      query,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_READ_TOKEN}`,
      },
    }
  );
  const { allArticles } = articlesData;
  const paths = allArticles.map((article) => ({
    params: { slug: article.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const query = `
{
  allArticles {
    id
    title
    slug
    description
    content
    thumbnail { 
      url
      alt
    }
    category {
      title
    }
    seo {
      title
      twitterCard
      description
      image {
        url
        alt
      }
    }
    _firstPublishedAt
  }

  _allArticlesMeta {
    count
  }
}
`;
  const slug = context?.params?.slug;
  const {
    data: { data },
  } = await axios.post<
    { query: string },
    AxiosResponse<{ data: { allArticles: ArticleExtendedBody[] } }>
  >(
    'https://graphql.datocms.com/',
    {
      query,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_READ_TOKEN}`,
      },
    }
  );
  const { allArticles } = data;
  const result = allArticles.find(
    (article: ArticleExtendedBody) => article.slug === slug
  );

  return {
    props: {
      article: result,
    },
  };
};

export default Article;
