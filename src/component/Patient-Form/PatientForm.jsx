import Select from '../../Common/select/select.component'
import InputFile from '../../Common/Input-File/InputFile'
import { City } from '../../common-function-data/City'
import Input from '../../Common/input/input.component'
import { useState } from 'react'
import './patientForm.css'

const PatientForm = (props) => {
  const [imagename, setImagename] = useState('');

  const handelImageChange = (e) => {
    const file = e.target.files[0];
    setImagename(file.name);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      props.setImage(reader.result)
    }
  }

  return (
    <div className="patient-info">
      <span className="info-title">Patient Information</span>
      <div className="info">
        <Input
          name="patientName"
          label="Name"
          required
        />
        <Input
          name="phoneNum"
          label="Phone"
          required
        />
        <Input
          name="age"
          label="Age"
          required
        />
        <Input
          name="date"
          label="Date"
          type="date"
          required
        />
        <Input
          name="weight"
          label="Weight"
          required
        />
        <Input
          name="email"
          label="Email"
          required
        />
        <Select
          label="City"
          name="city"
          required>
          {
            City.map((city, index) => {
              return <option
                value={city}
                key={index}>
                {city}
              </option>
            })
          }
        </Select>
        <InputFile
          type="file"
          name="photo"
          label="Select Photo"
          imagename={imagename}
          onChange={handelImageChange}
        />
      </div>
    </div>
  )
}

export default PatientForm
