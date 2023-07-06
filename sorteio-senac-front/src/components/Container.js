import logo from '../logo.png';
import Card from './Card';

function Container() {
  const handleCadastrarNota = () => {
    // Lógica para cadastrar a nota
  };

  return (
    <div id="container">
      <img src={logo} id="img-logo" alt="Logo do Sorteio Nota Solidária" />

      <p>Cadastre suas notas aqui e boa sorte!</p>

      <canvas hidden id="qr-canvas"></canvas>

      <Card />

      <div id="painelConteudo" hidden></div>

      <button onClick={handleCadastrarNota} id="btn-scan-qr">Cadastrar Nota</button>
    </div>
  );
}

export default Container;