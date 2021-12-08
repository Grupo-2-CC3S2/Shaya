import React from "react";
import {Component} from "react";
import CanvasDraw from "react-canvas-draw";

import './../assets/css/Pizarra.css'

import 'bootstrap/dist/css/bootstrap.css';
import Alert from 'react-bootstrap/Alert'


//test variables
var color_alerts=[
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]

//var boardComments=['Estoy dibujando', 'Este es mi nuevo comentario'];

var usr_names=['BrAsm']

class Pizarra extends Component{

    state = {
        size_pen: 1,
        boardComments:['Estoy dibujando', 'Este es mi nuevo comentario'],
        isDrawing: false,
        lines: []
    }

    changeSize=(event)=>{
        this.setState({
            size_pen: event.target.value
        })
    }

    clearBoard=()=>{
        var canvas = document.getElementById("myCanvas");
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height); //clear html5 canvas
        }

    appendMsg=()=>{
        this.setState({
            boardComments: this.state.boardComments.concat(['nuevo mensaje'])
        })
    }

    render() {    return(
            <div className='container'>
                <div className='row my-4'>
                    <div className='col-md-12'><h1>Pizarra</h1></div>

                    <div ref="drawArea" onMouseDown={this.handleMouseDown} onMouseMove={this.handleMouseMove}/>

                    <div className='col-md-8 row'>
                        <div className='col-12 row p-4'>
                            <CanvasDraw id=' ' className='col-md-12 overflow'
                                brushRadius= {this.state.size_pen}
                            />
                        </div>
                        <div className='draw-tools col-12'>
                            <input onChange={this.changeSize} type='number' value={this.state.size_pen} />
                            <button onClick={this.clearBoard}>Limpiar</button>
                        </div>
                        <div className='col-11'><hr /></div>
                        <div className='col-10'>
                            <textarea placeholder={usr_names[0]} className='form-control p-4'>

                            </textarea>
                        </div>
                        <div className='col-1'>
                            <button onclick={this.appendMsg} className='btn btn-primary my-4'>Enviar</button>
                        </div>
                        
                    </div>
                    <div className='col-md-4'>
                        <p>Historial de mensajes</p>
                        <p>----------21/12/2021----------</p>
                        {/*
                            color_alerts.map((variant, idx) => (
                                <Alert key={idx} variant={variant}>
                                This is a {variant} alert with{' '}
                                <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
                                like.
                                </Alert>
                            ))
                        */}
                        {
                            this.state.boardComments.map((variant, idx) => (
                                <Alert key={idx} variant='success'>
                                <Alert.Link href="#">{usr_names[0]}: </Alert.Link>
                                 {variant}
                                </Alert>
                            ))
                        }
                    </div>
                </div>
            </div>
        )}
}

export default Pizarra;