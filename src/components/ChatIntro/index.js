import React from 'react';
import './ChatIntro.css';

import introLogo from './../../assets/intro-connection-hq-light.jpg';

export default function ChatIntro () {
  return (
    <div className='chatIntro'>
      <img src={introLogo} alt="Welcome WhatsApp"/>
      <h1>Mantenha seu celular conectado</h1>
      <h2>O WhatsApp conecta ao seu telefone para sincronizar suas mensagens.<br/>Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.</h2>
    </div>
  );
}