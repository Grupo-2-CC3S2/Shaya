import React from 'react';
import Component from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import imgPerfil from './../profile_photos/perfil.png'
import '../assets/css/Perfil.css'

//test variables
var datos=['BrAsm','Bryan', 'Asmat', 'basmatf@uni.pe', '10/09/2021']

function Profile(props){
        return (
            <div id='profile-area'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 my-2'>
                            <h3>Mi Perfil</h3>
                            <p>ID: 15456454</p>
                        </div>
                        
                        <div className='col-md-6'>
                            <a><img title='Cambiar foto' id='profilePict' src={imgPerfil}></img></a>
                        </div>
                        <div className='col-md-6 peronal-info'>
                            <h5>Usuario: {datos[0]}</h5>
                            <h5>Nombre: {datos[1]}</h5>
                            <h5>Apellido: {datos[2]}</h5>
                            <h5>Correo: {datos[3]}</h5>
                            <h5>Fecha de creación: {datos[4]}</h5>
                            <button className='btn btn-danger my-2'>Editar</button>
                        </div>
                        <div className='col-md-12 my-4'><hr></hr></div>
                        <div className='col-md-6 board-area'>
                            <h3>Pizarras guardadas</h3>
                            <Carousel variant="dark">
                            <Carousel.Item>
                                <img
                                className="board-img"
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
                                className="board-img"
                                src="https://ideandoconsulting.com/wp-content/uploads/2018/06/shake-up-sales-meeting-og-768x402.jpg"
                                alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <button className='btn btn-success'>Ver</button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="board-img"
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
                            <div className='col-md-12'><h3>Historial</h3></div>
                            <div className='col-md-12'>
                                <button className='btn btn-outline-dark my-1 w-100'>Chatbot</button>

                            </div>
                            <div className='col-md-12'>
                                <button className='btn btn-outline-dark my-1 w-100'>Reuniones</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
}

export default Profile;