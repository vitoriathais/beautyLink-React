// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './BlocoOpção.css';

// eslint-disable-next-line react/prop-types
const BlocoOpção1 = ({ setApiUrl }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Clique aqui');
    const options = ['Último mês', 'Essa semana', 'Últimos dois meses'];

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);

        let inicio;
        let fim;

        const hoje = new Date();
        fim = hoje.toISOString().split('T')[0];

        if (option === 'Último mês') {
            hoje.setMonth(hoje.getMonth() - 1);
            inicio = hoje.toISOString().split('T')[0];
        } else if (option === 'Essa semana') {
            hoje.setDate(hoje.getDate() - 7);
            inicio = hoje.toISOString().split('T')[0];
        } else if (option === 'Últimos dois meses') {
            hoje.setMonth(hoje.getMonth() - 2);
            inicio = hoje.toISOString().split('T')[0];
        }

        setApiUrl(`https://batida-de-ponto-api-flask.vercel.app/Espelho?inicio=${inicio}&fim=${fim}`);
    };

    return (
      <div className="dropdown">
        <p>Início - Término</p>
        <button onClick={() => setIsOpen(!isOpen)}>
          {selectedOption}
          <span className="arrow-down">▼</span>
        </button>
        {isOpen && (
          <ul className={`options ${isOpen ? 'show' : ''}`}>
            {options.map((option, index) => (
              <li key={index} onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
};

export default BlocoOpção1;
