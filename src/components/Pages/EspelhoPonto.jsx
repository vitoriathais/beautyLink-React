/* eslint-disable no-unused-vars */
import React from 'react';

const dados = [
    { data: '10/10/2023', entradaSaida: '08:00/18:00', horasExtras: '2', horasFaltas: '0', saldo: '2', solicitacao: 'N/A', acoes: '✔️' },
  ];

function EspelhoPonto() {
  return (
    <div className="Espelho">
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
        {dados.map((linha, index) => (
        <tr key={index}>
          <td>{linha.data}</td>
          <td>{linha.entradaSaida}</td>
          <td>{linha.horasExtras}</td>
          <td>{linha.horasFaltas}</td>
          <td>{linha.saldo}</td>
          <td>{linha.solicitacao}</td>
          <td>{linha.acoes}</td>
        </tr>
      ))}
        </tbody>
      </table>
    </div>
  );
}

export default EspelhoPonto;
