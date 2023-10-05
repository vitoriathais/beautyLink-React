/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { UserContext } from './UserContext';
import { useState } from 'react';
import '../../styles/Styles.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


function ConfirmAcao({mensagem, onConfirm, onCancel}) {
    return (
        <div className="Alert-Confirm">
          <div className="modal-content">
            <p>{mensagem}</p>
            <button className="style-confirma-ponto" onClick={onConfirm}>Confirmar</button>
            <button className="style-confirma-ponto" onClick={onCancel}>Fechar</button>
          </div>
        </div>
    )
}



function FormPonto() {
    const { user } = useContext(UserContext);
    const [mostrarModal, setMostrarModal] = useState(false);
    const navigate = useNavigate();

    const linkLogin = () => {
        return navigate ('/');
    }
    

    const BaterPonto = (e) => {
        e.preventDefault();
    
        console.log(`Usuário ${user} bateu ponto`);
    
        axios.post('https://batida-de-ponto-api-flask.vercel.app/Ponto', {
            usuario: user,
        },
        {
            withCredentials: true
        })
        .then((response) => {
            console.log(response.data.message);
            if (response.data.message === 'Ponto batido com sucesso') {
                window.alert('Ponto Batido com sucesso!');
                navigate('/');
            }
        })
        .catch((error) => {
            console.error('Erro ao bater ponto:', error);
            if (error.response.status === 400 && error.response.data.message === 'A nova batida de ponto deve ser maior do que a última hora inserida') {
                window.alert('A nova batida de ponto deve ser maior do que a última hora inserida');
            } else if (error.response.status === 500 && error.response.data.message === 'Falha ao bater ponto') {
                window.alert('Falha ao bater ponto = Code 500');
            } else {
                window.alert('Erro ao bater ponto. Por favor, tente novamente.');
            }
        });
    }
    
      

    return(
        <div className="wrap-ponto">
            <h1 className="login-form-title">Batida de Ponto:</h1>
            <form onSubmit={BaterPonto}>
                <div>
                    <label className="title-label-usuario" htmlFor="usuario">Usuario: </label>
                    <p className="fake-input">{user}</p>
                </div>
                <div className="container__ponto__button">
                    <button type="button" className="style-ponto" onClick={() => setMostrarModal(true)}>Bater Ponto</button>
                </div>
                <div>
                    <p className="style-pergunta">Deseja ir para a página de login?</p>
                    <button className="style-criar-cadastro" onClick={linkLogin}>Login</button>
                </div>
                {mostrarModal && (
                    <ConfirmAcao
                    mensagem = {`Você está batendo ponto?`}
                    onCofirm={() => { BaterPonto(); setMostrarModal(false);}}
                    onCancel={() => setMostrarModal(false)}
                    />
                )}
            </form>
        </div>
    )
}

export default FormPonto;
