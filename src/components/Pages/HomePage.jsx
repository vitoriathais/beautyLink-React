import Header from '../Header';
import '../../styles/Header.css'; // Importa o CSS global

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <img
          src="../assets/Imagens/mulherHome.png"
          alt="Fundo"
          className="background-image"
        />
      </main>
    </div>
  );
};

export default HomePage;
