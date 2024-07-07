import './mealCard.css'

/**
* @param {{meal :{
* mealDay: String; 
* meal: String;
* mealAmount: Number;
* mealImage: String;
* TotalCalories: Number;
* },
* day : String
* }} props 
*/
const MealCard = (props) => {

    return (<>
        {props.meal.mealDay === props.day &&
            <div className="meal">
                <img src={props.meal.mealImage} alt="" />
                <div className="card-day">
                    <span>Meal : {props.meal.meal}</span>
                    <span>Amount : {props.meal.mealAmount}</span>
                    <span>Calories : {props.meal.TotalCalories}</span>
                </div>

            </div>
        }</>)

}

export default MealCard
