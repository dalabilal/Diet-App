import FoodRow from '../Food-Row/FoodRow.jsx'
import { useState } from 'react';
import './foodTable.css'

const FoodTable = (props) => {
  const dataJson = (localStorage.getItem('foodData') || '[]');
  const data = JSON.parse(dataJson)
  const [food, setFood] = useState(JSON.parse(dataJson));


  const deleteRow = (id) => {
    console.log("id", id);
    const dataJson = (localStorage.getItem('foodData') || '[]');
    const data = JSON.parse(dataJson).filter(data => data.id !== id);
    localStorage.setItem('foodData', JSON.stringify(data));
    setFood(data);
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Food</th>
          <th>Image</th>
          <th>Amount(g/ml)</th>
          <th>Calories</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((data, index) => <FoodRow
          key={index}
          data={data}
          index={index}
          setId={props.setId}
          setFood={props.setFood}
          id={props.id}
          deleteRow={deleteRow}
        />)
        }
      </tbody>
    </table>
  )
}

export default FoodTable