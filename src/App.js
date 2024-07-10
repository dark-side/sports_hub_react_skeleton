import logo from './logo.svg';
import './App.css';
import Header from './page/header';
import Sidebar from './page/sidebar';
import Carousel from './page/Carousel';
import News from './page/News';
import Breakdown from './page/Breakdown';
import PhotoOfTheDay from './page/PhotoOfTheDay';
import MostPopular from './page/MostPopular';
import MostCommented from './page/MostCommented';
import Footer from './page/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Col, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from './app/slices/newsSlice';
import { useEffect, useCallback } from 'react';


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
        <Col lg="10" style={{ marginLeft: '0', paddingLeft: '0' }}>
          <Row style={{ minHeight: '50px', border: 'solid grey 1px', borderTop: 'none' }}>
            <Header />
          </Row>
          <Row style={{ marginTop: '50px' }}>
            <Col lg='8'>
              {allNews.length > 0 ? <Carousel news={allNews} /> : <p>Loading...</p>}
            </Col>

          </Row>

          <Row style={{ marginTop: '50px' }}>
            {allNews.length > 0 ? <News news={allNews} /> : <p>Loading...</p>}
          </Row>

          <div class="line-with-text" style={{ marginTop: '50px' }}>
            <span>Breakdown</span>
          </div>


          <Row style={{ marginTop: '50px' }}>
            <Row>
              {allNews.length > 0 ? <Breakdown news={allNews.slice(0, 3)} /> : <p>Loading...</p>}
            </Row>

            <Row style={{ marginTop: '50px' }}>
              {allNews.length > 0 ? <Breakdown news={allNews.slice(2, 5)} /> : <p>Loading...</p>}
            </Row>
          </Row>

          <div class="line-with-text" style={{ marginTop: '50px', marginBottom: '50px' }}>
            <span>Photo of the Day</span>
          </div>

          {allNews.length > 0 ? <PhotoOfTheDay news={allNews[2]} /> : <p>Loading...</p>}

          <Row style={{ marginTop: '50px' }}>
            <Col style={{ marginBottom: '50px' }}>
              <div class="line-with-text">
                <span>Most Popular</span>
              </div>
              {allNews.length > 0 ? <MostPopular news={allNews} /> : <p>Loading...</p>}
            </Col>

            <Col style={{ marginBottom: '50px' }}>
              <div class="line-with-text">
                <span>Most Commented</span>
              </div>
              <MostCommented />
            </Col>
          </Row>

          <hr />

          <Row>
            <Col>
              <h3>Company Info</h3>
              <p>About Sport Hub</p>
              <p>News</p>
              <p>Advertising</p>
              <p>Events</p>
              <p>Contact US</p>
              <p>News</p>


            </Col>
            <Col>
              <h3>Contributors</h3>
              <p>Featured Writters Program</p>
              <p>Featured Team Writters Program</p>
              <p>Intership Program</p>
            </Col>
            <Col>
              <h3>Newsletters</h3>
              <p>Sigh up to receive the latest sports news</p>
              <div>
                <input type="text" placeholder="Email Address" style={{ height: '40px', borderRight: 'none' }} />
                <button style={{ background: 'red', color: 'white', border: 'solid black 1px', height: '40px', borderLeft: 'none' }}>Subscribe</button>
              </div>
            </Col>
          </Row>

        </Col>
      </Row>
      <Footer />
    </>
  );
}

export default App;
