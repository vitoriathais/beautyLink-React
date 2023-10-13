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
        <p>Cabeçalho</p>
      </div>

      <div id="sidebar">

        <div className="Container-sidebar">
          <div className="Container-sidebar__Ponto">
            <p>Bater Ponto</p>
          </div>
          <div className="Container-sidebar__Espelho">
           <p>Espelho Ponto</p>
          </div>
        </div>
      </div>

      <div id="content">
        <p>Conteúdo</p>
      </div>

    </div>
  )
}

export default EspelhoPonto;
