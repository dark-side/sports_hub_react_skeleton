// Bootstrap import
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Pages import
import Header from './page/Headers';
import Sidebar from './page/Sidebars';
import Carousel from './page/Carousel';
import News from './page/News';
import Breakdown from './page/Breakdown';
import PhotoOfTheDay from './page/PhotoOfTheDay';
import MostPopular from './page/MostPopular';
import MostCommented from './page/MostCommented';
import CompanyInfo from './page/CompanyInfo';
import Contributors from './page/Contributors';
import Newsletters from './page/Newsletters';
import Footer from './page/Footer';

// Redux import
import { fetchNews } from './app/slices/newsSlice';

const colStyle = { marginLeft: '0', paddingLeft: '0' };
const rowStyle = { minHeight: '50px', border: 'solid grey 1px', borderTop: 'none' };
const marginTopStyle = { marginTop: '50px' };
const marginBottomStyle = { marginBottom: '50px' };
const lineWithTextStyle = { marginTop: '50px', marginBottom: '50px' };

function App() {
  const dispatch = useDispatch();
  const allNews = useSelector((state) => state.news.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <>
      <Row>
        <Col lg="2">
          <Sidebar />
        </Col>
        <Col lg="10" style={colStyle}>
          <Row style={rowStyle}>
            <Header />
          </Row>
          <Row style={marginTopStyle}>
            <Col lg="8">{allNews.length > 0 ? <Carousel news={allNews} /> : <p>Loading...</p>}</Col>
          </Row>

          <Row style={marginTopStyle}>{allNews.length > 0 ? <News news={allNews} /> : <p>Loading...</p>}</Row>

          <Row style={marginTopStyle}>
            <div className="line-with-text" style={lineWithTextStyle}>
              <span>Breakdown</span>
            </div>
            <Row>{allNews.length > 0 ? <Breakdown news={allNews.slice(0, 3)} /> : <p>Loading...</p>}</Row>

            <Row style={marginTopStyle}>
              {allNews.length > 0 ? <Breakdown news={allNews.slice(2, 5)} /> : <p>Loading...</p>}
            </Row>
          </Row>

          {allNews.length > 0 ? <PhotoOfTheDay news={allNews[2]} /> : <p>Loading...</p>}

          <Row style={marginTopStyle}>
            <Col style={marginBottomStyle}>
              {allNews.length > 0 ? <MostPopular news={allNews} /> : <p>Loading...</p>}
            </Col>

            <Col style={marginBottomStyle}>
              {allNews.length > 0 ? <MostCommented news={allNews} /> : <p>Loading...</p>}
            </Col>
          </Row>

          <hr />

          <Row>
            <Col>
              <CompanyInfo />
            </Col>
            <Col>
              <Contributors />
            </Col>
            <Col>
              <Newsletters />
            </Col>
          </Row>
        </Col>
      </Row>
      <Footer />
    </>
  );
}

export default App;
