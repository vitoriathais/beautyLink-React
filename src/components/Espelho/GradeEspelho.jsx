// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import BlocoOpção1 from './MenuSuperior/BlocoOpção1';
import BlocoOpção2 from './MenuSuperior/BlocoOpção2';
import Grade from './Grade/Grade'
import '../Espelho/Grade.css'

function GradeEspelho() {
    const [apiUrl, setApiUrl] = useState('https://batida-de-ponto-api-flask.vercel.app/Espelho');

    return (
        <div>
            <div style={{display: 'flex'}}>
                <BlocoOpção1 setApiUrl={setApiUrl}/>
                <BlocoOpção2/>
            </div>
            <div>
                <Grade apiUrl={apiUrl}/>
            </div>
        </div>
    )
}

export default GradeEspelho;
