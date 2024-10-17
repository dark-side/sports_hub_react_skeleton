import { Col, Row, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import { getImageUrl } from '../utils';

const News = ({ news }) => {
  const navigate = useNavigate();

  function generateNews() {
    function handleCardClick(id) {
      navigate(`/news/${id}`);
    }

    return news.map((news, index) => {
      return (
        <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Card style={{ width: '100%', cursor: 'pointer' }} onClick={() => handleCardClick(news.id)}>
            <Card.Img variant="top" src={getImageUrl(news.image_url)} height="150px" />
            <Card.Body>
              <Card.Title>{news.title}</Card.Title>
              <Card.Text>{news.short_description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  }

  return (
    <Container>
      <Row>{generateNews()}</Row>
    </Container>
  );
};

export default News;
