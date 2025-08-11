import React, { useState } from "react";

function Login({ onLogin, onLog }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticação simples, deve ser substituída por uma implementação real em backend
    if (username && password === "password") {
      onLog(`Usuário '${username}' autenticado com sucesso.`);
      onLogin(true);
    } else {
      alert('Autenticação falhou. Use a senha "password".');
    }
  };

  return (
    <div className="login-container">
      <h2>Stark Tower Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome de Usuário</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
