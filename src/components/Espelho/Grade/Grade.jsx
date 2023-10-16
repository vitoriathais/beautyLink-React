/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import '../Grade.css'

const TabelaDados = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    // Substitua 'http://localhost:5000/sua-rota' pelo URL da sua API Flask
    fetch('https://batida-de-ponto-api-flask.vercel.app/Espelho')
      .then(response => response.json())
      .then(data => setDados(data));
  }, []);

  return (
    <div className="Container_Grade">
    <table>
      <thead>
        <tr>
          {/*Nome Colunas*/}
          <th>Horário entrada</th>
          <th>Horário saída</th>
          <th>Horas extra</th>
          <th>Saldo</th>
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
    </div>
  );
};

export default TabelaDados;
