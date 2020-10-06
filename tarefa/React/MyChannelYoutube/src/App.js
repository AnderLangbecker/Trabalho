import React from 'react';
import fundo from './Fundo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={fundo} className="App-fundo" alt="Fundo" />
        <label id="name">Anderson Daniel Langbecker</label>
        <label id="intro">Venha conferir meu canal de gameplays e não esqueça de se inscrever, clicar no sininho e deixar aquele like pra fortalecer. Espero que se divirta!!</label>
        <a
          className="App-link"
          href="https://www.youtube.com/channel/UCyFhAk2wJ-9IWTlfQUwzDFQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          NoobZeira
        </a>
      </header>
    </div>
  );
}

export default App;
