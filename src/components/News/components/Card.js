import React from 'react';
import {
  ArticleCardWrapper,
  ArticleImage,
  ArticleWrapper,
  ArticleTitle,
  ArticleContent,
  MiniArticleCardWrapper,
  MiniArticleImage,
  MiniArticleWrapper,
  MiniArticleTitle
} from '../styled/NewsCardStyles';

const ArticleCard = ({ article, mini }) => {
  if (mini) {
    return (
      <MiniArticleCardWrapper to={`/article/${article?.id}`}>
        <MiniArticleImage className="photo" src={article?.image_url} alt="Article" />
        <MiniArticleWrapper className="specific">
          <MiniArticleTitle className="specific">{article?.title}</MiniArticleTitle>
          <ArticleContent>{article?.short_description}</ArticleContent>
        </MiniArticleWrapper>
      </MiniArticleCardWrapper>
    );
  }

  return (
    <ArticleCardWrapper to={`/article/${article?.id}`}>
      <ArticleImage className="photo" src={article?.image_url} alt="Article" />
      <ArticleWrapper className="specific">
        <ArticleTitle className="specific">{article?.title}</ArticleTitle>
        <ArticleContent>{article?.short_description}</ArticleContent>
      </ArticleWrapper>
    </ArticleCardWrapper>
  );
};

export default ArticleCard;
