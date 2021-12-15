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


function currTime(){
    var today = new Date();
    return today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+' a las '+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
}

function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    return values;
}

//var boardComments=['Estoy dibujando', 'Este es mi nuevo comentario'];

var usr_names=['BrAsm']

class Pizarra extends Component{


    state = {
        size_pen: 1,
        boardComments:[],
        commentDate:[],
        pencilColor:"#000000",
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
        var my_msg = document.getElementById("personal_comment").value;
        this.setState({
            boardComments: this.state.boardComments.concat([my_msg]),
            commentDate: this.state.commentDate.concat([currTime()])
        })
        document.getElementById("personal_comment").value=''
    }

    setColor=()=>{
        var my_color = document.getElementById("pencil-color").value;
        this.setState({
            pencilColor: my_color,
        })
    }

    render() {    return(
            <div className='container'>
                <div className='row my-4'>
                    <div className='col-md-12'><h1>Pizarra</h1></div>

                    <div ref="drawArea" onMouseDown={this.handleMouseDown} onMouseMove={this.handleMouseMove}/>

                    <div className='col-md-8 row'>
                        <div className='col-12 my-4 div-canvas'>
                            <CanvasDraw className='my-canvas'
                                ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
                                brushRadius= {this.state.size_pen}
                                canvasWidth={1100}
                                canvasHeight={700}
                                brushColor={this.state.pencilColor}
                            />
                        </div>
                        <div className='draw-tools col-12'>
                            <input onChange={this.changeSize} type='number' value={this.state.size_pen} />
                            <input onChange={this.setColor} id='pencil-color' type='color' />
                            <button
                                onClick={() => {
                                  this.saveableCanvas.eraseAll();
                                }}
                            >
                                Borrar
                            </button>
                            <button
                                onClick={() => {
                                    //get board name
                                    var name = document.getElementById("boardKey").value;
                                    localStorage.setItem(
                                      {name},
                                      this.saveableCanvas.getSaveData()
                                    );
                                  }}
                            >Guardar</button>
                            <input placeholder='key' id='boardKey'></input>
                            {<p>
                                {allStorage()}
                            </p>}
                        </div>
                        <div className='col-11'><hr /></div>
                        <div className='col-10'>
                            <textarea 
                                id='personal_comment' 
                                placeholder={usr_names[0]} 
                                className='form-control p-4'
                            >
                            </textarea>
                        </div>
                        <div className='col-1'>
                            <button onClick={this.appendMsg} className='btn btn-primary my-4'>Enviar</button>
                        </div>
                        
                    </div>
                    <div className='col-md-4'>
                        <h3>Comentarios</h3>
                        <hr></hr>
                        {/*<p>----------21/12/2021----------</p>*/}
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
                                    <Alert.Heading><h5>{usr_names[0]}- {this.state.commentDate[idx]}</h5></Alert.Heading>
                                    <p>{variant}</p>
                                </Alert>
                            ))
                        }
                    </div>
                </div>
            </div>
        )}
}

export default Pizarra;