import React from 'react';
import { Link } from 'react-router-dom';
import { ThumbUp } from '@mui/icons-material';
import {
  SideCardContainer,
  SideMain,
  CardTitle,
  CardText,
  CardAction,
  CardLike,
  CardLikeButton
} from '../styled/NewsSideCardStyles';

const SideCard = ({ article }) => {
  if (!article) return null;

  return (
    <SideCardContainer className={!article.title ? 'space' : ''}>
      <SideMain to={article.id}>
        <div>
          {article.title && <CardTitle>{article.title}</CardTitle>}
          <img src={article.image_url} alt="Facebook" />
        </div>
        {article.short_description && <CardText>{article.short_description}</CardText>}
      </SideMain>
        <CardAction>
          <CardLike>Like us on Facebook</CardLike>
          <CardLikeButton to="/like">
            <ThumbUp aria-hidden="false" aria-label="Like" />
            <span>Like</span>
          </CardLikeButton>
        </CardAction>
    </SideCardContainer>
  );
};

export default SideCard;
