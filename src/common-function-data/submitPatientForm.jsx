
const submitPatientForm = (setCard, image , navigate) => {
    const mealJson = localStorage.getItem('mealCard') || '[]';
    const meal = JSON.parse(mealJson);

    const handleClear = (e) => {
        console.log("clear");
        let patientName = e.target.patientName.value;
        patientName = '';
        let phoneNum = e.target.phoneNum.value;
        phoneNum = '';
        let age = e.target.age.value;
        age = '';
        let date = e.target.date.value;
        date = '';
        let weight = e.target.weight.value;
        weight = '';
        let email = e.target.email.value;
        email = '';
        let photo = image;
        photo = '';
        localStorage.setItem('mealCard', JSON.stringify([]));
    }

    const handleAddPatient = e => {

        e.preventDefault();
        /**
         * @type {HTMLformElement}
         */

        let patientName = e.target.patientName.value;
        let phoneNum = e.target.phoneNum.value;
        let age = e.target.age.value;
        let date = e.target.date.value;
        let weight = e.target.weight.value;
        let email = e.target.email.value;
        let photo = image;


        let patientSchedual = {
            patientName: patientName,
            phoneNum: phoneNum,
            age: age,
            date: date,
            weight: weight,
            email: email,
            meal: meal,
            photo: photo,
            id: new Date(),
        };

        const dataJson = localStorage.getItem('patientSchedual') || '[]';
        const data = JSON.parse(dataJson);
        data.push(patientSchedual);
        localStorage.setItem('patientSchedual', JSON.stringify(data));

        setCard(true);
        localStorage.setItem('mealCard', JSON.stringify([]));
        navigate('/AllPatient');
    }

    return {
        submitAddPatient: handleAddPatient,
        submitClear : handleClear
    }
}

export default submitPatientForm;