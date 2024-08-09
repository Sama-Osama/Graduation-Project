
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TestAppointment = () => {
  const [testAppointments, setTestAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [checkedTests, setCheckedTests] = useState([]);

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await axios.get('https://localhost:44389/api/Test/ShowAllTests');
        console.log('Fetched Test response:', response.data);
        if (Array.isArray(response.data)) {
          setTestAppointments(response.data);
        } else {
          console.error('Unexpected data format:', response.data);
          toast.error('Unexpected data format received from the server.');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tests:', error);
        toast.error('Error fetching tests.');
        setLoading(false);
      }
    };

    fetchTests();
  }, []);

  const handleCheckboxChange = (patientID, testType, timeSlot) => {
    const isChecked = checkedTests.some(item => (
      item.patientID === patientID && 
      item.testType === testType && 
      item.timeSlot === timeSlot
    ));

    if (isChecked) {
      setCheckedTests(prevChecked =>
        prevChecked.filter(item => !(item.patientID === patientID && item.testType === testType && item.timeSlot === timeSlot))
      );
    } else {
      setCheckedTests(prevChecked => [
        ...prevChecked,
        { patientID, testType, timeSlot }
      ]);
    }

    setTimeout(() => {
      resetCheckbox(patientID, testType, timeSlot);
    }, 60000); // 1 minute
  };

  const resetCheckbox = (patientID, testType, timeSlot) => {
    setCheckedTests(prevChecked =>
      prevChecked.filter(item => !(item.patientID === patientID && item.testType === testType && item.timeSlot === timeSlot))
    );
  };

  const renderTest = (patientID, timeSlot) => {
    if (!Array.isArray(testAppointments)) return 'No Test Assigned';

    const filteredAppointments = testAppointments.filter(appointment => {
      const appointmentDate = new Date(appointment.dateTime);
      const slotDate = new Date(timeSlot);

      return (
        appointmentDate.getMonth() === slotDate.getMonth() &&
        appointmentDate.getDate() === slotDate.getDate() &&
        appointment.nationalId === patientID
      );
    });

    if (filteredAppointments.length === 0) {
      return 'No Test Assigned';
    }

    return filteredAppointments.map(appointment => {
      const isChecked = checkedTests.some(item => (
        item.patientID === patientID && 
        item.testType === appointment.type && 
        item.timeSlot === timeSlot
      ));

      return (
        <tr style={{backgroundColor:"#2979AE"}} key={`${patientID}-${appointment.type}-${timeSlot}`}>
          <td style={{backgroundColor:"#2979AE"}}>{appointment.nationalId}</td>
          <td style={{backgroundColor:"#2979AE"}}>{appointment.type}</td>
          {/* <td>{appointment.dateTime}</td> */}
          <td style={{backgroundColor:"#2979AE"}}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => handleCheckboxChange(patientID, appointment.type, timeSlot)}
            />
          </td>
        </tr>
      );
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  // Extract unique date parts (month and day) from dateTime for timeslot labels
  const timeSlots = Array.from(new Set(testAppointments.map(appointment => {
    const date = new Date(appointment.dateTime);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  })));

  const uniquePatientIDs = Array.isArray(testAppointments)
    ? [...new Set(testAppointments.map(appointment => appointment.nationalId?.toString()))]
    : [];

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
                    <h4 className="title" style={{ marginLeft: '350px' }}>TestAppointments</h4>
                  </div>
                </div>
              </div>
              <div className="panel-body table-responsive" style={{ textAlign: 'center', width: '100%' }}>
                <table className="table">
                  <thead>
                    <tr style={{backgroundColor:"#2B5D82"}}>
                      <th >Patient National ID</th>
                      {timeSlots.map(slot => (
                        <th key={slot}>{slot}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {uniquePatientIDs.map(patientID => (
                      <React.Fragment key={patientID}>
                        <tr>
                          <td style={{backgroundColor:"#2979AE"}}>{patientID}</td>
                          {timeSlots.map(slot => (
                            <td style={{backgroundColor:"#2979AE"}} key={slot}>
                              <table className="inner-table">
                                <tbody>
                                  {renderTest(patientID, slot)}
                                </tbody>
                              </table>
                            </td>
                          ))}
                        </tr>
                      </React.Fragment>
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

export default TestAppointment;















