/* eslint-disable no-unused-vars */
import React from 'react';

function EspelhoPonto() {
  return (
    <div>
      <h1>Meu Ponto</h1>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Entrada/Saída</th>
            <th>Horas extras</th>
            <th>Horas faltas</th>
            <th>Saldo</th>
            <th>Solicitação</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {/* Aqui você pode mapear seus dados para criar as linhas da tabela */}
        </tbody>
      </table>
    </div>
  );
}

export default EspelhoPonto;
