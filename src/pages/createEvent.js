import { Card, Button } from "react-bootstrap";
import "./createEvent.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'

const CreateEvent = () => {
    return (
        <div>
            <Row>
                <Col>
                </Col>
                <Col>
                <div className="title-wrapper">
                    <h1>Create An Event</h1>
                </div>
                </Col>
                <Col>
                </Col>
            </Row>
            
            <div className="connections-box">
            <Container>
                <Form>
                    <Row>
                        <Col>
                        </Col>
                        <Col>
                        <Form.Group as={Col} controlId="formGridEventName">
                            <Form.Label>Event Name</Form.Label>
                            <Form.Control type="event_name" placeholder="Enter event name" />
                            </Form.Group>

                            <Row>
                                <Form.Group as={Col} controlId="formGridEventInfo">
                                <Form.Label>Event Info</Form.Label>
                                <Form.Control type="event_info" placeholder="Event information..." />
                                </Form.Group>
                            </Row>

                            <Form.Group as={Col} controlId="formGridProfilePicture">
                                <Form.Label>Event Picture URL</Form.Label>
                                <Form.Control type="text" placeholder="Picture URL..." />
                            </Form.Group>
                        
    
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridStartDate">
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control type="date" placeholder="Event Start Date" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEndDate">
                            <Form.Label>End Date</Form.Label>
                            <Form.Control type="date" placeholder="Event End Date" />
                            </Form.Group>
                            </Row>

                            <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridStartTime">
                            <Form.Label>Start Time</Form.Label>
                            <Form.Control type="time" placeholder="Event Start Time" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEndTime">
                            <Form.Label>End Time</Form.Label>
                            <Form.Control type="time" placeholder="Event End Time" />
                            </Form.Group>
                            </Row>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                        
                            
                    
                </Form>
            </Container>
            </div>
        </div>
    );
}
export default CreateEvent;
