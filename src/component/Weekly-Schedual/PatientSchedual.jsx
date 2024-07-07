import MealForm from '../../component/Meal-Form/MealForm'
import { Day } from '../../common-function-data/day'
import MealCard from '../Card/MealCard'
import { Plus } from 'phosphor-react'
import { useState } from 'react'
import './patient-schedual.css'
import { useMemo } from 'react';

const PatientSchedual = (props) => {
    const mealJson = localStorage.getItem('mealCard') || '[]';
    const meal = JSON.parse(mealJson);
    const [currentTab, setCurrentTab] = useState('1');
    const [BlockDay, setBlockDay] = useState(true);

    const totalCaloriesOFTheDay = useMemo(() => meal.reduce((total, meal) => 
    total + (meal.mealDay === props.currentDay ? meal.TotalCalories : 0), 0), [meal, props.currentDay])

    return (
        <div className="patient-schedual">
            <div className="tab">
                {
                    Day.map((day, index) =>
                        <button
                            type="button"
                            key={index}
                            id={day.dayId}
                            disabled={currentTab === `${day.dayId}`}
                            onClick={(e) => {
                                props.setcurrentDay(day.day);
                                setBlockDay(true);
                                setCurrentTab(e.target.id)
                            }}>
                            {day.day}
                        </button>)
                }
            </div>
            {
                BlockDay &&
                <div className="tab-page">
                    {meal.length > 0 &&
                        meal.map((meal, index) =>
                            <MealCard
                                key={index}
                                day={props.currentDay}
                                meal={meal}
                            />)
                    }
                    <Plus
                        size={100}
                        onClick={() => { props.setMealForm(true) }}
                    />
                    {props.mealForm &&
                        <MealForm
                            currentDay={props.currentDay}
                            setMealForm={props.setMealForm}
                        />}
                </div>
            }

            <div className="total-cal">
                Total Calories : {totalCaloriesOFTheDay}
            </div>
        </div>
    )
}

export default PatientSchedual
