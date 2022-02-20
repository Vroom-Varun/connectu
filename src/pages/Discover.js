import { Card, Button } from "react-bootstrap";
import "./Discover.css"
import "bootstrap/dist/css/bootstrap.min.css";


const Discover = () => {
    const cardInfo = [
        { is_event: true, name: "Anthony", image: "", top_tags: "a, b, c", id: 1 },
        { is_event: true, name: "Amy", image: "", top_tags: "a, b, c", id: 2 },
        { is_event: true, name: "Casey", image: "", top_tags: "a, b, c", id: 3 }
    ];

    function RenderCard (props){
        return (
            <Card  style={{ width: '18rem' }} key={props.index}>
                {/* <Card.Img>src={card.image}</Card.Img> */}
                <Card.Title>{props.name}</Card.Title>
                <Card.Body>{props.top_tags}</Card.Body>
                <Button variant="primary">+</Button>
                <Button variant="primary">see profile</Button>
            </Card>
        );
    }
    return (
        <div className="Discover">
            <h1>AHHHHH</h1>
            <div className="cards">
                {/* {cardInfo.map(renderCard())} */}
                {cardInfo.map(card =>
                    <div className="card-position">
                        <RenderCard index={card.id} top_tags={card.top_tags} name={card.name}></RenderCard>
                    </div>
                )}
            </div>
        </div>
    );
}
export default Discover;
