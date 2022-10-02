import React from 'react';
import { Paragraph } from 'components/atoms/pageComponents/Paragraph/Paragraph';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ArticleBody } from 'components/organisms/Articles/Articles.types';
import Card from 'components/molecules/Card/Card';

const PostSection: React.FC<{ articles: ArticleBody[] }> = ({ articles }) => (
  <section>
    <TransitionGroup className="transition-group">
      {articles === undefined ? (
        <Paragraph>Czekaj na artykuły w tej kategorii!</Paragraph>
      ) : (
        articles.map((article) => (
          <CSSTransition key={article.id} timeout={300} classNames="fade">
            <Card key={article.id} article={article} />
          </CSSTransition>
        ))
      )}
    </TransitionGroup>
  </section>
);

export default PostSection;
