/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import FormLogin from './Pages/FormLogin';
import FormPonto from './Pages/FormPonto';
import FormCadastro from './Pages/FormCadastro';
import App from '../App';

// eslint-disable-next-line react-refresh/only-export-components
const Rotas=createBrowserRouter([
    { path: "/", 
    element: <App/>,
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
        },
      ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={Rotas}/>
    </React.StrictMode>
);
