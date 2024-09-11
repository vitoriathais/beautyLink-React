import Header from '../Header';
import '../../styles/Home.css'; // Importa o CSS do cabeçalho
import '../../styles/Header.css';

// Importa a imagem como uma variável
import fundoImagem from '../Imagens/mulherMedia.png';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <img
          src={fundoImagem} // Usa a variável para a imagem
          alt="Fundo"
          className="background-image"
        />
      </main>
    </div>
  );
};

export default HomePage;
