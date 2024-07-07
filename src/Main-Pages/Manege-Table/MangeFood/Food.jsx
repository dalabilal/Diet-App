import FoodTable from '../../../component/Food-Table/FoodTable'
import FoodForm from '../../../component/Food-Form/FoodForm'
import { useState } from 'react'
import './food.css'

const Food = () => {
  const [edit, setEdit] = useState(0)
  const [id, setId] = useState("");

  return (
    <div className="food">
      <div className="button-group">
        <button
          onClick={() => {
            setId('new');
          }}>
          Add New +
        </button>
      </div>
      {
        id &&
        <FoodForm
          id={id}
          edit={edit}
          setId={setId}
          setEdit={setEdit}
          dismiss={() => setId('')}
        />
      }
      <FoodTable
        id={id}
        setId={setId}
      />
    </div>
  )
}

export default Food
