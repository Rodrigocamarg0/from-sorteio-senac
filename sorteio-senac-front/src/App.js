import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Container from './components/Container';
import ModalNovoUsuario from './components/ModalNovoUsuario';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Alert />
      <Container />
      <ModalNovoUsuario />
      <Footer />
    </>
  );
}

export default App;
