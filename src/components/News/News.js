import React, { useEffect } from 'react';
import Card from './Card';
import Divider from './Divider';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from '../../app/slices/newsSlice';
import Article from './Article';

const News = ({ articles, popular, commented, side }) => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchNews());
    }, [dispatch]);

  const allNews = useSelector((state) => state.news.news);

  const mostCommented = allNews.slice(0, 3);
  const popularArticle = allNews.slice(3, 5);
//   debugger
  return (
    <div style={{ display: 'flex', height: '100%', flex: 1, alignItems: 'normal' }}>
      <div className="content" style={{ width: '815px', height: '100%', marginBottom: '80px' }}>
        <div className="main" style={{ width: '100%', marginBottom: '120px' }}>
          <Article article={allNews[1]}></Article>
        </div>

        <div className="bottom" style={{ display: 'flex', width: '100%', backgroundColor: 'white' }}>
          <div className="left" style={{ height: '100%', flexGrow: 1, marginRight: '20px' }}>
            {/* Popular Articles */}
            {mostCommented.length > 0 && (
              <>
                <Divider title="MOST POPULAR" />
                {mostCommented.map((article, index) => (
                  <Card key={index} article={article} className="mini" />
                ))}
              </>
            )}
          </div>

          <div className="right" style={{ height: '100%', flexGrow: 1 }}>
            {/* Most Commented Articles */}
            {popularArticle.length > 0 && (
              <>
                <Divider title="MOST COMMENTED" />
                {popularArticle.map((article, index) => (
                  <Card key={index} article={article} className="mini" />
                ))}
              </>
            )}
          </div>
        </div>
      </div>

      <div className="side" style={{ width: 'calc(100% - 815px)', position: 'relative' }}>
        <div className="cards" style={{ width: '285px', marginTop: '750px', marginLeft: '20px', marginBottom: '20px' }}>
          {allNews.map((article, index) => (
            <Card key={index} article={article} />
          ))}
        </div>

        <div className="watermark-2" style={{ left: '60px', top: '360px' }}>
          {/* Watermark text */}
          NEWS
        </div>
      </div>
    </div>
  );
};

export default News;
