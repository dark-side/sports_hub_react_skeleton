import React, { useEffect } from 'react';
import styled from 'styled-components';
import Card from './Card';
import Divider from './Divider';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from '../../app/slices/newsSlice';
import Article from './Article';
import SideCard from './SideCard';

const Container = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  align-items: normal;
`;

const Content = styled.div`
  width: 815px;
  height: 100%;
  margin-bottom: 80px;
`;

const Main = styled.div`
  width: 100%;
  margin-bottom: 120px;
`;

const Bottom = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
`;

const Left = styled.div`
  height: 100%;
  flex-grow: 1;
  margin-right: 20px;
`;

const Right = styled.div`
  height: 100%;
  flex-grow: 1;
`;

const Side = styled.div`
  width: calc(100% - 815px);
  position: relative;
`;

const Cards = styled.div`
  width: 285px;
  margin-top: 650px;
  margin-left: 20px;
  margin-bottom: 20px;
`;

const Watermark = styled.div`
  position: absolute;
  left: 60px;
  top: 360px;
  opacity: 0.1;
  font-size: 100px;
  transform: rotate(-45deg);
  pointer-events: none;
`;

const News = ({ articles, popular, commented, side }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const allNews = useSelector((state) => state.news.news);

  const mostCommented = allNews.slice(0, 3);
  const popularArticle = allNews.slice(2, 5);

  return (
    <Container>
      <Content>
        <Article article={allNews[1]}></Article>
        <Main>
          {allNews.map((article, index) => (
            <Card key={index} article={article} />
          ))}
        </Main>

        <Bottom>
          <Left>
            {mostCommented.length > 0 && (
              <>
                <Divider title="MOST POPULAR" />
                {mostCommented.map((article, index) => (
                  <Card mini={true} key={index} article={article} className="mini" />
                ))}
              </>
            )}
          </Left>

          <Right>
            {popularArticle.length > 0 && (
              <>
                <Divider title="MOST COMMENTED" />
                {popularArticle.map((article, index) => (
                  <Card mini={true} key={index} article={article} className="mini" />
                ))}
              </>
            )}
          </Right>
        </Bottom>
      </Content>

      <Side>
        <Cards>
          {popularArticle.map((article, index) => (
            <SideCard key={index} article={article} />
          ))}
        </Cards>
        <Watermark>NEWS</Watermark>
      </Side>
    </Container>
  );
};

export default News;