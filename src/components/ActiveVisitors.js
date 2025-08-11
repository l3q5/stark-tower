import React from "react";

function ActiveVisitors({ visitors, onCheckout }) {
  return (
    <div className="list-container">
      <h3>Visitantes Atualmente na Stark Tower</h3>
      <table className="visitor-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Sala</th>
            <th>Entrada</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {visitors.length > 0 ? (
            visitors.map((visitor) => (
              <tr key={visitor.id}>
                <td>{visitor.name}</td>
                <td>{visitor.cpf}</td>
                <td>{visitor.room}</td>
                <td>{new Date(visitor.entryTime).toLocaleString()}</td>
                <td>
                  <button onClick={() => onCheckout(visitor.id)}>
                    Registrar Saída
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Nenhum visitante ativo no momento.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ActiveVisitors;
