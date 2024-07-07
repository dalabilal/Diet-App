import renderMealCard from '../../common-function-data/renderMealCard';
import Select from '../../Common/select/select.component'
import Input from '../../Common/input/input.component';
import maelpic from '../../assests/meal1.jpg'
import { useState } from 'react';
import './mealForm.css'

const MealForm = (props) => {
  const dataJson = localStorage.getItem('foodData');
  const data = JSON.parse(dataJson);
  const [amount, setAmount] = useState(0);
  const [index, setIndex] = useState(0);
  const mealData = renderMealCard(props.setMealForm , index , amount , props.currentDay)

  return (
    <div className="meal-group">
      <div className="mealForm">
        <div className="header">
          <h2>Add Meal</h2>
        </div>

        <form onSubmit={mealData.submitMealCard}>
          <div className="meal-content">
            <div className="meal-info">
              <Select
                name="meal"
                label="Mael"
                value={index}
                onChange={(e) => setIndex(e.target.value)}>
                {data.map((data, index) =>
                   <option
                    key={index}
                    value={index} >{data.foodName}
                  </option>)}
              </Select>
              <Input
                name="mealAmount"
                label="Amount"
                placeholder="10gm"
                onChange={e => setAmount(e.target.value)}
              />
            </div>
            <div className="image-total">
              <img src={index !== 0 ? data[index].foodImage : maelpic} alt="" />
              <div className="total">
                Total-Calories : {data[index].calories * amount / data[index].amount}
              </div>
            </div>
            <div className="group-button">
              <button
                type="submit"
                className="submit">
                Add Meal
              </button>
              <button
                type="cancel"
                className="cancel"
                onClick={() => props.setMealForm(false)}>
                Cancel
              </button>
            </div>
          </div>
        </form>


      </div>
    </div>
  )
}

export default MealForm
