/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
  const [novoUsuario, setNovoUsuario] = useState({ nome: '', usuario: '', email: '', senha: '' });
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const navigate = useNavigate();

  const handleCriarUsuario = async () => {
    if (novoUsuario.senha !== confirmaSenha) {
      alert('As senhas não correspondem!');
      return;
    }

    try {
      const response = await axios.post('https://batida-de-ponto-api-flask.vercel.app/cadastro', novoUsuario);
      alert(response.data.message);
      navigate('/');
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert(error.message);
      }
    }
  };

  const linkEspelho = () => {
    return navigate ('/Espelho');
  }


  return (
    <div className="wrap-cadastro">
      <h1>Tela Cadastro</h1>
        <label className="title-label-usuario" htmlFor="name">Nome: </label>

        <input className="input" type="text"
        name="name"
        placeholder="Digite o seu nome..."
          value={novoUsuario.nome}
          onChange={(e) => setNovoUsuario({ ...novoUsuario, nome: e.target.value })}
        />

        <label className="title-label-senha" htmlFor="usuario">Usuario: </label>

          <input className="input" type="text" 
          name="usuario" 
          placeholder="Crie seu nome de usuario..."
          value={novoUsuario.usuario}
          onChange={(e) => setNovoUsuario({ ...novoUsuario, usuario: e.target.value })}
        />

         <label className="title-label-senha" htmlFor="email">Email: </label>

        <input className="input" type="email"
          name="email" 
          placeholder="Digite seu email..."
          value={novoUsuario.email}
          onChange={(e) => setNovoUsuario({ ...novoUsuario, email: e.target.value })}
        />

        <label className="title-label-senha" htmlFor="password">Senha: </label>

        <input className="input" type="password"
        name="password"
        placeholder="Crie sua senha..."
        value={novoUsuario.senha}
        onChange={(e) => setNovoUsuario({ ...novoUsuario, senha: e.target.value })}
        />
        
        <label className="title-label-senha" htmlFor="Confirmação de Senha">Confirme sua senha: </label>
                    
          <input className="input" type="password"
          name="confirmação de senha" 
          placeholder="Confirme sua senha..."
          value={confirmaSenha}
          onChange={(e) => setConfirmaSenha(e.target.value)}
        />

        <button className="style-cadastrar" onClick={handleCriarUsuario}>Cadastrar</button>

                    <button className="style-criar-cadastro" onClick={linkEspelho}>Espelho</button>
      </div>
  );
}

export default Cadastro;
