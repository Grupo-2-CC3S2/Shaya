import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/main-menu.css'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import {Component} from 'react'

class Login extends Component{

    state = {
        show_login:true,
        show_signup:false,
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
            <div className='row'>
                <div className='col-md-12 my-4'>
                    <TextField
                    required
                    id="outlined-required"
                    label="Usuario"
                    />
                </div>
                <div className='col-md-12'>
                    <TextField
                    required
                    id="outlined-password-input"
                    label="Contraseña"
                    type="password"
                    autoComplete="current-password"
                    />
                </div>
                
                <div className='col-md-12 my-4'>
                    <button className='btn btn-success float-center'>Iniciar sesión</button>
                </div>
                <div className='col-md-12 my-2'>
                    <button onClick={this.show_access} className='btn btn-danger float-center'>No tengo cuenta</button>
                </div>
            </div>:null}

            {this.state.show_signup? 
            <div className='row'>    
            <button onClick={this.show_access} className=' btn btn-light'>Volver</button>

                <div className='col-md-12 my-2'>
                    <TextField
                    required
                    id="outlined-required"
                    label="Nombre"
                    />
                </div>
                <div className='col-md-12 my-2'>
                    <TextField
                    required
                    id="outlined-required"
                    label="Apellido"
                    />
                </div>

                <div className='col-md-12 my-2'>
                    <TextField
                    required
                    id="outlined-required"
                    label="Usuario"
                    />
                </div>

                <div className='col-md-12 my-2'>
                    <TextField
                    required
                    id="outlined-password-input"
                    label="Correo"
                    type="email"
                    autoComplete="current-password"
                    />
                </div>

                <div className='col-md-12 my-2'>
                    <TextField
                    required
                    id="outlined-password-input"
                    label="Contraseña"
                    type="password"
                    autoComplete="current-password"
                    />
                </div>
                
                <div className='col-md-12 my-2'>
                    <TextField
                    required
                    id="outlined-password-input"
                    label="Confirmar contraseña"
                    type="password"
                    autoComplete="current-password"
                    />
                </div>

                <div className='col-md-12 my-4'>
                    <button className='btn btn-primary float-center'>Registrarme</button>
                </div>
            </div>:null}
        </div>
    </div>

    )
    }
}

export default Login