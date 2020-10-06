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
        
        <LinkNoobZeira label="NoobZeira 2" link="https://www.youtube.com/channel/UCyFhAk2wJ-9IWTlfQUwzDFQ" />
      </header>
    </div>
  );
}

function LinkNoobZeira(props) {

  const meuLabel = props.label;
  const meuLink = props.link;

  return(
    <a
      className="App-link"
      href={meuLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      {meuLabel}
    </a>
  );
}

export default App;
