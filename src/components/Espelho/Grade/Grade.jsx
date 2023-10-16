/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const TabelaDados = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    // Substitua 'http://localhost:5000/sua-rota' pelo URL da sua API Flask
    fetch('http://localhost:5000/sua-rota')
      .then(response => response.json())
      .then(data => setDados(data));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          {/* Substitua 'coluna1', 'coluna2', etc. pelos nomes das suas colunas */}
          <th>Horário entrada</th>
          <th>Horário saída</th>
          <th>Horas extra</th>
          <th>Saldo</th>
          {/* Adicione mais colunas conforme necessário */}
        </tr>
      </thead>
      <tbody>
        {dados.map((linha, index) => (
          <tr key={index}>
            {/* Substitua 'coluna1', 'coluna2', etc. pelos nomes das suas colunas */}
            <td>{linha['Horario entrada']}</td>
            <td>{linha['Horario saída']}</td>
            <td>{linha['Horas extra']}</td>
            <td>{linha['Saldo']}</td>
            {/* Adicione mais colunas conforme necessário */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TabelaDados;
