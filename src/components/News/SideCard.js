import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ThumbUp } from '@mui/icons-material';

const SideCardContainer = styled.div`
  display: block;
  &.space {
    margin-top: 40px;
  }
`;

const SideMain = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardTitle = styled.div`
  position: relative;
  top: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 34px;
  background-color: var(--gray-light-two);
  color: var(--black);
  font-family: "Open Sans";
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
`;

const CardText = styled.div`
  font-family: "Open Sans";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  background-color: var(--black-three);
  color: var(--white-one);
  height: 64px;
  padding: 12px;
`;

const CardAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 28px;
  margin-top: 15px;
`;

const CardLike = styled.div`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  line-height: 18.75px;
  color: var(--gray-three);
`;

const CardLikeButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 100%;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 400;
  line-height: 16.41px;
  border-radius: 3px;
  background: var(--blue);

  svg {
    width: 16px;
    height: 14px;
    margin-right: 5px;
  }
`;

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
