import React from 'react';
import Saudacao from './Saudacao';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Bem-vindo à Página Legal</h1>
      </header>
      <main>
        <Saudacao nome="João" mensagem="Seja bem-vindo à nossa plataforma!" />
        <Saudacao nome="Maria" mensagem="Aproveite as novidades que temos para você." />
        <Saudacao nome="Pedro" mensagem="Navegue à vontade e descubra mais!" />
      </main>
      <footer className="app-footer">
        <p>© 2024 Página Legal. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;