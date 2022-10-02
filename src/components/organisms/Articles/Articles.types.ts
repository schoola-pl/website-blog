export type ArticleBody = {
  id: number;
  title: string;
  slug: string;
  description: string;
  thumbnail: { url: string; alt: string };
  category: { title: string };
};
export type ArticleExtendedBody = {
  id: number;
  title: string;
  content: string;
  slug: string;
  seo: {
    title: string;
    description: string;
    twitterCard: string;
    image: {
      url: string;
      alt: string;
    };
  };
  description: string;
  thumbnail: { url: string; alt: string };
  category: { title: string };
  _firstPublishedAt: Date;
};

export type ArticlesType = { [k: string]: ArticleBody[] };
export type ArticlesExtendedType = { [k: string]: ArticleExtendedBody[] };
export type CategoriesType = string[];
