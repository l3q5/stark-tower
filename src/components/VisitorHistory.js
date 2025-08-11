import React from "react";

function VisitorHistory({ visitors }) {
  return (
    <div className="list-container">
      <h3>Histórico Completo de Visitantes</h3>
      <table className="visitor-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Sala</th>
            <th>Entrada</th>
            <th>Saída</th>
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
                  {visitor.exitTime
                    ? new Date(visitor.exitTime).toLocaleString()
                    : "Ainda na Stark Tower"}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Nenhum registro de visitante encontrado.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default VisitorHistory;
