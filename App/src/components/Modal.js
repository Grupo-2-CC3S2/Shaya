import React from 'react'
import '../assets/modal-style.css'

const Modal = props=>{

    if(!props.show){
        return null
    }

    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h1>gaaaaaa</h1>
                </div>
                <div className='modal-body'>
                    <h2>bodyyyyyy</h2>
                </div>
                <div className='modal-footer'>
                    <button>Cerrar</button>
                </div>
            </div>
        </div>

    )
}

export default Modal