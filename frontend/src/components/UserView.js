import React from "react";

import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Row, Col, Container, Nav, Form, FormControl, Button  } from 'react-bootstrap';

import {Component} from 'react';

import Home from './Home';
import Profile from './Profile';
import ChatRooms from './ChatRooms';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";

class UserView extends Component {

  render(){
    return(
      <div className='cointainer-fluid'>
        <header>
          <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
              <Navbar.Brand href="/Profile">Mi Perfil</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '1000px' }}
                  navbarScroll
                >
                  <Nav.Link href="/">Inicio</Nav.Link>
                  <Nav.Link href="/Salas">Salas</Nav.Link>
                  <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#" disabled>
                    Link
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <body>
          <div>
           

            <Router>
              
              <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="/Salas" element={<ChatRooms />}></Route>
                </Routes>
              </div>
            </Router>
          </div>

        </body>
        
      </div>
    )
  }
}

export default UserView;