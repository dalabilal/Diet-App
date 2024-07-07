import AllPatientInfo from './Main-Pages/view-Exist-Patient/AllPatientInfo';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Food from './Main-Pages/Manege-Table/MangeFood/Food';
import Patient from './Main-Pages/Add-New-Diet/Patient';
import HomePage from './component/HomePage/HomePage';
import LoginIn from './component/Login-in/LoginIn';
import Logo from './component/Header/Logo';
import './App.css';
import UserProvider from './component/Provider/UserProvider';


function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <Logo />
        <Routes>
          <Route path='/login' element={<LoginIn />} />
          <Route path="/" element={<Navigate to='/Home' replace />} />
          <Route path='/Home' element={<HomePage />} />
          <Route path='/AddNewDiet' element={<Patient />} />
          <Route path='/FoodPage' element={<Food />} />
          <Route path='/AllPatient' element={<AllPatientInfo />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
