import { useParams} from 'react-router-dom'

const IdentificadorParam = () => {
    const {id} = useParams();
  
    return <div>Exibindo mais informações da conta {id}</div>

}

export default IdentificadorParam