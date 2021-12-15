import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/main-menu.css'

import { connect } from 'react-redux';

import { userActions } from '../redux/_actions';

import {Component} from 'react'

const axios = require('axios').default;

class Login extends Component{

    state = {
        show_login:true,
        show_signup:false,
        username: "admin",
        password: "apishaya"
    }

  iniciar_sesion = () => {

    console.log(this.props)
    const { username, password } = this.state;
    if (username && password) {
        this.props.login(username, password);
    }
    //this.props.signIn({username: this.state.username, password: this.state.password})
  }

  registr = () => {

    const { regusername, regname, regapellidos, regemail, regpassword } = this.state;
    if (regusername && regname) {
        this.props.register({username: regusername, nombres: regname, apellidos: regapellidos, email: regemail, password: regpassword});
    }
  }

  handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }


    show_access=()=>{
        this.setState({
            show_login: !this.state.show_login,
            show_signup: !this.state.show_signup
        })
    }

    render() {
    return (
    <div className='modulo-login'>
        <div className='container center-all'>
            {this.state.show_login? 
            <div className='row login-area'>
                <div className='col-md-12 my-4'>
                    <input name = "username" value = {this.state.username} onChange = {this.handleChange}  className='form-control' placeholder='Usuario' />
                </div>
                <div className='col-md-12'>
                    <input name = "password" value = {this.state.password} onChange = {this.handleChange} className='form-control' placeholder='Contraseña' type='password' />
                </div>
                
                <div onClick = {this.iniciar_sesion} className='col-md-12 my-4'>
                    <a   className='btn btn-success float-center w-50'>Iniciar sesión</a>
                </div>
                <div className='col-md-12 my-2'>
                    <button onClick={this.show_access} className='btn btn-danger float-center w-50'>No tengo cuenta</button>
            <div style = {{color: "blue"}}> {this.props.message}</div>
                </div>
            </div>:null}

            {this.state.show_signup? 
            <div className='row login-area'>    
            <button onClick={this.show_access} className=' btn btn-danger my-2'>Volver</button>

                <div className='col-md-12 my-2'>
                    <input name = "regemail" value = {this.state.regemail} onChange = {this.handleChange} tye='email' className='form-control' placeholder='Correo'></input>
                </div>
                <div className='col-md-12 my-2'>
                    <input name = "regname" value = {this.state.regname} onChange = {this.handleChange} className='form-control' placeholder='Nombre'></input>
                </div>

                <div className='col-md-12 my-2'>
                    <input name = "regapellidos" value = {this.state.regapellidos} onChange = {this.handleChange} className='form-control' placeholder='Apellidos'></input>
                </div>

                <div className='col-md-12 my-2'>
                    <input name = "regusername" value = {this.state.regusername} onChange = {this.handleChange} className='form-control' placeholder='Nombre de Usuario'></input>
                </div>

                <div className='col-md-12 my-2'>
                    <input name = "regpassword" value = {this.state.regpassword} onChange = {this.handleChange} type='password' className='form-control' placeholder='Contraseña'></input>
                </div>

                <div className='col-md-12 my-2'>
                    <input type='password' className='form-control' placeholder='Confirmar contraseña'></input>
                </div>

                <div onClick = {this.registr} className='col-md-12 my-4'>
                    <button  className='btn btn-primary float-center'>Registrarme</button>
                </div>

            <div style = {{color: "blue"}}> {this.props.message}</div>
            </div>:null}
        </div>
    </div>

    )
    }
}


function mapState(state) {
    const { loggingIn } = state.authentication;
    const { message } = state.alert;
    return { loggingIn, message };
}

const actionCreators = {
    login: userActions.login,
    register: userActions.register,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(Login);
export { connectedLoginPage as Login };
