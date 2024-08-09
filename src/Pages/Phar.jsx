import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Phar = () => {
  const [patientNationalId, setPatientNationalId] = useState('');
  const [date, setDate] = useState('');
  const [patientData, setPatientData] = useState({
    Patientname: '',
    Diagnosis: '',
    Medicine: [], 
  });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`https://localhost:44389/api/Pharmacy/GetPatientMedication`, {
        params: {
          Id: patientNationalId,
          date: date,
        },
      });

      const data = response.data;
      console.log('Fetched data:', data); // Log the fetched data

      if (data) {
        setPatientData({
          Patientname: data.patientName,
          Diagnosis: data.diagnosis,
          Medicine: data.medicine,
        });
        setError(null); // Reset error state
      } else {
        setPatientData({
          Patientname: '',
          Diagnosis: '',
          Medicine: [],
        });
        setError('No medication found for the selected date.');
      }
    } catch (error) {
      console.error('Error fetching patient data:', error);
      setError('Error fetching patient data. Please try again.');
      setPatientData({
        Patientname: '',
        Diagnosis: '',
        Medicine: [],
      });
    }
  };

  return (
    <div>
      <ToastContainer />

      <link type="text/css" rel="stylesheet" href="https://cdn01.jotfor.ms/stylebuilder/static/form-common.css?v=5ded9b4" />
      <style type="text/css">
        {`@media print {
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
          }

          .form-section {
            display: inline !important;
          }

          .form-pagebreak {
            display: none !important;
          }

          .form-section-closed {
            height: auto !important;
          }

          .page-section {
            position: initial !important;
          }
        }`}
      </style>
      <link type="text/css" rel="stylesheet" href="https://cdn02.jotfor.ms/themes/CSS/5e6b428acc8c4e222d1beb91.css?v=3.3.50539&themeRevisionID=63e6805f64383509e31513f4" />
      <link type="text/css" rel="stylesheet" href="https://cdn03.jotfor.ms/css/styles/payment/payment_styles.css?3.3.50539" />
      <link type="text/css" rel="stylesheet" href="https://cdn01.jotfor.ms/css/styles/payment/payment_feature.css?3.3.50539" />
      <link type="text/css" rel="stylesheet" href="https://cdn02.jotfor.ms/stylebuilder/static/donationBox.css?v=3.3.50539" />

      <form onSubmit={handleSubmit} className="jotform-form" acceptCharset="utf-8" autoComplete="on" >
        <input type="hidden" name="formID" value="240234767427560" />
        <input type="hidden" id="JWTContainer" value="" />
        <input type="hidden" id="cardinalOrderNumber" value="" />
        <input type="hidden" id="jsExecutionTracker" name="jsExecutionTracker" value="build-date-1706118061123" />
        <input type="hidden" id="submitSource" name="submitSource" value="unknown" />
        <input type="hidden" id="buildDate" name="buildDate" value="1706118061123" />
        <div className="form-all">
          <ul className="form-section page-section">
            <li id="cid_43" className="form-input-wide" data-type="control_head"></li>
            <li className="form-line" data-type="control_birthdate" id="id_39">
              <label className="form-label form-label-top" id="label_39" htmlFor="input_nationalID" aria-hidden="false" style={{ marginLeft: '45%' }}>
                PatientID
              </label>
              <input
                type="text"
                value={patientNationalId}
                onChange={(e) => setPatientNationalId(e.target.value)}
                required
                className="form-textbox"
              />
            </li>
            <li className="form-line" data-type="control_birthdate" id="id_39">
              <label className="form-label form-label-top" id="label_39" htmlFor="input_name" aria-hidden="false" style={{ marginLeft: '45%' }}>
                Date of Medicine:
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="form-textbox"
                autoComplete="section-input_56 family-name"
                size="15"
                data-component="last"
                aria-labelledby="label_39"
              />
            </li>
            <br />
            <button className="nav-link allBtn" style={{ color: 'white', padding: '20px 20px', marginLeft: 'auto', marginRight: 'auto', display: 'block', textAlign: 'center', backgroundColor: '#332a7e', border: 'none', borderRadius: '5px', marginBottom: '25px', width: '200px' }} type="submit">Show Medication</button>
          </ul>
        </div>
      </form>

      {error && <div>Error: {error}</div>}

      <div className="jotform-form" acceptCharset="utf-8" autoComplete="on" style={{background:"white",width:"60%",marginLeft:"20%",padding:"10px 20px",marginBottom:"50px"}}>
        <h2>Patient Name: {patientData.Patientname}</h2>
        <p>Diagnosis: {patientData.Diagnosis}</p>
        <h3>Medications:</h3>
        <ul>
          {patientData.Medicine.map((med, index) => (
            <li key={index}>{med}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Phar;
