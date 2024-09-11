/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { UserContext } from './UserContext';
import '../../styles/Styles.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ConfirmAcao({ mensagem, onConfirm, onCancel }) {
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
    );
}

function FormAgenda() {
    const { user } = useContext(UserContext);
    const [mostrarModal, setMostrarModal] = useState(false);
    const navigate = useNavigate();

    // Campos do formulário
    const [tipoServico, setTipoServico] = useState('');
    const [dataAtendimento, setDataAtendimento] = useState('');
    const [dataMarcacao, setDataMarcacao] = useState('');
    const [statusAgendamento, setStatusAgendamento] = useState('');
    const [observacao, setObservacao] = useState('');
    const [fkIdFuncionario, setFkIdFuncionario] = useState('');
    const [fkIdUsuarioCliente, setFkIdUsuarioCliente] = useState('');

    const linkLogin = () => {
        navigate('/');
    };

    const AgendarAtendimento = (e) => {
        e.preventDefault();

        axios.post('https://beauty-link-python.vercel.app/CadastroAtendimento', {
            tipo_servico: tipoServico,
            data_atendimento: dataAtendimento,
            data_marcacao: dataMarcacao,
            status_agendamento: statusAgendamento,
            observacao: observacao,
            fk_id_funcionario: fkIdFuncionario,
            fk_id_usuario_cliente: fkIdUsuarioCliente
        }, {
            withCredentials: true
        })
            .then((response) => {
                console.log(response.data.message);
                if (response.data.message === 'Atendimento cadastrado com sucesso') {
                    window.alert('Atendimento cadastrado com sucesso!');
                    navigate('/');
                }
            })
            .catch((error) => {
                console.error('Erro ao cadastrar atendimento:', error);
                window.alert('Erro ao cadastrar atendimento. Por favor, tente novamente.');
            });
    };

    return (
        <div className="wrap-ponto">
            <h1 className="login-form-title">Agende seu Atendimento</h1>
            <form onSubmit={AgendarAtendimento}>
                <div className="identificacao">
                    <label className="title-label-usuario" htmlFor="usuario">Usuário:</label>
                    <p className="fake-input">{user}</p>
                </div>

                <div className="form-group">
                    <label htmlFor="tipoServico">Tipo de Serviço:</label>
                    <input
                        type="text"
                        id="tipoServico"
                        value={tipoServico}
                        onChange={(e) => setTipoServico(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="dataAtendimento">Data do Atendimento:</label>
                    <input
                        type="date"
                        id="dataAtendimento"
                        value={dataAtendimento}
                        onChange={(e) => setDataAtendimento(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="dataMarcacao">Data da Marcação:</label>
                    <input
                        type="date"
                        id="dataMarcacao"
                        value={dataMarcacao}
                        onChange={(e) => setDataMarcacao(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="statusAgendamento">Status do Agendamento:</label>
                    <input
                        type="text"
                        id="statusAgendamento"
                        value={statusAgendamento}
                        onChange={(e) => setStatusAgendamento(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="observacao">Observação:</label>
                    <textarea
                        id="observacao"
                        value={observacao}
                        onChange={(e) => setObservacao(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="fkIdFuncionario">ID do Funcionário:</label>
                    <input
                        type="number"
                        id="fkIdFuncionario"
                        value={fkIdFuncionario}
                        onChange={(e) => setFkIdFuncionario(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="fkIdUsuarioCliente">ID do Cliente:</label>
                    <input
                        type="number"
                        id="fkIdUsuarioCliente"
                        value={fkIdUsuarioCliente}
                        onChange={(e) => setFkIdUsuarioCliente(e.target.value)}
                        required
                    />
                </div>

                <div className="container__ponto__button">
                    <button type="button" className="style-ponto" onClick={() => setMostrarModal(true)}>Confirmar Agendamento</button>
                </div>

                <div className="frase-redireciona">
                    <p className="style-pergunta">Deseja ir para a página de login?</p>
                    <button className="style-criar-cadastro" onClick={linkLogin}>Login</button>
                </div>

                {mostrarModal && (
                    <ConfirmAcao
                        mensagem={`Você confirma este agendamento?`}
                        onConfirm={() => { AgendarAtendimento(); setMostrarModal(false); }}
                        onCancel={() => setMostrarModal(false)}
                    />
                )}
            </form>
        </div>
    );
}

export default FormAgenda;
