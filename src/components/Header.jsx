// src/components/Header.js
import '../styles/Header.css'; // Importa o CSS do cabeçalho

const Header = () => {
  return (
    <header className="header">
      <nav>
        <button className="nav-button">Sobre</button>
        <button className="nav-button">Agendamentos</button>
        <button className="nav-button">Equipes</button>
        <button className="nav-button">Contato</button>
        <button className="nav-button">Login</button>
        <button className="nav-button">Cadastro</button>
      </nav>
    </header>
  );
};

export default Header;
