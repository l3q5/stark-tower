import React, { useState } from "react";

function VisitorForm({ onAddVisitor, activeVisitors, onLog }) {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [room, setRoom] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleCpfChange = (e) => {
    const value = e.target.value;
    const onlyNums = value.replace(/[^\d]/g, "").substring(0, 11);

    let maskedCpf = onlyNums.replace(/(\d{3})(\d)/, "$1.$2");
    maskedCpf = maskedCpf.replace(/(\d{3})(\d)/, "$1.$2");
    maskedCpf = maskedCpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    setCpf(maskedCpf);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const rawCpf = cpf.replace(/[^\d]/g, "");

    if (!name || !rawCpf || !room) {
      setError("Nome, CPF e Sala destino são obrigatórios.");
      return;
    }

    if (rawCpf.length !== 11) {
      setError("O CPF deve conter 11 dígitos.");
      return;
    }

    const visitorsInRoom = activeVisitors.filter((v) => v.room === room).length;
    if (visitorsInRoom >= 3) {
      setError(`A sala ${room} já atingiu o limite máximo de 3 visitantes.`);
      onLog(`Tentativa de adicionar visitante à sala cheia: ${room}`);
      return;
    }

    const newVisitor = {
      id: Date.now(),
      name,
      cpf: cpf,
      room,
      dob,
      email,
      entryTime: new Date(),
      exitTime: null,
    };

    onAddVisitor(newVisitor);
    onLog(`Novo visitante registrado: ${name}, CPF: ${cpf}, Sala: ${room}.`);

    setName("");
    setCpf("");
    setRoom("");
    setDob("");
    setEmail("");
    setError("");
  };

  return (
    <div className="form-container">
      <h3>Cadastrar Novo Visitante</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>CPF *</label>
          <input
            type="text"
            value={cpf}
            onChange={handleCpfChange}
            placeholder="000.000.000-00"
            maxLength="14"
          />
        </div>
        <div className="form-group">
          <label>Sala Destino *</label>
          <input
            type="text"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Data de Nascimento</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Cadastrar Visitante</button>
      </form>
    </div>
  );
}

export default VisitorForm;
