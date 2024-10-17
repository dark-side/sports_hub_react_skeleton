import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

import { getImageUrl } from '../utils';

const SingleNews = () => {
  const { id } = useParams();

  const newsItem = useSelector((state) => state.news.news.find((item) => Number(item.id) === Number(id)));

  if (!newsItem) {
    return <p>Loading...</p>;
  }
  console.log('newsItem', newsItem);

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src={getImageUrl(newsItem.image_url)} />
            <Card.Body>
              <Card.Title>{newsItem.title}</Card.Title>
              <Card.Text>{newsItem.content}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleNews;
