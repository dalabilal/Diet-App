import './allPatientInfo.css'
import React, { useState } from 'react'
import { FilePdf, MagnifyingGlass, Trash } from 'phosphor-react'
import jsPDF from 'jspdf'
import Input from '../../Common/input/input.component'
import { PDFDownloadLink } from '@react-pdf/renderer'
import PDFFile from '../../Common/PDF/PDF.jsx'

const AllPatientInfo = () => {
  const patientJson = localStorage.getItem('patientSchedual') || '[]'
  const patient = JSON.parse(patientJson)
  const [patientName, setpatientName] = useState(JSON.parse(patientJson));
  const [searchTerm, setSearchTerm] = useState('');
  const [search, setSearch] = useState(false);

  const deleteRow = (id) => {
    console.log("id", id);
    const dataJson = (localStorage.getItem('patientSchedual') || '[]');
    const data = JSON.parse(dataJson).filter(data => data.id !== id);
    localStorage.setItem('patientSchedual', JSON.stringify(data));
    setpatientName(data);
  }
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const filteredData = patient.filter(item => {
    return item.patientName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="patientTable">
      <div className="search">
        <MagnifyingGlass size={30} color="white" onClick={() => setSearch(!search)} />
        { 
         search&& <Input
            placeholder="Search"
            onChange={handleSearch}
          />}
      </div>
      <table>
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Total Calories</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            filteredData.map((patient, index) => <tr key={index}>
              <td>{patient.patientName}</td>
              <td>{patient.weight}</td>
              <td>
                <PDFDownloadLink document={ <PDFFile id={patient.id}/> } fileName="Patient">
                {({loading}) => (loading ? <FilePdf size={30} color="white"/> : <FilePdf size={30} color="white"/>)}
                </PDFDownloadLink>
                <Trash size={30} onClick={() => deleteRow(patient.id)} />
              </td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  )
}

export default AllPatientInfo
