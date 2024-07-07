import useFoodData from '../../common-function-data/data-food-table-info';
import { PencilSimple, Trash } from 'phosphor-react';
import './foodRow.css'

/**
* @param {{ data : {
  *foodName: String,
  *foodImage: String,
  *calories: Number,
  *amount: Number,
  * id: Date
  *}, 
  * index : Number ,
  * setId : Function ,
  * id : String ,
  * setFood : Function ,
  * deleteRow : Function
  *}} props
 */
const FoodRow = (props) => {
  useFoodData(props.data.id)
  const getId = (id) => {
    props.setId(id)
  }
  return (
    <tr>
      <td>{props.data.foodName}</td>
      <td><img src={props.data.foodImage} alt="food" className="img" /></td>
      <td>{props.data.calories}</td>
      <td>{props.data.amount}</td>
      <td>
        <Trash size={32} onClick={() => props.deleteRow(props.data.id)} />
        <PencilSimple size={32} onClick={() => { getId(props.data.id) }} />
      </td>
    </tr>
  )
}

export default FoodRow
