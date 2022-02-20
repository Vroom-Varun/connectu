import { Card, Button } from "react-bootstrap";
import "./Discover.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Discover = () => {
    const cardInfo = [
        { is_event: true, name: "Anthony", image: "", top_tags: "a, b, c", id: 1 },
        { is_event: true, name: "Amy", image: "", top_tags: "a, b, c", id: 2 },
        { is_event: true, name: "Casey", image: "", top_tags: "a, b, c", id: 3 }
    ];

    function RenderCard(props) {
        return (
            <Card style={{ width: '18rem' }} key={props.index}>
                <Card.Title>{props.name}</Card.Title>
                <Card.Body>{props.top_tags}</Card.Body>
                <div className="button-wrapper">
                    <Button variant="primary">+</Button>
                </div>
                <div className="button-wrapper">
                    <Button variant="primary">see profile</Button>
                </div>
            </Card>
        );
    }
    return (
        <div>
            <div className="title-wrapper">
                <h1>Discover Connections</h1>
            </div>
            <div className="connections-box">
                <Row xs={1} md={3} className="g-4">
                    {cardInfo.map(card =>
                        <Col>
                                <RenderCard index={card.id} top_tags={card.top_tags} name={card.name}></RenderCard>
                        </Col>
                    )}
                </Row>
            </div>
        </div>
    );
}
export default Discover;
