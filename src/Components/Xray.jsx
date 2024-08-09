import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Xray = () => {

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
        };
    }, []);

    const [NationalId, setPatientID] = useState('');
    const [Type, setXrayType] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validation for NID to prevent negative values
        if (NationalId < 0) {
            toast.error("National ID cannot be negative");
            return;
        }

        // Create the userData object with fixed and user-entered properties
        let userData = {
            NationalId: NationalId,
            Type: Type
        };

        // POST request to the server
        axios.post('https://localhost:44389/api/Doctor/AskForXRays', userData)
            .then(res => {
                toast.success("User Registered Successfully");
            })
            .catch(err => {
                toast.error(err.message);
            });
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

            <h2 className="mb-2 title-color" style={{ marginLeft: '45%', marginTop: '10%' }}>Xray</h2>
            <form className="jotform-form" onSubmit={handleSubmit} method="post" acceptCharset="utf-8" autoComplete="on">
                <div role="main" className="form-all">
                    <ul className="form-section page-section">
                        <li className="form-line" data-type="control_number">
                            <label className="form-label form-label-top" htmlFor="patient_id" style={{ marginLeft: '45%' }}>Patient ID</label>
                            <input
                                type="text"
                                id="patient_id"
                                name="patient_id"
                                className="form-textbox"
                                autoComplete="off"
                                size="15"
                                value={NationalId} onChange={e => setPatientID(e.target.value)}
                                required
                            />
                        </li>

                        <li className="form-line" data-type="control_dropdown">
                            <label className="form-label form-label-top" htmlFor="xray_type" style={{ marginLeft: '45%' }}>Xray Type</label>
                            <select
                                name="xray_type"
                                id="xray_type"
                                className="form-dropdown"
                                value={Type} onChange={e => setXrayType(e.target.value)}
                                required
                            >
                                <option value="">Please select xray</option>
                                <option value="plain radiography">Plain Radiography</option>
                                <option value="CT scanning">CT Scanning</option>
                                <option value="fluoroscopy">Fluoroscopy</option>
                                <option value="mammography">Mammography</option>
                            </select>
                        </li>
                    </ul>

                    <button
                        type="submit"
                        className="nav-link allBtn"
                        style={{ color: 'white', padding: '10px', marginLeft: 'auto', marginRight: 'auto', display: 'block', textAlign: 'center', backgroundColor: '#332a7e', border: 'none', borderRadius: '5px', marginBottom: '25px', width: '150px' }}
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}


export default Xray;
