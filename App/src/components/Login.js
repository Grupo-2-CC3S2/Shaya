import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/main-menu.css'

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
            <div className='row login-area'>
                <div className='col-md-12 my-4'>
                    <input className='form-control' placeholder='Usuario' />
                </div>
                <div className='col-md-12'>
                    <input className='form-control' placeholder='Contraseña' type='password' />
                </div>
                
                <div className='col-md-12 my-4'>
                    <a href='/mainHome' className='btn btn-success float-center w-50'>Iniciar sesión</a>
                </div>
                <div className='col-md-12 my-2'>
                    <button onClick={this.show_access} className='btn btn-danger float-center w-50'>No tengo cuenta</button>
                </div>
            </div>:null}

            {this.state.show_signup? 
            <div className='row login-area'>    
            <button onClick={this.show_access} className=' btn btn-danger my-2'>Volver</button>

                <div className='col-md-12 my-2'>
                    <input tye='email' className='form-control' placeholder='Correo'></input>
                </div>
                <div className='col-md-12 my-2'>
                    <input className='form-control' placeholder='Nombre'></input>
                </div>

                <div className='col-md-12 my-2'>
                    <input className='form-control' placeholder='Apellidos'></input>
                </div>

                <div className='col-md-12 my-2'>
                    <input className='form-control' placeholder='Nombre de Usuario'></input>
                </div>

                <div className='col-md-12 my-2'>
                    <input type='password' className='form-control' placeholder='Contraseña'></input>
                </div>

                <div className='col-md-12 my-2'>
                    <input type='password' className='form-control' placeholder='Confirmar contraseña'></input>
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