import React from 'react'

import { useRef, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel'

import '../assets/css/chatrooms.css'
import imgPlus from '../assets/icons/icon-plus.png'

import {BsPlus, BsLink, BsMic, BsStopFill, BsArrowCounterclockwise } from "react-icons/bs";

function ChatRooms(){

    

    return(
        <div className='container'>
            <div className='row my-4'>
                <div className='col-md-8 row'>
                    {/*Div reuniones */}
                    <div className='div-meetings col-md-5 my-2 mx-4'>
                        <h2 className='my-4 sub-tit'><b>Reuniones</b></h2>
                        <div className='row my-4'>

                            <div className='col-2 my-2'>
                                <button className='btn btn-success btn-sm btn-plus p-0'><BsPlus color='white' size={55} /></button>
                            </div>
                            <div className='col-5 my-3'>
                                <button className='btn btn-success'>Programar</button>
                            </div>
                            <div className='col-5 my-3'>
                                <button className='btn btn-success'>Crear ahora</button>
                            </div>
                            <div className='col-2 my-2'>
                                <button className='btn btn-primary btn-sm btn-plus p-0'><BsLink color='white' size={55} /></button>
                            </div>

                            <div className='col-10 my-4'>
                                <input className='mx-1 form-control' placeholder='Ingresa el link de la reunión'></input>
                            </div>
                            
                        </div>
                    </div>

                    {/*saved */}
                    <div className=' mx-4 col-md-5 modulo'>
                        <h3>Pizarras guardadas</h3>
                        <div className='col-md-12 my-4'>
                            <Carousel variant="dark">
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="https://ideandoconsulting.com/wp-content/uploads/2018/06/shake-up-sales-meeting-og-768x402.jpg"
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                {/*<h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="https://ideandoconsulting.com/wp-content/uploads/2018/06/shake-up-sales-meeting-og-768x402.jpg"
                                alt="Second slide"
                                />
                                <Carousel.Caption>
                                
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="https://ideandoconsulting.com/wp-content/uploads/2018/06/shake-up-sales-meeting-og-768x402.jpg"
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                
                                </Carousel.Caption>
                            </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className='col-md-12'>
                            <button>Todo</button>
                        </div>
                    </div>

                    {/*Chatbot */}
                    <div className=' col-md-11 modulo my-4 mx-3'>
                        <h3>Habla con Shaya</h3>
                        <div className='col-md-12'>
                            <div className="microphone-wrapper">
                                <div className="mircophone-container">
                                    <div className="microphone-icon-container my-2">
                                    <button className='btn btn-dark'><BsMic/></button>
                                    </div>
                                    <div className="microphone-status">
                                    </div>
                                    <button className="microphone-stop btn btn-dark" >
                                    <BsStopFill/>
                                    </button>
                                </div>

                                    <div className="microphone-result-container">
                                    <div className="microphone-result-text">------------</div>
                                    <button className="microphone-reset btn btn-dark" >
                                        <BsArrowCounterclockwise/>
                                    </button>
                                    </div>

                                </div>
                        </div>
                    </div>
                </div>
                <div class='col-md-3'>
                    <div className='col-md-12 row modulo my-8 mx-3'>
                        <h5>Conectados (3)</h5>
                        <div className='col-md-12 my-2'>
                            <button class='btn btn-primary btn-sm'>Bryan</button>
                        </div> 
                        <div className='col-md-12 my-2'>   
                            <button class='btn btn-primary btn-sm'>Ronald</button>
                        </div>
                        <div className='col-md-12 my-2'>
                            <button class='btn btn-primary btn-sm'>Carlos</button>
                        </div>
                        <hr></hr>
                    </div>
                    
                </div>
            </div>
        </div>

    )
}

export default ChatRooms;