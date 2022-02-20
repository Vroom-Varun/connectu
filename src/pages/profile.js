import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './profile.css'
import { Card, Button } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Profile = () => 
{
  /*
  const [imgPreview, setImgPreview] = useState(null);
  const [error, setError] = useState(false);


  const handleImageChange = (e) =>{
    const selected = e.target.files[0];
    const TYPES_ALLOWED = ["image/png", "image/jpeg", "image/jpg"];
    if(selected && TYPES_ALLOWED.includes(selected.type)){
      let reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(selected);
      }
      reader.readAsDataURL(selected);
    } else {
      setError(true);
    }
  }
  */

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

  return(
    <body> 
      <div id="PictureBox">
        <img src="https://picsum.photos/id/237/200/300" alt="Profile Picture" id="ProfilePic"/>
      </div>
      <article id="BioBox">
        <h1>Bill Billington Billards</h1>
        <text>"Hello, my name is Bill and I love some thicc peaches. They are my favourite fruits."</text>
      </article>
      <h2>Bill's Recent Events</h2>
      <section id="EventBox">
        <Row xs={1} md={3} className="g-4">
          {cardInfo.map(card =>
            <Col>
              <RenderCard index={card.id} top_tags={card.top_tags} name={card.name}></RenderCard>
            </Col>
          )}
        </Row>
      </section>
    </body>
  );
}

export default Profile;