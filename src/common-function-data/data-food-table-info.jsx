
const useFoodData = (dimiss, id, image) => {
  let index = 0;


  const getMenuItems = () => JSON.parse(localStorage.getItem('foodData') || '[]');

  const findIndex = () => {
    const dataJson = localStorage.getItem('foodData') || '[]';
    const data = JSON.parse(dataJson);
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        index = i;
      }
    }
  }

  /**
    * Handles on change events on the name field.
    * @param {React.ChangeEvent<HTMLInputElement>} e On change event object.
  */

  const handler = e => {
    e.preventDefault();
    /**
     * @type {HTMLformElement}
     */
    
    let foodName = e.target.foodName.value;
    let foodImage = image;
    let calories = Number(e.target.calories.value);
    let amount = Number(e.target.amount.value);

    let foodData = {
      foodName: foodName,
      foodImage: foodImage,
      calories: calories,
      amount: amount,
      id: new Date()
    };

    const dataJson = localStorage.getItem('foodData') || '[]';
    const data = JSON.parse(dataJson);
    data.push(foodData);
    localStorage.setItem('foodData', JSON.stringify(data));

    dimiss();

  };


  /**
     * Handles on change events on the name field.
     * @param {React.ChangeEvent<HTMLInputElement>} e On change event object.
   */
  const handlerEdit = e => {
    e.preventDefault();
    findIndex();

    const dataJson = localStorage.getItem('foodData') || '[]';
    const data = JSON.parse(dataJson);
    let foodName = e.target.foodName.value;
    data[index].foodName = foodName;
    let foodImage = image;
    data[index].foodImage = foodImage;
    let calories = Number(e.target.calories.value);
    data[index].calories = calories;
    let amount = Number(e.target.amount.value);
    data[index].amount = amount;
    localStorage.setItem('foodData', JSON.stringify(data));


    dimiss();
  };

  return {
    submit: handler,
    submitEdit: handlerEdit,
    getMenuItems: getMenuItems
  }
}
export default useFoodData;