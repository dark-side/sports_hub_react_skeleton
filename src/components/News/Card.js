import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import styled from 'styled-components';

const ArticleCardWrapper = styled(Link)`
  display: flex;
  width: 100%;
  height: 182px;
  padding: 10px;
  background: #ffffff;
  border: 1px solid var(--gray-two);
  &:hover {
    margin: 10px 0;
    box-shadow: 0px 2px 24px 0px #0000001c;
    transition: margin 500ms ease-in-out, box-shadow 100ms ease-in-out;
  }
`;

const ArticleImage = styled.img`
  width: 240px;
  height: 160px;
  margin-right: 20px;
`;

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
`;

const ArticleTitle = styled.div`
  font-family: "Open Sans";
  font-size: 16px;
  line-height: 22px;
  color: var(--black-two);
  margin-bottom: 10px;
  font-weight: 700;
`;

const ArticleContent = styled.div`
  font-family: "Open Sans";
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  color: var(--text-dark-gray);
  overflow: hidden;
`;

const MiniArticleCardWrapper = styled(ArticleCardWrapper)`
  height: 98px;
  box-shadow: initial;
  margin: 0;
  padding: 0;
`;

const MiniArticleImage = styled(ArticleImage)`
  width: 140px;
  height: 97px;
  margin-right: 15px;
`;

const MiniArticleWrapper = styled(ArticleWrapper)`
  margin-right: 30px;
`;

const MiniArticleTitle = styled(ArticleTitle)`
  margin-top: 10px;
  margin-bottom: 5px;
`;

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
