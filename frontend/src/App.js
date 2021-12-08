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
import SimpleForm from './components/SimpleForm';

class App extends Component {

  
  render() {
  return (
    <div>
      <SimpleForm/>
    </div>
  );
  }
}

export default App;
