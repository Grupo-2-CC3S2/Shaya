import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions'

import { userActions } from '../../_actions';



import routes from './routes';
import { PrivateRoute } from "./types.js";

////////////////////////////////////////
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Row, Col, Container, Nav, Form, FormControl, Button  } from 'react-bootstrap';

import {Component} from 'react';

import Home from '../Home';
import Profile from '../Profile';
//import ChatRooms from './ChatRooms';
import Pizarra from '../Pizarra';



const Routes = (props) => {
  console.log("propiedaes", props)
  return (
    <Router>


    <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
      {props.loggedIn === true && (<>
              <Navbar.Brand href="/mainHome/Perfil">Mi Perfil</Navbar.Brand>
        </>)}
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '1000px' }}
                  navbarScroll
                >
                  <Nav.Link href="/">Inicio</Nav.Link>
      {props.loggedIn === true && (<>
                  <Nav.Link href="/Salas">Salas</Nav.Link>
                  <NavDropdown title="Iniciar" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/mainHome/Pizarra">Pizarra</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/mainHome/SimpleForm">Chat bot</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/mainHome/Home">Reunión</NavDropdown.Item>
                    <NavDropdown.Item onClick = {() => props.logout()}>Log Out</NavDropdown.Item>
                  </NavDropdown>
        </>)}
                </Nav>

                {/*<Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Buscar ejercicios"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Buscar</Button>
                </Form>*/}
              </Navbar.Collapse>
            </Container>
          </Navbar>

      <div>
    {/*
        <nav>

          <ul>
      {props.loggedIn === true && (
        <>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
          </>
        )}
            <li>
              <Link to="/login">Login</Link>
            </li>
  
          </ul>
        </nav>
        */}

        <Switch>
          {routes.private.map(({ path, component, name }) => {console.log("compop", component);
            return (
            <PrivateRoute exact key={name} path={path} component={component} />
          )})}
          {routes.public.map(({path, component, name}) => {console.log("compo", component);
            return (
            <Route exact path={path} component={component} key={name} />
          )})}
        </Switch>
      </div>
    </Router>
  )
}

//export default Routes

function mapState(state) {
    const { loggedIn } = state.authentication;
    return { loggedIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(Routes);
export { connectedLoginPage as Routes };
