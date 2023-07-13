import './App.css';
import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import BtnCadastro from './components/Cadastro';
const App = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch('https://sorteio-solidario-senacrs.onrender.com/api/usuario/listar/tudo')
      .then((response) => response.json())
      .then((data) => setRecords(data))
  }, []);

  return (
    <div className="App">
      <h1>Lista de Usuarios</h1>
      <div className="card-container">
        {records.map((record) => (
          <Card key={record.id} record={record} />
        ))}
      </div>
      <BtnCadastro></BtnCadastro>
    </div>
  );
};

export default App;