import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TestAppointment = () => {
    const [Test, settest] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchtest = async () => {
            try {
                const response = await axios.get('http://localhost:8000/Tests'); // Replace with your API endpoint
                console.log('Fetched Xray response:', response.data);
                if (Array.isArray(response.data)) {
                    settest(response.data);
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

        fetchtest();
    }, []);

    const handleCheckboxChange = (nationalID, name, type, timeSlot, checked) => {
        const payload = {
            nationalID,
            name,
            type,
            timeSlot,
            role:"Test",
            checked
        };
        axios.post('http://localhost:8000/Tests', payload) // Replace with your API endpoint
            .then(response => {
                console.log('Update response:', response.data);
                toast.success('Test status updated successfully.');
            })
            .catch(error => {
                console.error('Error updating test status:', error);
                toast.error('Error updating test status.');
            });
    };

    const rendertest = (entry, timeSlot) => {
        if (entry.timeSlot !== timeSlot) return null;
        return (
            <div key={entry.nationalID}>
                <div>Patient ID: {entry.nationalID}</div>
                <div>Name: {entry.name}</div>
                <div>Test Type: {entry.type}</div>
                <input
                    type="checkbox"
                    onChange={e => handleCheckboxChange(entry.nationalID, entry.name, entry.type, timeSlot, e.target.checked)}
                />
            </div>
        );
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

            <div className="container" style={{ width: '60%', marginTop: '2%' }}>
                <div className="row" style={{ width: '200%', marginLeft: '-17%' }}>
                    <div className="col-md-offset-1 col-md-10" id="t3">
                        <div className="panel" style={{ marginTop: '', width: '80%' }}>
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col col-sm-3 col-xs-12">
                                        <h4 className="title" style={{ marginLeft: '500px' }}>Test</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-body table-responsive" style={{ textAlign: 'center', width: '100%' }}>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>8AM-10AM</th>
                                            <th>10AM-12PM</th>
                                            <th>12PM-2PM</th>
                                            <th>2PM-4PM</th>
                                            <th>4PM-6PM</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Test.map(entry => (
                                            <tr key={entry.nationalID}>
                                                <td>{rendertest(entry, '8:00 AM - 10:00 AM')}</td>
                                                <td>{rendertest(entry, '10:00 AM - 12:00 PM')}</td>
                                                <td>{rendertest(entry, '12:00 PM - 2:00 PM')}</td>
                                                <td>{rendertest(entry, '2:00 PM - 4:00 PM')}</td>
                                                <td>{rendertest(entry, '4:00 PM - 6:00 PM')}</td>
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

export default TestAppointment;
