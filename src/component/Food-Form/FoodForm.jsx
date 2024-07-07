import useFoodData from '../../common-function-data/data-food-table-info'
import Input from '../../Common/input/input.component'
import { useState } from 'react';
import './foodForm.css'
import InputFile from '../../Common/Input-File/InputFile';

const FoodForm = (props) => {
  const dataJson = (localStorage.getItem('foodData') || '[]');
  const data = JSON.parse(dataJson);
  const indx = data.find((food) => (props.id === food.id))
  const [meal, setMeal] = useState(indx)
  const [image, setImage] = useState(meal?.foodImage || '')
  const [imagename, setImagename] = useState('')
  const foodData = useFoodData(props.dismiss, props.id, image);

  const handelImageChange = (e) => {

    const file = e.target.files[0];
    setImagename(file.name);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result)
    }
  }

  return (
    <div className="form-group">
      <div className="foodForm">
        <div className="header-form">
          <h2> Fill All : </h2>

        </div>
        <form onSubmit={props.edit !== 0 ? foodData.submitEdit : foodData.submit}>
          <div className="form-content">
            <Input
              name="foodName"
              label="Food-Name"
              required
              value={meal?.foodName}
              onChange={(e) => { setMeal(e.target.value) }}
            />
            <Input
              name="calories"
              label="Calories"
              required
              value={meal?.calories}
              onChange={(e) => setMeal(e.target.value)}
            />
            <Input
              name="amount"
              label="Amount"
              required
              value={meal?.amount}
              onChange={(e) => setMeal(e.target.value)}
            />
            <InputFile
              name="foodImage"
              label="Select Image for Food"
              type="file"
              imagename={imagename}
              onChange={handelImageChange}
            />

            {indx ?
              <button className="submit" onClick={() => props.setEdit(props.id)}>Edit</button> :
              <button type="submit" className="submit" onClick={() => props.setEdit(0)}>Save</button>
            }
            <button
              onClick={() => props.dismiss()}
              className="cancel">
              Cancel
            </button>
          </div>
        </form>

      </div>
    </div>
  )

}

export default FoodForm
