import { Link } from 'react-router-dom'


const Navbar =() => {
    return (
        <nav>
            <Link to="/">Tela de Login |</Link>
            <Link to="/Cadastro">     Tela de Cadastro |</Link>
            <Link to="/Ponto">     Tela Batida de Ponto |</Link>
            <Link to="/Identificador">     Id </Link>
        </nav>
    )
}

export default Navbar