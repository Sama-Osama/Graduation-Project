import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Medicine = () => {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [checkedMedicines, setCheckedMedicines] = useState([]);

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await axios.get('https://localhost:44389/api/Nurse/Medications');
        console.log('Fetched medicines response:', response.data);
        if (Array.isArray(response.data)) {
          setMedicines(response.data);
        } else {
          console.error('Unexpected data format:', response.data);
          toast.error('Unexpected data format received from the server.');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching medicines:', error);
        toast.error('Error fetching medicines.');
        setLoading(false);
      }
    };

    fetchMedicines();
  }, []);

  const handleCheckboxChange = (patientID, medicineName, timeSlot) => {
    // Add the checked item to the list
    setCheckedMedicines(prevChecked => [
      ...prevChecked,
      { patientID, timeSlot }
    ]);

    // Set timeout to remove the checked item after 1 minute
    setTimeout(() => {
      resetCheckbox(patientID, timeSlot);
    }, 86400000); //  24 hour
  };

  const resetCheckbox = (patientID, timeSlot) => {
    // Remove the checked item from the list
    setCheckedMedicines(prevChecked =>
      prevChecked.filter(item => !(item.patientID === patientID && item.timeSlot === timeSlot))
    );
  };

  const renderMedicine = (patientID, timeSlot) => {
    if (!Array.isArray(medicines)) return 'No Medicine Assigned';

    const medicine = medicines.find(m => m.patientNationalId === patientID && m.time.includes(timeSlot));

    if (!medicine) {
      return 'No Medicine Assigned';
    }

    const isChecked = checkedMedicines.some(item => item.patientID === patientID && item.timeSlot === timeSlot);

    return (
      <div>
        Medicine {medicine.medicineName.join(', ')}
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => handleCheckboxChange(patientID, medicine.medicineName, timeSlot)}
        />
      </div>
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const uniquePatientIDs = [...new Set(
    medicines.map(medicine => medicine.patientNationalId.toString())
  )];

  const timeSlots = ['Breakfast', 'Lunch', 'Dinner']; // Adjust according to your fetched data

  return (
    <div>
      <ToastContainer />
      <div className="container" style={{ width: '60%', marginTop: '2%' }}>
        <div className="row" style={{ width: '200%', marginLeft: '-17%' }}>
          <div className="col-md-offset-1 col-md-10" id="t3">
            <div className="panel" style={{ marginTop: '', width: '80%' }}>
              <div className="panel-heading">
                <div className="row">
                  <div className="col col-sm-3 col-xs-12">
                    <h4 className="title" style={{ marginLeft: '500px' }}>Medicine</h4>
                  </div>
                </div>
              </div>
              <div className="panel-body table-responsive" style={{ textAlign: 'center', width: '100%' }}>
                <table className="table">
                  <thead>
                    <tr style={{backgroundColor:"#2B5D82"}}>
                      <th >Patient_ID</th>
                      {timeSlots.map(slot => (
                        <th key={slot}>{slot}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {uniquePatientIDs.map(patientID => (
                      <tr style={{backgroundColor:"#2B5D82"}} key={patientID}>
                        <td style={{backgroundColor:"#2979AE"}}>{patientID}</td>
                        {timeSlots.map(slot => (
                          <td style={{backgroundColor:"#2979AE"}} key={slot}>{renderMedicine(patientID, slot)}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medicine;

