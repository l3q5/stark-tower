import React from "react";
import VisitorForm from "./VisitorForm";
import ActiveVisitors from "./ActiveVisitors";
import VisitorHistory from "./VisitorHistory";

function Dashboard({ onAddVisitor, allVisitors, onCheckout, onLog }) {
  const activeVisitors = allVisitors.filter((v) => v.exitTime === null);

  return (
    <div className="dashboard-container">
      <h2>Painel de Controle de Visitantes da Stark Tower</h2>
      <VisitorForm
        onAddVisitor={onAddVisitor}
        activeVisitors={activeVisitors}
        onLog={onLog}
      />
      <ActiveVisitors visitors={activeVisitors} onCheckout={onCheckout} />
      <VisitorHistory visitors={allVisitors} />
    </div>
  );
}

export default Dashboard;
