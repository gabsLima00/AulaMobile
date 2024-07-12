import React from 'react';
import './Saudacao.css';

function Saudacao({ nome, mensagem }) {
  return (
    <div className="saudacao">
      <h1>Olá, {nome}!</h1>
      <p>{mensagem}</p>
    </div>
  );
}

export default Saudacao;