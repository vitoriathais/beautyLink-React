/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      const response = await axios.post('https://beauty-link-python.vercel.app/cadastro', novoUsuario);
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
    navigate('/Espelho');
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <h1 className="card-title text-center mb-4">Tela Cadastro</h1>
            <form>
              <div className="mb-3">
                <label className="form-label" htmlFor="name">Nome</label>
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Digite o seu nome..."
                  value={novoUsuario.nome}
                  onChange={(e) => setNovoUsuario({ ...novoUsuario, nome: e.target.value })}
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="usuario">Usuário</label>
                <input
                  className="form-control"
                  type="text"
                  id="usuario"
                  name="usuario"
                  placeholder="Crie seu nome de usuário..."
                  value={novoUsuario.usuario}
                  onChange={(e) => setNovoUsuario({ ...novoUsuario, usuario: e.target.value })}
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Digite seu email..."
                  value={novoUsuario.email}
                  onChange={(e) => setNovoUsuario({ ...novoUsuario, email: e.target.value })}
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="password">Senha</label>
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Crie sua senha..."
                  value={novoUsuario.senha}
                  onChange={(e) => setNovoUsuario({ ...novoUsuario, senha: e.target.value })}
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="confirmaSenha">Confirme sua senha</label>
                <input
                  className="form-control"
                  type="password"
                  id="confirmaSenha"
                  name="confirmaSenha"
                  placeholder="Confirme sua senha..."
                  value={confirmaSenha}
                  onChange={(e) => setConfirmaSenha(e.target.value)}
                />
              </div>

              <button className="btn btn-primary w-100 mb-3" type="button" onClick={handleCriarUsuario}>Cadastrar</button>
              <button className="btn btn-secondary w-100" type="button" onClick={linkEspelho}>Espelho</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
