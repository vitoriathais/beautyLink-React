// App.jsx
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../styles/Home.css';
import mulherHome from '../Imagens/mulherHome.png'; // Importação correta da imagem

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <a href="#">Beauty <span>Link</span></a>
        </div>
        <nav>
          <ul>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Agendamento</a></li>
            <li><a href="#">Equipe</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="login">Login</button>
          <button className="signup">Cadastro</button>
        </div>
      </div>
    </header>
  );
};

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const slides = [
    "https://static.wixstatic.com/media/41d000_9d0c9989e0019030a1f87f1fef20dbfc.jpg",
    "https://static.wixstatic.com/media/9c608a_f7f89260104a4c60bc3f0102dff6abe7.jpg",
    "https://static.wixstatic.com/media/9c608a_9c51c19c1d514c499674324ef25c482a.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="info-bar">
      <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={currentSlide === index ? "active" : ""}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
      <div className="info-overlay">
        <h2>Conecte-se com Sua Estética</h2>
        <p>Agende seu atendimento com nossos especialistas e descubra o melhor para você.</p>
        <button>Agende agora</button>
      </div>
    </div>
  );
};

const ProductBar = () => {
  return (
    <div className="product-bar">
      <div className="product-item">
        <img src={mulherHome} alt="Produto 1" /> {/* Uso correto da imagem importada */}
        <p>Produto 1</p>
      </div>
      <div className="product-item">
        <img src="https://via.placeholder.com/300x200" alt="Produto 2" />
        <p>Produto 2</p>
      </div>
    </div>
  );
};

const ContactModal = ({ isOpen, closeModal }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Formulário de Contato</h2>
        <form className="formulario-contato">
          <input type="text" name="nome" placeholder="Seu Nome" required />
          <input type="email" name="email" placeholder="Seu Email" required />
          <textarea name="mensagem" placeholder="Sua Mensagem" rows="4" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

// Adição de validação de props usando PropTypes
ContactModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Header />
      <div className="hero">
        <div className="hero-content">
          <h1>Bem-vindo ao Beauty Link</h1>
        </div>
        <Slider />
        <ProductBar />
      </div>
      <button className="login" onClick={openModal}>Login</button>
      <ContactModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default App;
