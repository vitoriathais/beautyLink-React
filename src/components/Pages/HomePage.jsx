import Header from '../Header';
import '../../styles/Header.css'; // Importa o CSS do cabeçalho

// Importa a imagem como uma variável
import fundoImagem from '../Imagens/mulherGrande.png';

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
