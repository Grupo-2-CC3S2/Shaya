import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};


class SimpleForm extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
  headerTitle="ChatBot"
  recognitionEnable={true}
  //speechSynthesis={{ enable: true, lang: 'es' }}
  steps={[
    //id (cadena o número): requerido para cualquier paso
    //user (booleano): si es True, este paso espera una acción de tipo de usuario
    //validator (función): una función utilizada para validar el texto del usuario escrito
    //trigger (cadena, número o función): el ID del siguiente paso activado
    //end (booleano): si es True, este paso es el final de la conversación
    {
      id: 'Inicio',
      message: 'Hola, me llamo Shaya, como te llamas?',
      trigger: 'Paso2',
    },
    {
      id: 'Paso2',
      user: true,
      trigger: 'Respuesta',
    },
    {
      id: 'Respuesta',
      message: 'Hola {previousValue}, en que te puedo ayudar ?',
      trigger: 'Opciones',
    },
    {
      id: 'Opciones',
      options: [
        { value: 'Calculadora', label: 'Calculadora', trigger: 'MosCalculadora' },
        { value: 'Problemas', label: 'Problemas', trigger: 'MosProblemas' },
        { value: 'Ayuda', label: 'Ayuda', trigger: 'MosAyuda' },
      ],
    },
    {
      id: 'MosCalculadora',
      component: (
        <div>
          <a href="https://es.symbolab.com/solver/matrix-diagonalization-calculator"> Click Aqui </a>
          <p> </p>
        </div>
      ),
      trigger: 'Seguir',
    },
    {
      id: 'MosProblemas',
      message: 'Aqui se mostraran los problemas',
      //component: <Problemas />,
      trigger: 'Seguir',
    },
    {
      id: 'MosAyuda',
      message: 'En que tiene dudas ?',
      trigger: 'MosOpAyuda',
      //component: <Get />,
    },
    {
      id: 'MosOpAyuda',
      options: [
        { value: 'Pizarra', label: 'Como se usa la pizarra ?', trigger: 'AyuPizarra' },
        { value: 'Link', label: 'Como se genera el link ?', trigger: 'AyuLink' },
      ],
      //component: <Get />,
    },
    {
      id: 'AyuPizarra',
      message: 'La pizarra ...',
      //component: <Problemas />,
      trigger: 'Seguir',
    },
    {
      id: 'AyuLink',
      message: 'El link ...',
      //component: <Problemas />,
      trigger: 'Seguir',
    },
    {
      id: 'Seguir',
      message: 'En que te puedo seguir ayudando ?',
      //component: <Problemas />,
      trigger: 'Opciones',
    }
  ]}
  /></ThemeProvider>
    );
  }
       
}

export default SimpleForm;