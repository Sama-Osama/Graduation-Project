import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/style.scss';

const XrayAppointment = () => {
  const [xrayAppointments, setXrayAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [checkedXrays, setCheckedXrays] = useState([]);

  useEffect(() => {
    const fetchXrays = async () => {
      try {
        const response = await axios.get('https://localhost:44389/api/XRay/ShowAllXRays');
        console.log('Fetched Xray response:', response.data);
        if (Array.isArray(response.data)) {
          setXrayAppointments(response.data);
        } else {
          console.error('Unexpected data format:', response.data);
          toast.error('Unexpected data format received from the server.');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching xrays:', error);
        toast.error('Error fetching xrays.');
        setLoading(false);
      }
    };

    fetchXrays();
  }, []);

  const handleCheckboxChange = (nationalId, xrayType, timeSlot) => {
    const isChecked = checkedXrays.some(item => (
      item.nationalId === nationalId &&
      item.xrayType === xrayType &&
      item.timeSlot === timeSlot
    ));

    if (isChecked) {
      setCheckedXrays(prevChecked =>
        prevChecked.filter(item => !(item.nationalId === nationalId && item.xrayType === xrayType && item.timeSlot === timeSlot))
      );
    } else {
      setCheckedXrays(prevChecked => [
        ...prevChecked,
        { nationalId, xrayType, timeSlot }
      ]);
    }

    setTimeout(() => {
      resetCheckbox(nationalId, xrayType, timeSlot);
    }, 60000); // 1 minute
  };

  const resetCheckbox = (nationalId, xrayType, timeSlot) => {
    setCheckedXrays(prevChecked =>
      prevChecked.filter(item => !(item.nationalId === nationalId && item.xrayType === xrayType && item.timeSlot === timeSlot))
    );
  };

  const renderXray = (nationalId, timeSlot, index) => {
    if (!Array.isArray(xrayAppointments)) return 'No X-ray Assigned';

    const filteredAppointments = xrayAppointments.filter(appointment => {
      const appointmentDate = new Date(appointment.dateTime);
      const slotDate = new Date(timeSlot);

      return (
        appointmentDate.getMonth() === slotDate.getMonth() &&
        appointmentDate.getDate() === slotDate.getDate() &&
        appointment.nationalId === nationalId
      );
    });

    if (filteredAppointments.length === 0) {
      return 'No X-ray Assigned';
    }

    const firstAppointment = filteredAppointments[0];

    // Ensure the first cell is always filled
    if (index === 0 && firstAppointment) {
      const isChecked = checkedXrays.some(item => (
        item.nationalId === nationalId &&
        item.xrayType === firstAppointment.type &&
        item.timeSlot === timeSlot
      ));

      return (
        <tr style={{backgroundColor:"#2B5D82"}} key={`${nationalId}-${firstAppointment.type}-${timeSlot}`}>
          <td style={{backgroundColor:"#2979AE"}}>{firstAppointment.type} for Patient ID: {firstAppointment.nationalId}</td>
          <td style={{backgroundColor:"#2979AE"}}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => handleCheckboxChange(nationalId, firstAppointment.type, timeSlot)}
            />
          </td>
        </tr>
      );
    }

    return filteredAppointments.map(appointment => {
      const isChecked = checkedXrays.some(item => (
        item.nationalId === nationalId &&
        item.xrayType === appointment.type &&
        item.timeSlot === timeSlot
      ));

      return (
        <tr style={{backgroundColor:"#2B5D82"}}key={`${nationalId}-${appointment.type}-${timeSlot}`}>
          <td style={{backgroundColor:"#2979AE"}}>{appointment.type} for Patient ID: {appointment.nationalId}</td>
          <td style={{backgroundColor:"#2979AE"}}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => handleCheckboxChange(nationalId, appointment.type, timeSlot)}
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
  const timeSlots = Array.from(new Set(xrayAppointments.map(appointment => {
    const date = new Date(appointment.dateTime);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  })));

  const uniquePatientIDs = Array.isArray(xrayAppointments)
    ? [...new Set(xrayAppointments.map(appointment => appointment.nationalId))]
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
                    <h4 className="title" style={{ marginLeft: '350px'}}>XRayAppointments</h4>
                  </div>
                </div>
              </div>
              <div className="panel-body table-responsive" style={{ textAlign: "center" }}>
                <table className="table">
                  <thead>
                    <tr style={{backgroundColor:"#2B5D82"}} colSpan={4}>
                      {timeSlots.map(slot => (
                        <th key={slot}>{slot}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {uniquePatientIDs.map((nationalId, index) => (
                      <React.Fragment key={nationalId}>
                        <tr style={{backgroundColor:"#2B5D82"}}>
                          {timeSlots.map(slot => (
                            <td style={{backgroundColor:"#2979AE"}} key={slot}>
                              <table className="inner-table">
                                <tbody>
                                  {renderXray(nationalId, slot, index)}
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

export default XrayAppointment;
