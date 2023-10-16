import BlocoOpção1 from './MenuSuperior/BlocoOpção1';
import BlocoOpção2 from './MenuSuperior/BlocoOpção2';
import '../Espelho/Grade.css'

function GradeEspelho() {
    return (
        <div style={{display: 'flex'}}>
            <BlocoOpção1/>
            <BlocoOpção2/>

        </div>
    )

}

 export default GradeEspelho;