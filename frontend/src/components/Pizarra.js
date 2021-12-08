import React from "react";
import {Component} from "react";

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

var usr_names=['usr2324, juan090, abc2324']
var date_

class Pizarra extends Component{

    state = {
        isDrawing: false,
        lines: []
    }

    handleMouseDown = (event) => {
        
        if (event.button !== 0){
            //const point = this.relativeCoordinatesForEvent(event);
            return point;
        } 

        const point = this.relativeCoordinatesForEvent(event);

        this.setState(prevState => {
            return {
              lines: prevState.lines.push([point]),
              isDrawing: true
            }
        })
    }

    relativeCoordinatesForEvent(event) {
        const boundingRect = this.refs.drawArea.getBoundingClientRect();
        
        return new Map({
          x: event.clientX - boundingRect.left,
          y: event.clientY - boundingRect.top,
        });
    }

    render() {    return(
            <div className='container'>
                <div className='row my-4'>
                    <h1>Pizarra</h1>

                    <div ref="drawArea" onMouseDown={this.handleMouseDown} onMouseMove={this.handleMouseMove}/>

                    <div className='col-8 row'>
                        <div className='col-12 row'>
                            <canvas className='col-md-12 overflow'>

                            </canvas>
                        </div>
                        <div className='col-12'>
                            <input></input><button>Enviar</button>
                        </div>
                    </div>
                    <div className='col-4'>
                        <p>Historial de mensajes</p>
                        <p>----------21/12/2021----------</p>
                        {
                            color_alerts.map((variant, idx) => (
                                <Alert key={idx} variant={variant}>
                                This is a {variant} alert with{' '}
                                <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
                                like.
                                </Alert>
                            ))
                        }
                    </div>
                </div>
            </div>
        )}
}

export default Pizarra;