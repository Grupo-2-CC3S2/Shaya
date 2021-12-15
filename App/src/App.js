import React from "react";
import { Routes } from "./components/router";

function App() {
  return (
    <Routes />
  );
}

export default App;

{/*import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css';

import Video from './Video'
import Home from './Home'
import Login from './components/Login'
import UserView  from './components/UserView'
import Perfil from './components/Profile'
import Pizarra from './components/Pizarra'
import SimpleForm from './components/SimpleForm'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div>
				<UserView/>
				<Router>
					<Switch>
						<Route path="/" exact component={Login} />
						<Route path="/mainHome/Perfil" exact component={Perfil} />
						<Route path="/mainHome/Pizarra" exact component={Pizarra} />
						<Route path="/mainHome/Home" exact component={Home} />
						<Route path="/mainHome/Home:url" component={Video} />
						<Route path="/mainHome/SimpleForm" exact component={SimpleForm} />
					</Switch>
				</Router>
			</div>
		)
	}
}

export default App;
*/}



