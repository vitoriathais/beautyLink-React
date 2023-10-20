// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import '../Grade.css'

const TabelaDados = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch('https://batida-de-ponto-api-flask.vercel.app/Espelho')
      .then(response => response.json())
      .then(data => setDados([data]));
  }, []);

  return (
    <div className="Container_Grade">
    <table>
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

      <tbody>
       {dados && dados.map((linha, index) => (
          linha && <tr className="Container_Grade_Results"  key={index}>
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
  );
};

export default TabelaDados;
