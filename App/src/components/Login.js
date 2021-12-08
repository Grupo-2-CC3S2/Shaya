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
            <div className='row'>
                <div className='col-md-12 my-4'>
                    <input></input>
                </div>
                <div className='col-md-12'>
                    <input></input>
                </div>
                
                <div className='col-md-12 my-4'>
                    <a href='/mainHome' className='btn btn-success float-center'>Iniciar sesión</a>
                </div>
                <div className='col-md-12 my-2'>
                    <button onClick={this.show_access} className='btn btn-danger float-center'>No tengo cuenta</button>
                </div>
            </div>:null}

            {this.state.show_signup? 
            <div className='row'>    
            <button onClick={this.show_access} className=' btn btn-light'>Volver</button>

                <div className='col-md-12 my-2'>
                    <input></input>
                </div>
                <div className='col-md-12 my-2'>
                    <input></input>
                </div>

                <div className='col-md-12 my-2'>
                    <input></input>
                </div>

                <div className='col-md-12 my-2'>
                    <input></input>
                </div>

                <div className='col-md-12 my-2'>
                    <input></input>
                </div>
                
                <div className='col-md-12 my-2'>
                    <input></input>
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