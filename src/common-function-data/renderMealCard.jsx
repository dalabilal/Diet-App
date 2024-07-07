
const renderMealCard = (setMealForm , index , amount , currentDay) => {
    const dataJson = localStorage.getItem('foodData');
    const data = JSON.parse(dataJson);

    const handelMealCard = (e) => {
        e.preventDefault();
        /**
         * @type {HTMLformElement}
         */
    
        let meal = data[index].foodName;
        let mealAmount = Number(e.target.mealAmount.value);
        let mealImage = data[index].foodImage;
        let TotalCalories = Number(data[index].calories * amount / data[index].amount);
    
        let mealCard = {
          mealDay: currentDay,
          meal: meal,
          mealAmount: mealAmount,
          mealImage: mealImage,
          TotalCalories: TotalCalories,
        };
    
        const mealJson = localStorage.getItem('mealCard') || '[]';
        const mealParse = JSON.parse(mealJson);
        mealParse.push(mealCard);
        localStorage.setItem('mealCard', JSON.stringify(mealParse));
    
        setMealForm(false)
      }

      return {
        submitMealCard : handelMealCard 
      }
}
export default renderMealCard;