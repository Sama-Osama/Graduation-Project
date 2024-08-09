import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Shifts = () => {
  const [shifts, setShifts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShifts = async () => {
      try {
        const response = await axios.get('https://localhost:44389/api/Nurse/GetAllShifts');
        console.log('Fetched shifts response:', response.data);
        if (Array.isArray(response.data)) {
          setShifts(response.data);
        } else {
          console.error('Unexpected data format:', response.data);
          toast.error('Unexpected data format received from the server.');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching shifts:', error);
        toast.error('Error fetching shifts.');
        setLoading(false);
      }
    };

    fetchShifts();
  }, []);

  const renderShiftsByTimeSlot = () => {
    // Group shifts by shift time
    const shiftsByTime = {};
    shifts.forEach(shift => {
      if (!shiftsByTime[shift.shift]) {
        shiftsByTime[shift.shift] = [];
      }
      shiftsByTime[shift.shift].push(shift.name);
    });

    return Object.entries(shiftsByTime).map(([shiftTime, names], index) => (
      <tr style={{backgroundColor:"#2979AE"}} key={index}>
        <td style={{backgroundColor:"#2979AE"}}>{shiftTime}</td>
        {names.map((name, idx) => (
          <td style={{backgroundColor:"#2979AE"}} key={idx}>{name}</td>
        ))}
      </tr>
    ));
  };

  if (loading) {
    return <div>Loading...</div>;
  }


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
                display: inline !important
            }

            .form-pagebreak {
                display: none !important
            }

            .form-section-closed {
                height: auto !important
            }

            .page-section {
                position: initial !important
            }
        }`}
      </style>
      <link type="text/css" rel="stylesheet" href="https://cdn02.jotfor.ms/themes/CSS/5e6b428acc8c4e222d1beb91.css?v=3.3.50539&themeRevisionID=63e6805f64383509e31513f4" />
      <link type="text/css" rel="stylesheet" href="https://cdn03.jotfor.ms/css/styles/payment/payment_styles.css?3.3.50539" />
      <link type="text/css" rel="stylesheet" href="https://cdn01.jotfor.ms/css/styles/payment/payment_feature.css?3.3.50539" />
      <link type="text/css" rel="stylesheet" href="https://cdn02.jotfor.ms/stylebuilder/static/donationBox.css?v=3.3.50539" />

      <div className="container" style={{ width: '60%', marginTop: '5%' }}>
        <div className="row" style={{ width: '200%', marginLeft: '-17%' }}>
          <div className="col-md-offset-1 col-md-10" id="t3">
            <div className="panel" style={{ marginTop: '', width: '80%' }}>
              <div className="panel-heading">
                <div className="row">
                  <div className="col col-sm-3 col-xs-12">
                    <h4 className="title" style={{ marginLeft: '500px' }}>Shifts</h4>
                  </div>
                </div>
              </div>
              <div className="panel-body table-responsive" style={{ textAlign: 'center', width: '100%' }}>
                <table className="table">
                  <thead>
                    <tr style={{backgroundColor:"#2B5D82"}}>
                      <th>Shift Time</th>
                      <th colSpan={4}>Nurse Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {renderShiftsByTimeSlot()}
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

export default Shifts;
