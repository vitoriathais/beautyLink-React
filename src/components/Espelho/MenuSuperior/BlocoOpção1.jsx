/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import './BlocoOpção.css';

const BlocoOpção1 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const options = ['Opção 1', 'Opção 2', 'Opção 3'];
  
    return (
      <div className="dropdown">
        <p>Início - Término</p>
        <button onClick={() => setIsOpen(!isOpen)}>
          Clique aqui
          <span className="arrow-down">▼</span>
        </button>
        <ul className={`options ${isOpen ? 'show' : ''}`}>
          {options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      </div>
    );
};

export default BlocoOpção1
