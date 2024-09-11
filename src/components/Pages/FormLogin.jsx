import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../styles/Styles.css';
import { UserContext } from './UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function FormLogin() {
    const { setUser } = useContext(UserContext);
    const [usuario, setUsuario] = useState('');
    const [senha, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(savedUser);
        }
    }, [setUser]);

    const Logar = (e) => {
        e.preventDefault();

        if (!usuario || !senha) {
            window.alert('Por favor, insira o usuário e a senha.');
            return; 
        }

        axios.post('https://beauty-link-python.vercel.app/Login', {
            usuario: usuario,
            senha: senha
        })
        .then((response) => {
            console.log(response.data.message);
            setUser(usuario);
            console.log('usuario definido:', usuario);
            localStorage.setItem('user', usuario);
            navigate("/Ponto");
        })
        .catch((error) => {
            console.error('Erro ao fazer login:', error);
            window.alert('Usuário ou senha incorretos. Por favor, tente novamente.');
        });
    }

    const handleCadastro = () => {
        console.log("Usuário não possui cadastro");
        return navigate("/Cadastro");
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card p-4">
                        <h1 className="card-title text-center mb-4">Tela de Login</h1>
                        <form onSubmit={Logar}>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="usuario">Usuário</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="usuario"
                                    name="usuario"
                                    placeholder="Digite seu nome de usuário"
                                    onChange={(e) => setUsuario(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="password">Senha</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Digite sua senha"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button className="btn btn-primary w-100 mb-3" type="submit">Entrar</button>
                            <div className="text-center">
                                <p>Ainda não possui cadastro?</p>
                                <button className="btn btn-secondary" type="button" onClick={handleCadastro}>Criar Cadastro</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormLogin;
