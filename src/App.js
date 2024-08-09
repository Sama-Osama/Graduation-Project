import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import PharmacyPage from './Pages/Pharmacy';
import SecretaryPage from './Pages/Secrtary';
import TestComponent from './Pages/Test';
import XrayPage from './Pages/Xray';
import Doctor from './Pages/Doctor';
import ITDepartment from './Pages/ITDepartment';
import PatientPage from './Pages/Patient';
import Booking from './Components/Booking';
import Clinicals from './Components/Clinicals';
import ClinicBooking from './Components/ClinicBooking';
import SignUP from './Pages/SignUP';
import VerifyPass from './Pages/VerfiyPass';
import ConfirmPass from './Pages/ConfirmPass';
import Nurse from './Pages/Nurse';
import AddAction from './Components/AddAction';
import Reciption from './Pages/Reciption';
import RoomNum from './Components/RoomNum';
import RoomBooking from './Components/RoomBooking';
import Payment from './Components/Payment';
import Diagnosis from './Components/Dignosis';
import Add from './Components/Add';
import Update from './Components/Update';
import Search from './Components/Search';
import Test from './Pages/Test';
import XrayResult from './Components/XrayResult';
import XrayAppointment from './Components/XrayAppintments';
import ProtectedRoute from './Pages/ProtectedRoute';
import TestAppointment from './Components/TestAppointments';


const App = () => {
  
  const [clinicalData, setClinicalData] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/pharmacy" element={
            <ProtectedRoute>
              <PharmacyPage />
            </ProtectedRoute>
          } />
        <Route path="/secrtary" element={<SecretaryPage />} />
        <Route path="/test" element={<TestComponent />} />
        <Route path="/xray"element={
            <ProtectedRoute>
              <XrayPage />
            </ProtectedRoute>
          } />
        <Route path="/doctor"  element={
            <ProtectedRoute>
              <Doctor />
            </ProtectedRoute>
          } />
        <Route path="/admin" element={
            <ProtectedRoute>
              <ITDepartment />
            </ProtectedRoute>
          } />
        <Route path="/patient"  element={
            <ProtectedRoute>
              <PatientPage />
            </ProtectedRoute>
          } />
        <Route path="/booking" element={ <Booking />}/>
        <Route path="/clinc" element={ <Clinicals />}/>
        <Route path="/clinicbooking" element={ <ClinicBooking />}/>
        <Route path="/signup" element={ <SignUP />}/>
        <Route path="/verify" element={ <VerifyPass />}/>
        <Route path="/confirm" element={ <ConfirmPass />}/>
        <Route path="/nurse" element={
            <ProtectedRoute>
              <Nurse />
            </ProtectedRoute>
          }/>
        <Route path="/addaction" element={ <AddAction />}/>
        <Route path="/reception" element={
            <ProtectedRoute>
              <Reciption />
            </ProtectedRoute>
          }/>
        <Route path="/roomNum" element={ <RoomNum />}/>
        <Route path="/roombook" element={ <RoomBooking />}/>
        <Route path="/payment" element={ <Payment />}/>
        <Route path="/diagnosis" element={ <Diagnosis />}/>
        <Route path="/testappointments" element={ <TestAppointment />}/>
        <Route path="/add" element={ <Add />}/>
        <Route path="/xrayres" element={ <XrayResult />}/>
        <Route path="/xrayapoointment" element={ <XrayAppointment />}/>
        <Route path="/update/:NID" element={<Update />} />
        <Route path="/" element={<Search setClinicalData={setClinicalData} />} />
        <Route path="/clinical" element={<Clinicals clinicalData={clinicalData} />} />
        <Route path="/tests"element={
            <ProtectedRoute>
              <Test />
            </ProtectedRoute>
          }/>

         
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};




export default App;
