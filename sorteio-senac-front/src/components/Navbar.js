
function Navbar(regrasPath, sobrePath, homePath) {
    return (
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          <a className="navbar-brand" href={homePath}>Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href={homePath}>Cadastrar</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={regrasPath}>Regras</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={sobrePath}>Sobre</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;