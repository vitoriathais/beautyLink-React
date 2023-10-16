/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import './BlocoOpção.css';

const BlocoOpção2 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Clique aqui');
    const options = ['Horas', 'Dias'];
  
    return (
      <div className="dropdown">
        <p>Horas - Dias</p>
        <button onClick={() => setIsOpen(!isOpen)}>
          {selectedOption}
          <span className="arrow-down">▼</span>
        </button>
        {isOpen && (
          <ul className={`options ${isOpen ? 'show' : ''}`}>
            {options.map((option, index) => (
              <li key={index} onClick={() => {
                setSelectedOption(option);
                setIsOpen(false);
              }}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
};

export default BlocoOpção2
