import React from 'react';
import Component from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import imgPerfil from './../profile_photos/perfil.png'
import '../assets/css/Perfil.css'

const axios = require('axios').default;

function Profile(props){

  const obtenerDatosDelUsuario = () => {

    axios({
        method: "get",
        url: "http://localhost:4001/api/users/profile",
        data: {},
        //headers: { "Content-Type": "multipart/form-data", 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZWI4NjExZmYzMTQ1NzVjNzZkOTg2NSIsImlhdCI6MTYyNjE0ODkzNywiZXhwIjoxNjI2MjM1MzM3fQ.YvHD8LJlcmADp-MWuGfTIcaAk8ak73G6qZgX-6Fpa30'},
        //x-access-token
        headers: { "Content-Type": "application/json", 'x-access-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZWI4NjExZmYzMTQ1NzVjNzZkOTg2NSIsImlhdCI6MTYzODk4MDY5MiwiZXhwIjoxNjM5MDY3MDkyfQ.6lWoK9--CAA7YsYccqaxGDZdY4mv1YACJIOyBTva8wc"/*window.localStorage.getItem("token")*/},
      })
        .then((response) => {
          //handle success
          console.log("response",response);
          //this.setState({ session: true, userData: response.data })
        })
        .catch((e) => {
          //handle error
          //this.setState({ session: false })
          if (e.response) {
            //if (e.response.status) 
            //    this.setState({ session: false })
            console.log("response: ",e.response.data.message);
          }else {

            console.log("Error: ",e);
          }
      });

   

  }



        return (
            <>
                <div className='container'>
                    <div className='row'>
                        <h1>Mi Perfil</h1>
                        <div className='col-md-6'>
                            <img id='profilePict' src={imgPerfil}></img>
                            <h3>ID de Usuario:</h3>
                        </div>
                        <div className='col-md-6'>
                            <h3>Usuario:</h3>
                            <h3>Nombre:</h3>
                            <h3>Apellido:</h3>
                            <h3>Correo:</h3>
                            <h3>Fecha de creación:</h3>
                            <button className='btn btn-danger'>Editar</button>
                        </div>
                        <div className='col-md-12 my-4'><hr></hr></div>
                        <div className='col-md-6'>
                            <h3>pizarras</h3>
                            <Carousel variant="dark">
                            <Carousel.Item>
                                <img
                                className="d-block w-100 board-img"
                                src="https://ideandoconsulting.com/wp-content/uploads/2018/06/shake-up-sales-meeting-og-768x402.jpg"
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                {/*<h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                                    <button className='btn btn-success'>Ver</button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100 board-img"
                                src="https://ideandoconsulting.com/wp-content/uploads/2018/06/shake-up-sales-meeting-og-768x402.jpg"
                                alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <button className='btn btn-success'>Ver</button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100 board-img"
                                src="https://ideandoconsulting.com/wp-content/uploads/2018/06/shake-up-sales-meeting-og-768x402.jpg"
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <button className='btn btn-success'>Ver</button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className='col-md-6 row'>
                            <h3>Historial</h3>
                            <div className='col-md-12'>
                                <button className='btn btn-outline-dark my-1 w-100'>Chatbot</button>

                            </div>
                            <div className='col-md-12'>
                                <button className='btn btn-outline-dark my-1 w-100'>Ejercicios</button>
                                
                            </div>
                            <div className='col-md-12'>
                                <button className='btn btn-outline-dark my-1 w-100'>Reuniones</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </>
        )
}

export default Profile;
