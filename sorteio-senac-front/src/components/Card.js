function Card(regrasPath, sobrePath, taxData, totalNotas) {
    return (
      <div className="card" style={{ width: '18rem' }} id="qr-result" hidden>
        <div className="card-body">
          <h5 className="card-title">Nota Cadastrada!</h5>
          <h6 className="card-subtitle mb-2 text-muted" id="nota-id">Card subtitle</h6>
          <p className="card-text" id="outputData">{taxData}</p>
          <p className="card-text" id="total-notas">{totalNotas}</p>
          <a href={regrasPath} className="```jsx
  card-link">Regras</a>
          <a href={sobrePath} className="card-link">Sobre</a>
        </div>
      </div>
    );
  }
  
  export default Card;