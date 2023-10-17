/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import '../Grade.css'

const TabelaDados = () => {
  const dadosFicticios = [
    {
      'Data': 'Terça-Feira / 2023-10-17',
      'Horario entrada': '08:00',
      'Horario saída': '17:00',
      'Horas extra': '01:20',
      'Saldo': '00:30'
    },
    {
      'Data': '2023-10-18',
      'Horario entrada': '08:30',
      'Horario saída': '17:30',
      'Horas extra': '000:00',
      'Saldo': '-00:15'
    },
    // Adicione mais objetos aqui para testar diferentes cenários
  ];

  return (
    <div className="Container_Grade">
    <table>
      <div>
      <thead>
        <tr className="Container_Grade_Cabeçalho">
          {/*Nome Colunas*/}
          <th>Data</th>
          <th>Horário entrada</th>
          <th>Horário saída</th>
          <th>Horas extra</th>
          <th>Saldo</th>
        </tr>
      </thead>
      </div>
      <div className="Container_Grade-hr">
      <hr></hr>
      <tbody>
       {dadosFicticios.map((linha, index) => (
          <tr className="Container_Grade-Results" key={index}>
            <td>{linha['Data']}</td>
            <td>{linha['Horario entrada']}</td>
            <td>{linha['Horario saída']}</td>
            <td>{linha['Horas extra']}</td>
            <td>{linha['Saldo']}</td>
          </tr>
        ))}
      </tbody>
      </div>
    </table>
    </div>
  );
};

export default TabelaDados;
