import {Card, Button} from "react-bootstrap";
import "./Discover.css"

const Discover = () => {
    const cardInfo = [
        {is_event: true, name: "Anthony", image: "", top_tags: "a, b, c"},
        {is_event: true, name: "Anthony", image: "", top_tags: "a, b, c"},
        {is_event: true, name: "Anthony", image: "", top_tags: "a, b, c"}
    ];

    const renderCard = (card, index) => {
        return (
            <Card key={index}>
                {/* <Card.Img>src={card.image}</Card.Img> */}
                <Card.Title>{card.name}</Card.Title>
                <Card.Body>{card.top_tags}</Card.Body>
                <Button variant="primary">+</Button>
                <Button variant="primary">see profile</Button>
            </Card>
        );
    }
    return(
        <div className="Discover">  
            <h1>AHHHHH</h1>
            <div class="cards">
                {cardInfo.map(renderCard)}
            </div>
        </div>
    );
}
export default Discover;
