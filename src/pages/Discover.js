import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Discover.css"
import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SimpleSlider from "./SimpleSlider"
import Popup from 'reactjs-popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'




const Discover = () => {
    const [eventList, setEventList] = useState([]);

    useEffect(() => {
        const url = "http://localhost:8000/events";
        const fetchData = async () => {
            try {
                const response = await fetch(url, { mode: 'cors' });
                const json = await response.json();
                console.log(json);
                setEventList(json)
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);
    function RenderEvents(props) {
        return (
            <Card style={{ width: '18rem' }} key={props.index}>
                <Card.Img variant="top" src={props.src} />
                <Card.Title>{props.name}</Card.Title>
                <Card.Body>{props.first_name} {props.last_name}</Card.Body>
                <div className="button-wrapper">
                    <Popup trigger={<Button variant="primary" onClick={() => (console.log("hey i'm in hell"))}>Expand Event</Button>} modal>
                        <Card style={{ width: '30rem' }} >
                            <Card.Body>{props.name}</Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item><b>Start Time: </b> {props.starttime}</ListGroup.Item>
                                <ListGroup.Item><b>End Time: </b>{props.endtime}</ListGroup.Item>
                                <ListGroup.Item><b>Date: </b>{props.date}</ListGroup.Item>
                                <ListGroup.Item><b>Location: </b> {props.loc}</ListGroup.Item>
                                <ListGroup.Item><b>Interested: </b>{props.interested} <FontAwesomeIcon icon={faHeart} /></ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Popup>
                </div>
            </Card>
        );
    }
    return (
        <div>
            <div className="title-wrapper">
                <h1>Discover Popular Events</h1>
            </div>
            <SimpleSlider></SimpleSlider>
            <div className="connections-box">
                <Row xs={1} md={3} className="g-4">
                    {eventList.map(event =>
                        <Col>
                            <RenderEvents index={event.event_id} first_name={event.first_name} last_name={event.last_name}name={event.event_name} src={event.event_image_url} starttime={event.start_time} endtime={event.end_time} date={event.begin_date} loc={event.event_site} interested={event.interested}></RenderEvents>
                        </Col>
                    )}
                </Row>
            </div>
        </div>
    );
}
export default Discover;
