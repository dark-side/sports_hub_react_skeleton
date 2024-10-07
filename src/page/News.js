import { Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const News = ({ news }) => {
    function generateNews() {
        return news.map((news, index) => {
            return (
                <Col>
                    <Card style={{ width: '12rem' }}>
                        <Card.Img variant="top" src={`${ASSETS_URL}/${news.image_url}`} height='150px' />
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
