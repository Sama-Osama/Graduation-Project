import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';


const ClinicBooking = () => {
    useEffect(() => {
        const script1 = document.createElement('script');
        script1.src = "https://cdn03.jotfor.ms/static/prototype.forms.js?v=3.3.50539";
        script1.type = "text/javascript";
        document.body.appendChild(script1);

        const script2 = document.createElement('script');
        script2.src = "https://cdn01.jotfor.ms/static/jotform.forms.js?v=3.3.50539";
        script2.type = "text/javascript";
        document.body.appendChild(script2);

        const script3 = document.createElement('script');
        script3.src = "https://cdn02.jotfor.ms/js/vendor/maskedinput_5.0.9.min.js?v=3.3.50539";
        script3.type = "text/javascript";
        document.body.appendChild(script3);

        const script4 = document.createElement('script');
        script4.src = "https://cdn03.jotfor.ms/js/punycode-1.4.1.min.js?v=3.3.50539";
        script4.type = "text/javascript";
        script4.defer = true;
        document.body.appendChild(script4);

        const script5 = document.createElement('script');
        script5.src = "https://cdn01.jotfor.ms/js/payments/validategateways.js?v=3.3.50539";
        script5.type = "text/javascript";
        document.body.appendChild(script5);

        const script6 = document.createElement('script');
        script6.src = "https://cdn01.jotfor.ms/s/umd/6f82c562e06/for-form-branding-footer.js?v=3.3.50539";
        script6.type = "text/javascript";
        script6.defer = true;
        document.body.appendChild(script6);

        const script7 = document.createElement('script');
        script7.src = "https://cdn02.jotfor.ms/js/vendor/smoothscroll.min.js?v=3.3.50539";
        script7.type = "text/javascript";
        document.body.appendChild(script7);

        const script8 = document.createElement('script');
        script8.src = "https://cdn03.jotfor.ms/js/errorNavigation.js?v=3.3.50539";
        script8.type = "text/javascript";
        document.body.appendChild(script8);

        return () => {
            document.body.removeChild(script1);
            document.body.removeChild(script2);
            document.body.removeChild(script3);
            document.body.removeChild(script4);
            document.body.removeChild(script5);
            document.body.removeChild(script6);
            document.body.removeChild(script7);
            document.body.removeChild(script8);
        }
    }, []);


    const [appointments, setAppointments] = useState([
        { time: '8:00 - 8:15', booked: false },
        { time: '8:15 - 8:30', booked: false },
        { time: '8:30 - 8:45', booked: false },
        { time: '8:45 - 9:00', booked: false },
        { time: '9:00 - 9:15', booked: false },
        { time: '9:15 - 9:30', booked: false },
        { time: '9:30 - 9:45', booked: false },
        { time: '9:45 - 10:00', booked: false },
        { time: '10:00 - 10:15', booked: false },
        { time: '10:15 - 10:30', booked: false },
    ]);

    const [rows, setRows] = useState([...Array(10)].map(() => [...appointments]));
    const [patientId, setPatientId] = useState('');

    const location = useLocation();
    const clinicName = location.state?.clinicName || '';


    console.log(clinicName);

    // const toggleBooking = (rowIndex, columnIndex) => {
    //     setRows((prevRows) =>
    //         prevRows.map((row, i) =>
    //             i === rowIndex
    //                 ? row.map((appointment, j) =>
    //                     j === columnIndex ? { ...appointment, booked: !appointment.booked } : appointment
    //                 )
    //                 : row
    //         )
    //     );
    // };

    const toggleBooking = (rowIndex, columnIndex) => {
        setRows((prevRows) =>
            prevRows.map((row, i) =>
                i === rowIndex
                    ? row.map((appointment, j) =>
                        j === columnIndex ? { ...appointment, booked: !appointment.booked } : appointment
                    )
                    : row
            )
        );
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Filter booked appointments
        const bookedAppointments = rows[0].filter((appointment) => appointment.booked);
    
        // Prepare data object
        const data = {
            patientId: patientId.trim(), // Ensure patientId is trimmed and non-empty
            clinicName: clinicName.trim(), // Ensure clinicName is trimmed and non-empty
            appointments: bookedAppointments.map((appointment) => appointment.time),
        };
    
        console.log("Request Data:", data); // Log data being sent
    
        try {
            // Make POST request to API
            const response = await axios.post('https://localhost:44389/api/Patient/ReserveClinic', data);
    
            console.log("Response Data:", response.data); // Log successful response data
            toast.success('Appointment Reserved successfully.');
        } catch (error) {
            console.error("Error:", error.response?.data || error.message); // Log error response
            toast.error('Error: Appointment Reservation Failed.');
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
            <h2 class="mb-2 title-color" style={{ marginLeft: "45%", marginTop: "20px" }}>Clinicals</h2>

            <form onSubmit={handleSubmit}>
                <div style={{ marginLeft: "42%", marginBottom: "30px", marginTop: "40px" }}>
                    <input type="text" value={patientId} placeholder='Enter Patient ID' onChange={(event) => setPatientId(event.target.value)} style={{ borderRadius: "8px" }} />
                </div>
                <div className="container" style={{ width: '60%' }}>
                    <div className="row" style={{ width: '200%', marginLeft: '-17%' }}>
                        <div className="col-md-offset-1 col-md-10" id="t3">
                            <div className="panel" style={{ marginTop: '', width: '80%' }}>
                                <div className="panel-heading">
                                    <div className="row">
                                        <div className="col col-sm-3 col-xs-12">
                                            <h4 className="title">Appointments</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-body table-responsive" style={{ textAlign: 'center', width: '130%' }}>
                                    <table className='table' style={{ width: "77%" }}>
                                        <thead>
                                            <tr style={{backgroundColor:"#2B5D82"}}>
                                                <th>#</th>
                                                <th>8:00 - 8:15</th>
                                                <th>8:15 - 8:30</th>
                                                <th>8:30 - 8:45</th>
                                                <th>8:45 - 9:00</th>
                                                <th>9:00 - 9:15</th>
                                                <th>9:15 - 9:30</th>
                                                <th>9:30 - 9:45</th>
                                                <th>9:45 - 10:00</th>
                                                <th>10:00 - 10:15</th>
                                                <th>10:15 - 10:30</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {rows.map((row, rowIndex) => (
                                                <tr style={{backgroundColor:"#2B5D82"}} key={rowIndex}>
                                                    <td style={{backgroundColor:"#2979AE"}}>{rowIndex + 1}</td>
                                                    {row.map((appointment, columnIndex) => (
                                                        <td style={{backgroundColor:"#2979AE"}} key={columnIndex}>
                                                            <input
                                                                type="checkbox"
                                                                checked={appointment.booked}
                                                                onChange={() => toggleBooking(rowIndex, columnIndex)}
                                                            />
                                                        </td>
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
                <button type="submit" style={{
                    color: 'white',
                    padding: '10px 20px',
                    marginLeft: '42%',
                    marginTop: "50px",
                    marginBottom: "30px",
                    borderRadius: "5px",
                    backgroundColor: '#5c7993'
                }}>Book Appointments</button>
            </form>
        </div>
    );
};

export default ClinicBooking;