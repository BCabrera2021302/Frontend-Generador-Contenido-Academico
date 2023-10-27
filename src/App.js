import React, { useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  const [searchText, setSearchText] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [comment, setComment] = useState('');

  const handleGenerate = () => {
    // Agregar la lógica para el botón Generar aquí
  };

  const handleView = () => {
    // Agregar la lógica para el botón Vista aquí
  };

  const handleGenerateFooter = () => {
    // Agregar la lógica para el botón Generar del pie de página aquí
  };

  return (
    <div className="App">
      <body>
      <input className='cuestion'
          type="text"
          placeholder="Dime como puedo ayudarte?"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
          <option value="">Selecciona...</option>
          <option value="opcion1">Opción 1</option>
          <option value="opcion2">Opción 2</option>
        </select>
        <Button variant="primary" onClick={handleGenerate}>Generar</Button>
        {/* Contenido del mediocentro */}
      </body>
    </div>
  );
}

export default App;