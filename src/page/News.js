import { Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import News1 from '../img/news1.jpg';
import News2 from '../img/news2.jpeg';
import News3 from '../img/news3.jpg';
import News4 from '../img/news4.jpg';

const News = ({ news }) => {
    function generateNews() {
        return news.map((news, index) => {
            return (
                <Col>
                    <Card style={{ width: '12rem' }}>
                        <Card.Img variant="top" src={news.image_url} height='150px' />
                        <Card.Body>
                            <Card.Title>{news.title}</Card.Title>
                            <Card.Text>
                                {news.short_description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
    }

    return (
        <>
            <Col>
                <Row>
                    {generateNews()}
                </Row>
            </Col>
        </>
    );
}

export default News;