import DataBase from '../data/data.json'
import { useParams } from 'react-router-dom'


function Logement() {
  
const {id} = useParams()
console.log(id)
    return (
      <div>

      </div>
    )
  }
  
  export default Logement