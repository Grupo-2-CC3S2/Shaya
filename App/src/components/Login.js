import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/main-menu.css'

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
    axios({
        method: "post",
        url: "http://localhost:4001/api/auth/signin",
        data: {
          username: this.state.username,
          password: this.state.password
        },
        headers: { "Content-Type": "application/json", 'Authorization': 'ayJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZWI4NjExZmYzMTQ1NzVjNzZkOTg2NSIsImlhdCI6MTYyNjE0ODkzNywiZXhwIjoxNjI2MjM1MzM3fQ.YvHD8LJlcmADp-MWuGfTIcaAk8ak73G6qZgX-6Fpa30'},
        //headers: { "Content-Type": "multipart/form-data", 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZWI4NjExZmYzMTQ1NzVjNzZkOTg2NSIsImlhdCI6MTYyNjE0ODkzNywiZXhwIjoxNjI2MjM1MzM3fQ.YvHD8LJlcmADp-MWuGfTIcaAk8ak73G6qZgX-6Fpa30'},
        //x-access-token
        //headers: { "Content-Type": "application/json"},
      })
        .then((response) => {
          //handle success
          console.log(response);
          if (response.data) {
            console.log("token: ", response.data.token)
            window.localStorage.setItem("token", response.data.token);

			      window.location.href = `/mainHome/Perfil`
            //this.obtenerDatosDelUsuario()
          }
        })
        .catch((e) => {
          //handle error
          if (e.response) {
            console.log("response: ", e.response.data.message);
          }
      });

  }


registrar = () => {
    axios({
        method: "post",
        url: "http://localhost:4001/api/auth/signup",
        data: {
          username: this.state.usernamere, 
          nombres: this.state.nombresre, 
          apellidos: this.state.apellidosre, 
          email: this.state.emailre, 
          password: this.state.passwordre 
      
        },
        headers: { "Content-Type": "application/json", 'Authorization': 'ayJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZWI4NjExZmYzMTQ1NzVjNzZkOTg2NSIsImlhdCI6MTYyNjE0ODkzNywiZXhwIjoxNjI2MjM1MzM3fQ.YvHD8LJlcmADp-MWuGfTIcaAk8ak73G6qZgX-6Fpa30'},
        //headers: { "Content-Type": "multipart/form-data", 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZWI4NjExZmYzMTQ1NzVjNzZkOTg2NSIsImlhdCI6MTYyNjE0ODkzNywiZXhwIjoxNjI2MjM1MzM3fQ.YvHD8LJlcmADp-MWuGfTIcaAk8ak73G6qZgX-6Fpa30'},
        //x-access-token
        //headers: { "Content-Type": "application/json"},
      })
        .then((response) => {
          //handle success
          console.log(response);
          if (response.data) {
            console.log("token: ", response.data.token)
            window.localStorage.setItem("token", response.data.token);

			      window.location.href = `/mainHome/Perfil`
            //this.obtenerDatosDelUsuario()
          }
        })
        .catch((e) => {
          //handle error
          if (e.response) {
            console.log("response: ", e.response.data.message);
          }
      });

  }



  changeUsername = (event) => {
    this.setState({username: event.target.value})
  }

  changePassword = (event) => {
    this.setState({password: event.target.value})
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
                    <input value = {this.state.username} onChange = {this.changeUsername}  className='form-control' placeholder='Usuario' />
                </div>
                <div className='col-md-12'>
                    <input value = {this.state.password} onChange = {this.changePassword} className='form-control' placeholder='Contraseña' type='password' />
                </div>
                
                <div onClick = {this.iniciar_sesion} className='col-md-12 my-4'>
                    <a   className='btn btn-success float-center w-50'>Iniciar sesión</a>
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
