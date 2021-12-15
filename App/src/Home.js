import React, { Component } from 'react';
import { Input, Button, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./Home.css"

class Home extends Component {
  	constructor (props) {
		super(props)
		this.state = {
			url: ''
		}
	}

	handleChange = (e) => this.setState({ url: e.target.value })

	join = () => {
		if (this.state.url !== "") {
			var url = this.state.url.split("/mainHome/Home/")
			window.location.href = `/mainHome/Home:${url[url.length-1]}`
		} else {
			var url = Math.random().toString(36).substring(2, 7)
			window.location.href = `/mainHome/Home:${url}`
		}
	}

	render() {
		return (
			<div className="container2">
				<div >
          <img style = {{ margin: "30px auto", height: "200px", width: "200px"}} src = {"https://raw.githubusercontent.com/Grupo-2-CC3S2/Shaya/main/App/src/profile_photos/logo.png"}></img>
				</div>
				
				<div>
					<p style={{ fontWeight: "200" }}>Video conferencia para los usuarios.</p>
				</div>

				<div style={{
					background: "white", width: "30%", height: "auto", padding: "20px", minWidth: "400px",
					textAlign: "center", margin: "auto", marginTop: "100px"
				}}>
					<p style={{ margin: 0, fontWeight: "bold", paddingRight: "50px" }}>Crea o únete a una reunión</p>
					<Input placeholder="URL" onChange={e => this.handleChange(e)} />
					<Button variant="contained" color="primary" onClick={this.join} style={{ margin: "20px" }}>Ir</Button>
				</div>
			</div>
		)
	}
}

export default Home;
