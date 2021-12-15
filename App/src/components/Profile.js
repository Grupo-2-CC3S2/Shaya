import React, {useState} from 'react';
import Component from 'react';

import CanvasDraw from "react-canvas-draw";

import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import imgPerfil from './../profile_photos/perfil.png'
import '../assets/css/Perfil.css'



//test variables
var datos=['BrAsm','Bryan', 'Asmat', 'basmatf@uni.pe', '10/09/2021']
const axios = require('axios').default;

//get storaged images
function keysStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push(keys[i]);
    }

    return values;
}


function Profile(props){

  const [dataUser, setDataUser] = useState({userdata: {}});
  
  const obtenerDatosDelUsuario = () => {

    axios({
        method: "get",
        url: "http://localhost:4001/api/users/profile",
        data: {},
        //headers: { "Content-Type": "multipart/form-data", 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZWI4NjExZmYzMTQ1NzVjNzZkOTg2NSIsImlhdCI6MTYyNjE0ODkzNywiZXhwIjoxNjI2MjM1MzM3fQ.YvHD8LJlcmADp-MWuGfTIcaAk8ak73G6qZgX-6Fpa30'},
        //x-access-token
        headers: { "Content-Type": "application/json", 'x-access-token': window.localStorage.getItem("token")},
      })
        .then((response) => {
          //handle success
          dataUser.userdata = response.data;

          setDataUser({
            ...dataUser
          });
          console.log("user info:", dataUser.userdata)
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
  React.useEffect(() => {
    obtenerDatosDelUsuario()
  }, []);


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
                            <h3>Usuario: {dataUser.userdata.username} </h3>
                            <h3>Nombre: {dataUser.userdata.nombres}</h3>
                            <h3>Apellido: {dataUser.userdata.apellidos}</h3>
                            <h3>Correo: {dataUser.userdata.email}</h3>
                            <h3>Fecha de creación: {dataUser.userdata.createdAt}</h3>
                            <button className='btn btn-danger'>Editar</button>
                        </div>
                        <div className='col-md-6 board-area'>
                            <h3>Pizarras guardadas</h3>
                            <Carousel variant="dark">

                                {

                                    keysStorage().map((variant, idx) => (
                                        <Carousel.Item>
                                            <CanvasDraw
                                                disabled
                                                hideGrid
                                                //ref={canvasDraw => (this.loadableCanvas = canvasDraw)}
                                                saveData={localStorage.getItem(variant)}
                                            />
                                        </Carousel.Item>
                                    ))

                                }
                            
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

                            
                            </Carousel>
                        </div>
                        {/*<div className='col-md-6 row'>
                            <div className='col-md-12'><h3>Historial</h3></div>
                            <div className='col-md-12'>
                                <button className='btn btn-outline-dark my-1 w-100'>Chatbot</button>

                            </div>
                            <div className='col-md-12'>
                                <button className='btn btn-outline-dark my-1 w-100'>Reuniones</button>
                                
                            </div>
                        </div>*/}
                    </div>
                </div>
                
            </div>
        )
}

export default Profile;
