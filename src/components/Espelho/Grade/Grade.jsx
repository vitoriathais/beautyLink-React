// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import '../Grade.css'

// eslint-disable-next-line react/prop-types
const Grade = ({ apiUrl }) => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setDados(data));
  }, [apiUrl]);

  return (
    <div className="Container_Grade">
      <div>
        <table>
          <thead>
            <tr className="Container_Grade_Cabeçalho">
              <th>Data</th>
              <th>Horário entrada</th>
              <th>Horário saída</th>
              <th>Horas extra</th>
              <th>Saldo</th>
            </tr>
          </thead>

          <tbody>
            {dados && dados.map((linha, index) => (
              linha && <tr className="Container_Grade_Results" key={index}>
                <td>{linha['Data']}</td>
                <td>{linha['Horario entrada']}</td>
                <td>{linha['Horario saida']}</td>
                <td>{linha['Horas extra']}</td>
                <td>{linha['Saldo Mensal']}</td>
              </tr> 
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Grade;
