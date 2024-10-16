import Card from 'react-bootstrap/Card';

import { Col, Row, Image } from 'react-bootstrap';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const Breakdown = (params) => {
  function generateNews() {
    const news = [
      {
        title: params.news[0].title,
        text: params.news[0].short_description,
        img: `${ASSETS_URL}/${params.news[0].image_url}`,
      },
      {
        title: params.news[1].title,
        text: params.news[1].short_description,
        img: `${ASSETS_URL}/${params.news[1].image_url}`,
      },
      {
        title: params.news[2].title,
        text: params.news[2].short_description,
        img: `${ASSETS_URL}/${params.news[2].image_url}`,
      },
    ];
    return news.map((news, index) => {
      return (
        <>
          <div className="news-item" style={{ marginBottom: '10px', marginTop: '10px' }}>
            <Image src={news.img} rounded height="100px" width="120px" />
            <div>
              <h2>{news.title}</h2>
              <p>{news.text}</p>
            </div>
          </div>
        </>
      );
    });
  }
  return (
    <>
      <Row>
        <Col>
          <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={`${ASSETS_URL}/${params.news[0].image_url}`} />
            <Card.Body>
              <Card.Title>{params.news[0].title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>{generateNews()}</Col>
      </Row>
    </>
  );
};

export default Breakdown;
