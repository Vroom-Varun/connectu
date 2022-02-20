import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './profile.css'
import { Card, Button } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Popup from 'reactjs-popup';

let clairshacking = "I am integrating the API and doing hacker stuff :)"

const Profile = () => 
{
  const cardInfo = [
    { is_event: true, eventname: "Volleyball Open Gym", image: "", contact_info: "Varun Sreepathy", id: 1, src: "https://img.olympicchannel.com/images/image/private/t_16-9_360-203_2x/f_auto/v1536936974/primary/exvzqcvorticinejmmel" },
    { is_event: true, eventname: "Hackathon", image: "", contact_info: "Danhiel Vu", id: 2, src: "https://news.microsoft.com/wp-content/uploads/prod/sites/45/2019/07/Teamshacking@Microsoft2019hackathon_-960x630.jpg" },
    { is_event: true, eventname: "Soccery Intramural", image: "", contact_info: "Zackary Holly", id: 3, src: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2021_39/3509790/211001-nwsl-matches-al-1259.jpg" }
  ];

  function RenderEvents(props) {
    return (
      <Card style={{ width: '18rem' }} key={props.index}>
        <Card.Img variant="top" src={props.src} />
        <Card.Title>{props.name}</Card.Title>
        <Card.Body>{props.contact_info}</Card.Body>
        <div className="button-wrapper">
          <Popup trigger={<Button variant="primary" onClick={() => (console.log("hey i'm in hell"))}>Expand Event</Button>} modal>
            <Card style={{ width: '30rem' }} >
              <Card.Body>Hey I got it working!</Card.Body>
            </Card>
          </Popup>
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
        <h1>Bork Borkington Borkers</h1>
        <text>Hello, my name is Bork and I love to chase tennis balls. I also love to chew on bones and sniff other dogs.</text>
      </article>
      <h2>Borks' Recent Events</h2>
      <section id="EventBox">
        <Row xs={1} md={3} className="g-4">
          {cardInfo.map(card =>
            <Col>
              <RenderEvents index={card.id} contact_info={card.contact_info} name={card.eventname} src={card.src}></RenderEvents>
            </Col>
          )}
        </Row>
      </section>
    </body>
  );
}

export default Profile;