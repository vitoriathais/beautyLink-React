/* eslint-disable no-unused-vars */
import React from 'react';
import '../../styles/Espelho.css'

const dados = [
    { data: '10/10/2023', entradaSaida: '08:00/18:00', horasExtras: '2', horasFaltas: '0', saldo: '2', solicitacao: 'N/A', acoes: '✔️' },
  ];

function EspelhoPonto() {
  return (
    <div className="container-espelho" id="template-areas">
      <div id="header">
        <p>Cabçalho</p>
      </div>
      <div id="sidebar">
        <p>Sidebar</p>
      </div>
      <div id="content">
        <p>Conteúdo</p>
      </div>
      <div id="footer">
        <p>Rodapé</p>
      </div>
    </div>
  )
}

export default EspelhoPonto;
