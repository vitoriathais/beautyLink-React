/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import reactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App';
import FormLogin from './components/Pages/FormLogin';
import FormCadastro from './components/Pages/FormCadastro';
import FormPonto from './components/Pages/FormPonto';
import './index.css'
import PageError from './components/Pages/PageError';

const Rotas=createBrowserRouter([
    { path: "/", 
    element: <App/>,
    errorElement: <PageError/>,
    children: [
        {
        path:"/", 
        element: <FormLogin/>
        },

        {
        path:"/Cadastro", 
        element: <FormCadastro/>
        },
        {
        path:"/Ponto", 
        element:<FormPonto/>
        }
      ],
    },
]);

reactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={Rotas}/>
    </React.StrictMode>
);