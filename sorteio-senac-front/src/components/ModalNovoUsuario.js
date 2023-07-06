
function ModalNovoUsuario() {
    return (
      <div className="modal fade" id="modalNovoUsuario" tabIndex="-1" aria-labelledby="modalNovoUsuarioLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalNovoUsuarioLabel">Registre-se no sorteio e ajude o Dias da Cruz</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="usuario-name" className="col-form-label">Nome:</label>
                  <input type="text" className="form-control" id="usuario-name" />
                </div>
                {/* Outros campos do formulário */}
                <button type="submit" className="btn btn-primary">Cadastrar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ModalNovoUsuario;