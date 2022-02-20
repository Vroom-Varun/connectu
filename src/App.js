import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Connect U</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/discoverpeople">Discover People</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link href="#deets">Messages</Nav.Link>
                <Nav.Link href="/createevent"><Button variant="success">Create Event</Button></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
