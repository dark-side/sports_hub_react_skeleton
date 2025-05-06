import React from 'react';
import { useLocation } from 'react-router-dom';
import { Share as ShareIcon } from '@mui/icons-material';
import {
  ArticleContainer,
  Photo,
  Info,
  Publish,
  Title,
  Body,
  More,
  Share
} from '../styled/NewsArticleStyles';

const Article = ({ article }) => {
  const location = useLocation();

  if (!article) {
    return null;
  }

  const formattedDate = new Date(article.created_at).toLocaleDateString('en-GB');

  return (
    <ArticleContainer>
      <Photo src={article.image_url} alt="Main article" />
      <Info>
        <Publish>Published / {formattedDate}</Publish>
        <Title>{article.title}</Title>
        <Body>{article.short_description}</Body>

        {location.pathname.includes('article') ? (
          <Share to="/share">
            <ShareIcon aria-hidden="false" aria-label="Share" />
            <span>Share</span>
          </Share>
        ) : (
          <More to={`/article/1`}>
            More
          </More>
        )}
      </Info>
    </ArticleContainer>
  );
};

export default Article;
