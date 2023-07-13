const Card = ({ record }) => {
  return (
    <div className="card">
      <h2>{record.nome}</h2>
      <p>{record.cpf}</p>
      <p>{record.celular}</p>
      <p>{record.created_at}</p>
      <p>{record.total_notas}</p>
    </div>
  );
};

export default Card;