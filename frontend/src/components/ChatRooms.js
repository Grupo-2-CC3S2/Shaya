import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/css/chatrooms.css'
import imgPlus from '../assets/icons/icon-plus.png'

import {BsPlus, BsLink } from "react-icons/bs";

function ChatRooms(){
    return(
        <div className='container'>
            <div className='row my-4'>
                {/*Div reuniones */}
                <div className='div-meetings col-md-5 my-2 m-4'>
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
                            <input className='form-control' placeholder='Ingresa el link de la reunión'></input>
                        </div>
                        
                    </div>
                </div>

                {/*Div chats */}
                <div className='col-md-5 modulo'>
                    <h2>En línea (0)</h2>
                </div>

                {/*saved */}
                <div className='col-md-6'>
                    <h3>Pizarras guardadas</h3>
                </div>

                {/*Chatbot */}
                <div className='col-md-6'>
                    <h3>Habla con Shaya</h3>
                </div>
            </div>
        </div>

    )
}

export default ChatRooms;