import logo from './logo.svg';
import './App.css';
import './assets/main-menu.css'

//import Modal from './components/Modal'
import Login from './components/Login'
import Modal from "react-bootstrap/Modal";
import UserView from './components/UserView';

import 'bootstrap/dist/css/bootstrap.css';

import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import { useState } from 'react';
import React,{Component} from 'react'

class App extends Component {

  state = {
    isOpen:false,
    title:"Transitioning...",
    setTitle:"Transitioning..."
  }

  //Modal functions
  handleShow = ()=>{
    this.setState({
        isOpen: true
      })
  }

  handleHide = () =>{
    this.setState({
        isOpen:false
      })
  }
  
  render() {
  return (
    <div className='main-page'>

      <header>
        <div className='top-bar container-fluid'>
          <div className='row'>
            <div className='col-6'>
              <img className='logo_header' src='logo_shaya.png'></img>
            </div>
            <div className='col-6'>
              <button className=' btn btn-primary float-right my-4' onClick={this.handleShow}>Iniciar sesión</button>
            </div>
          </div>
        </div>
      </header>

      <body className='main-page'>
        <div className='body-bar'>
        {/*MODAL BOOTSTRAP*/}
        <Modal show={this.state.isOpen} className='modal-login2'>
          <div className='modal-login'>
          <Modal.Header>
              <div className='col-6'>
                <h4>Ingresar</h4>
              </div>
              <div className='col-6'>
                <button onClick={this.handleHide} className='btn btn-light float-right'><CloseIcon /></button>
              </div>
            {/*<Modal.Title>Ingresar</Modal.Title>*/}
          </Modal.Header>
          <Modal.Body>
            <div className='row'>
                <div className='col-md-12 my-2'>
                    <center><img className='float-center logo_header' src='logo_shaya2.png'></img></center>
                </div>
            </div>
            <Login />
          </Modal.Body>
          {/*<Modal.Footer>
          </Modal.Footer>*/}
          </div>
        </Modal>

        {/*body contente*/}
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6 my-2'>
              <h1>CREA TUS PIZARRAS</h1>
            </div>
            <div className='col-md-6 my-2'>
              <center><img className='info-imgs my-2' src='old_pizarra.jpg'></img></center>
            </div>
            <div className='col-md-6 my-2'>
              <center><img className='info-imgs my-2' src='assistant.webp'></img></center>
            </div>
            <div className='col-md-6 my-2'>
              <h1>CONOCE A SHAYA</h1>
            </div>
            <div className='col-md-6 my-2'>
              <h1>Estudia con tus amigos y con ayud</h1>
            </div>
            <div className='col-md-6 my-2'>
              <center><img className='info-imgs my-2' src='studying.jpg'></img></center>
            </div>
          </div>
        </div>
        </div>
      </body>
      
      {/* keep user view for a while */}
      <div>
          <UserView/>
      </div>


    </div>
  );
  }
}

export default App;
