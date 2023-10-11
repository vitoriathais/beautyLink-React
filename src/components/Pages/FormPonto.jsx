/* eslint-disable react/prop-types */
import { useContext, useState, useEffect } from 'react';
import { UserContext } from './UserContext';
import '../../styles/Styles.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


function ConfirmAcao({mensagem, onConfirm, onCancel}) {
    return (
        <div className="Alert-Confirm">
          <div className="modal-content">
            <p>{mensagem}</p>
            <div className="button-container">
              <button className="style-confirma-ponto" onClick={onConfirm}>Confirmar</button>
              <button className="style-confirma-ponto-fechar" onClick={onCancel}>Fechar</button>
            </div>
          </div>
        </div>
    )
}



function FormPonto() {
    const { user } = useContext(UserContext);
    const [mostrarModal, setMostrarModal] = useState(false);
    const navigate = useNavigate();

    const [hora, setHora] = useState('');

    const linkLogin = () => {
        return navigate ('/');
    }
    
    // Função para obter a hora da API
    const atualizarHora = () => {
        axios.get('https://batida-de-ponto-api-flask.vercel.app/Hora')
            .then(response => {
                // Atualiza o estado com a hora retornada pela API
                setHora(response.data.hora);
                console.log(hora)
            })
            .catch(error => console.error('Erro:', error));
    };


    useEffect(() => {
        atualizarHora();
        const intervalId = setInterval(atualizarHora, 60000);
        return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
    }, []);



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

                <div className="identificaçao">
                    <label className="title-label-usuario" htmlFor="usuario">Usuario: </label>
                    <p className="fake-input">{user}</p>
                </div>

                <div className="horario">
                    <label>Horário:</label>
                    <p>{hora}</p> {/* Exibe a hora */}
                </div>

                <div className="container__ponto__button">
                    <button type="button" className="style-ponto" onClick={() => setMostrarModal(true)}>Bater Ponto</button>
                </div>

                <div className="frase-redireciona">
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
