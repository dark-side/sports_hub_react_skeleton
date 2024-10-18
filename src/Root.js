import React, { useEffect } from 'react';
import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import App from './App';
import Header from './page/Headers';
import NewsArticle from './page/NewsArticle';
import Footer from './page/Footer';
import Sidebar from './page/Sidebars';

import { fetchNews } from './app/slices/newsSlice';

function Root() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/news/:id" element={<NewsArticle />} />
        </Route>
      </Routes>
    </Router>
  );
}

const colStyle = { marginLeft: '0', paddingLeft: '0' };
const rowStyle = { minHeight: '50px', border: 'solid grey 1px', borderTop: 'none' };

function Layout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <Container fluid>
      <Row>
        <Col lg="2">
          <Sidebar />
        </Col>

        <Col lg="10" style={colStyle}>
          <Row style={rowStyle}>
            <Header />
          </Row>

          <Outlet />
        </Col>
      </Row>

      <Row>
        <Footer />
      </Row>
    </Container>
  );
}

export default Root;
