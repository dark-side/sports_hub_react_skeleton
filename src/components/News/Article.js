import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Share as ShareIcon } from '@mui/icons-material'; // Material UI icon import
import styled from 'styled-components';

const ArticleContainer = styled.div`
  height: 460px;
  width: 1060px;
  margin-bottom: 40px;
  position: relative;
  display: block;
`;

const Photo = styled.img`
  width: 815px;
  height: 455px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
  height: 290px;
  background-color: var(--gray-light);
  position: absolute;
  top: 85px;
  left: 625px;
  padding: 40px 20px 20px 20px;
  z-index: 100;
`;

const Publish = styled.div`
  font-family: "Roboto";
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 15px;
  color: var(--text-dark-gray);
`;

const Title = styled.div`
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  margin-bottom: 15px;
  color: var(--red);
`;

const Body = styled.div`
  font-family: "Open Sans";
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  color: var(--black-two);
`;

const More = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 175px;
  height: 42px;
  background-color: var(--primary-red);
  color: var(--white-one);
  font-family: "Open Sans";
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  text-align: left;
  margin-top: auto;
  text-decoration: none;
`;

const Share = styled(Link)`
  display: flex;
  align-items: center;
  height: 42px;
  width: 100%;
  margin-top: auto;
  color: var(--text-dark-gray);
  text-decoration: none;

  svg {
    width: 16px;
    height: 16px;
    margin-right: 10px;
  }
`;

const Article = ({ article }) => {
  const location = useLocation();

  if (!article) {
    return null;
  }

  const formattedDate = new Date(article.created_at).toLocaleDateString('en-GB'); // Format the date as 'dd.MM.yyyy'

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
