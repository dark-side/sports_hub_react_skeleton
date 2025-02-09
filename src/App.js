import './App.css';
import { Col, Row } from 'react-bootstrap';

import { useSelector } from 'react-redux';

import Carousel from './page/Carousel';
import News from './page/News';
import Breakdown from './page/Breakdown';
import PhotoOfTheDay from './page/PhotoOfTheDay';
import MostPopular from './page/MostPopular';
import MostCommented from './page/MostCommented';
import CompanyInfo from './page/CompanyInfo';
import Contributors from './page/Contributors';
import Newsletters from './page/Newsletters';

const marginTopStyle = { marginTop: '50px' };
const marginBottomStyle = { marginBottom: '50px' };
const lineWithTextStyle = { marginTop: '50px', marginBottom: '50px' };

function App() {
  const allNews = useSelector((state) => state.news.news);

  return (
    <>
      <Row style={marginTopStyle}>
        <Col lg="12">{allNews.length > 0 ? <Carousel news={allNews} /> : <p>Loading...</p>}</Col>
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
        <Col style={marginBottomStyle}>{allNews.length > 0 ? <MostPopular news={allNews} /> : <p>Loading...</p>}</Col>

        <Col style={marginBottomStyle}>{allNews.length > 0 ? <MostCommented news={allNews} /> : <p>Loading...</p>}</Col>
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
    </>
  );
}

export default App;
