import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css';

import Video from './Video'
import Home from './Home'
import Login from './components/Login'
import UserView  from './components/UserView'
import Perfil from './components/Profile'
import Pizarra from './components/Pizarra'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div>
				<UserView/>
				<Router>
					<Switch>
						<Route path="/" exact component={Login} />
						{/*<Route path="/mainHome" exact component={UserView} />*/}
						<Route path="/mainHome/Perfil" exact component={Perfil} />
						<Route path="/mainHome/Pizarra" exact component={Pizarra} />
						<Route path="/Home" exact component={Home} />
						<Route path="/Home:url" component={Video} />
					</Switch>
				</Router>
			</div>
		)
	}
}

export default App;