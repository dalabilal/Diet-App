import PatientSchedual from '../../component/Weekly-Schedual/PatientSchedual';
import submitPatientForm from '../../common-function-data/submitPatientForm';
import PatientForm from '../../component/Patient-Form/PatientForm'
import usePopUp from '../../common-function-data/popUp-useState'
import { useState } from 'react';
import './patient.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const Patient = () => {
  const [card, setCard] = useState(false);
  const [image , setImage] = useState('')
  const [clear , setClear] = useState(false)
  const navigate = useNavigate();
  const patientData = submitPatientForm(setCard,image,navigate);
  const [currentDay, setcurrentDay] = useState('Sat');
  const [mealForm, setMealForm] = usePopUp(false);


  return (
    <div className="patient">
      <form onSubmit={clear?patientData.submitClear : patientData.submitAddPatient} >
        <div className="save-button">
          <button type="submit" >
            Add Patient
          </button>
          
          <button type="submit" className="rest" onClick={() => setClear(true)} >
            Cancel
          </button>
        </div>
        <PatientForm 
        setImage={setImage}
        image={image}
        />
      </form>
      <PatientSchedual
        setcurrentDay={setcurrentDay}
        currentDay={currentDay}
        mealForm={mealForm}
        setMealForm={setMealForm}
      />
    </div>
  )
}

export default Patient
