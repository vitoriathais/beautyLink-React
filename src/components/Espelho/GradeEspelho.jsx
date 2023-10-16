import BlocoOpção1 from './MenuSuperior/BlocoOpção1';
import BlocoOpção2 from './MenuSuperior/BlocoOpção2';
import Grade from './Grade/Grade'
import '../Espelho/Grade.css'

function GradeEspelho() {
    return (
        <div>
            <div style={{display: 'flex'}}>
                <BlocoOpção1/>
                <BlocoOpção2/>
            </div>
            <div>
                <Grade/>
            </div>
        </div>
    )

}

 export default GradeEspelho;