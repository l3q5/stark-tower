import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [visitors, setVisitors] = useState([]);
  const [logs, setLogs] = useState([]);

  // Registrando logs no console, idealmente seria integrado com um serviço de logging no backend
  useEffect(() => {
    if (logs.length > 0) {
      console.log("LOG:", logs[logs.length - 1]);
    }
  }, [logs]);

  const handleLog = (message) => {
    const newLog = `${new Date().toISOString()} - ${message}`;
    setLogs((prevLogs) => [...prevLogs, newLog]);
  };

  const handleAddVisitor = (visitor) => {
    setVisitors((prevVisitors) => [...prevVisitors, visitor]);
  };

  const handleCheckout = (visitorId) => {
    setVisitors((prevVisitors) =>
      prevVisitors.map((v) =>
        v.id === visitorId ? { ...v, exitTime: new Date() } : v,
      ),
    );
    const visitor = visitors.find((v) => v.id === visitorId);
    if (visitor) {
      handleLog(`Saída registrada para: ${visitor.name}, CPF: ${visitor.cpf}.`);
    }
  };

  const handleLogout = () => {
    handleLog(`Usuário desconectado.`);
    setIsAuthenticated(false);
  };

  return (
    <div className="app-container">
      <h1>Stark Industries</h1>
      {!isAuthenticated ? (
        <Login onLogin={setIsAuthenticated} onLog={handleLog} />
      ) : (
        <>
          <button onClick={handleLogout} className="logout-button">
            Sair
          </button>
          <Dashboard
            onAddVisitor={handleAddVisitor}
            allVisitors={visitors}
            onCheckout={handleCheckout}
            onLog={handleLog}
          />
        </>
      )}
    </div>
  );
}

export default App;
