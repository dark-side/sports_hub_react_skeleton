import React, { useEffect } from 'react';
import Card from './components/Card';
import Divider from './components/Divider';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from '../../app/slices/newsSlice';
import Article from './components/Article';
import SideCard from './components/SideCard';
import {
  Container,
  Content,
  Main,
  Bottom,
  Left,
  Right,
  Side,
  Cards
} from './styled/NewsStyles';

const News = () => {
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
        <div className="watermark watermark-1">NEWS</div>
      </Side>
    </Container>
  );
};

export default News;