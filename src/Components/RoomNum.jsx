import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RoomBooking from './RoomBooking';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const RoomNum = ({ formType }) => {

    useEffect(() => {
        const loadScripts = async () => {
            const scriptUrls = [
                "https://cdn03.jotfor.ms/static/prototype.forms.js?v=3.3.50539",
                "https://cdn01.jotfor.ms/static/jotform.forms.js?v=3.3.50539",
                "https://cdn02.jotfor.ms/js/vendor/maskedinput_5.0.9.min.js?v=3.3.50539",
                "https://cdn03.jotfor.ms/js/punycode-1.4.1.min.js?v=3.3.50539",
                "https://cdn01.jotfor.ms/js/payments/validategateways.js?v=3.3.50539",
                "https://cdn01.jotfor.ms/s/umd/6f82c562e06/for-form-branding-footer.js?v=3.3.50539",
                "https://cdn02.jotfor.ms/js/vendor/smoothscroll.min.js?v=3.3.50539",
                "https://cdn03.jotfor.ms/js/errorNavigation.js?v=3.3.50539"
            ];

            const loadScript = async (url) => {
                return new Promise((resolve, reject) => {
                    const script = document.createElement('script');
                    script.src = url;
                    script.type = 'text/javascript';
                    script.async = true;
                    script.onload = resolve;
                    script.onerror = reject;
                    document.head.appendChild(script);
                });
            };

            await Promise.all(scriptUrls.map(url => loadScript(url)));
        };

        loadScripts();

        return () => {
            // Clean up function to remove added scripts
            document.querySelectorAll('script').forEach(script => {
                if (script.src.includes('jotfor.ms')) {
                    document.head.removeChild(script);
                }
            });
        };
    }, []);



    const [formData, setFormData] = useState({
        nationalID: '',
        name: '',
        department: '',
        room_num: '',
    });

    const [formData2, setFormData2] = useState({
        nationalID: '',
        name: '',
        department: '',
        type: '',
        room_num: '',

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    const handleChange2 = (e) => {
        const { name, value } = e.target;
        setFormData2(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            if (formType === 'Operation') {
                await axios.post('https://localhost:44389/api/Reception/ReserveOperationRoom', formData);
            } else if (formType === 'Normal') {
                await axios.post('https://localhost:44389/api/Reception/ReserveNormalRoom', formData2);
            }
            toast.success("Room Booking Successful");
            setTimeout(() => {
                window.location.href = "/reception";
            }, 2000);
        } catch (error) {
            toast.error(error.message);
        }
    };




    const renderForm = () => {
        switch (formType) {
            case 'Operation':
                return (
                    <div>
                        <ToastContainer />

                        <h2 className="mb-2 title-color" style={{ marginLeft: '45%', marginTop: '10%' }}>Operation Room</h2>

                        <form
                            className="jotform-form"
                            onSubmit={handleSubmit}
                            action="https://submit.jotform.com/submit/240234767427560"
                            method="post"
                            acceptCharset="utf-8"
                            autoComplete="on"
                        >
                            <input type="hidden" name="formID" value="240234767427560" />
                            <input type="hidden" id="JWTContainer" value="" />
                            <input type="hidden" id="cardinalOrderNumber" value="" />
                            <input type="hidden" id="jsExecutionTracker" name="jsExecutionTracker" value="build-date-1706118061123" />
                            <input type="hidden" id="submitSource" name="submitSource" value="unknown" />
                            <input type="hidden" id="buildDate" name="buildDate" value="1706118061123" />
                            <div role="main" className="form-all">
                                <ul className="form-section page-section">
                                    <li className="form-line" data-type="control_birthdate" id="id_39">
                                        <label className="form-label form-label-top" id="label_39" htmlFor="input_nationalID">
                                            NationalID
                                        </label>
                                        <input
                                            type="text"
                                            id="input_nationalID"
                                            name="nationalID"
                                            className="form-textbox"
                                            autoComplete="section-input_56 family-name"
                                            size="15"
                                            data-component="last"
                                            aria-labelledby="label_39"
                                            value={formData.nationalID}
                                            onChange={handleChange}
                                        />
                                    </li>
                                    <li className="form-line" data-type="control_birthdate" id="id_39">
                                        <label className="form-label form-label-top" id="label_39" htmlFor="input_name">
                                            Doctor Name
                                        </label>
                                        <input
                                            type="text"
                                            id="input_name"
                                            name="name"
                                            className="form-textbox"
                                            autoComplete="section-input_56 family-name"
                                            size="15"
                                            data-component="last"
                                            aria-labelledby="label_39"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </li>
                                    <li className="form-line" data-type="control_birthdate" id="id_39">
                                        <label className="form-label form-label-top" htmlFor="department">
                                            Department
                                        </label>
                                        <select
                                            id="department"
                                            name="department"
                                            className="form-dropdown"
                                            value={formData.department}
                                            onChange={handleChange}
                                        >
                                            <option value="">Please select a department</option>
                                            <option value="Heart">Heart</option>
                                            <option value="Children">Children</option>
                                        </select>
                                    </li>
                                    <li className="form-line" data-type="control_birthdate" id="id_39">
                                        <label className="form-label form-label-top" id="label_39" htmlFor="input_room_num">
                                            Room Number
                                        </label>
                                        <input
                                            type="number"
                                            id="input_room_num"
                                            name="room_num"
                                            className="form-textbox"
                                            autoComplete="section-input_56 family-name"
                                            size="15"
                                            data-component="last"
                                            aria-labelledby="label_39"
                                            value={formData.room_num}
                                            onChange={handleChange}
                                        />
                                    </li>
                                    <li className="form-line" data-type="control_button" id="id_52">
                                        <button
                                            type="submit"
                                            className="form-submit-button submit-button jf-form-buttons"
                                            data-component="button"
                                            data-content=""
                                            style={{ marginLeft: "36%", marginBottom: "10px" }}
                                        >
                                            Booking
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </div>
                );

            case 'Normal':
                return (
                    <div>
                        <ToastContainer />


                        <h2 className="mb-2 title-color" style={{ marginLeft: '45%', marginTop: '10%' }}>Normal Room</h2>

                        <form
                            className="jotform-form"
                            onSubmit={handleSubmit}
                            action="https://submit.jotform.com/submit/240234767427560"
                            method="post"
                            acceptCharset="utf-8"
                            autoComplete="on"
                        >
                            <input type="hidden" name="formID" value="240234767427560" />
                            <input type="hidden" id="JWTContainer" value="" />
                            <input type="hidden" id="cardinalOrderNumber" value="" />
                            <input type="hidden" id="jsExecutionTracker" name="jsExecutionTracker" value="build-date-1706118061123" />
                            <input type="hidden" id="submitSource" name="submitSource" value="unknown" />
                            <input type="hidden" id="buildDate" name="buildDate" value="1706118061123" />
                            <div role="main" className="form-all">
                                <ul className="form-section page-section">
                                    <li className="form-line" data-type="control_birthdate" id="id_39">
                                        <label className="form-label form-label-top" id="label_39" htmlFor="input_nationalID">
                                            NationalID
                                        </label>
                                        <input
                                            type="text"
                                            id="input_nationalID"
                                            name="nationalID"
                                            className="form-textbox"
                                            autoComplete="section-input_56 family-name"
                                            size="15"
                                            data-component="last"
                                            aria-labelledby="label_39"
                                            value={formData2.nationalID}
                                            onChange={handleChange2}
                                        />
                                    </li>
                                    <li className="form-line" data-type="control_birthdate" id="id_39">
                                        <label className="form-label form-label-top" id="label_39" htmlFor="input_name">
                                            Doctor Name
                                        </label>
                                        <input
                                            type="text"
                                            id="input_name"
                                            name="name"
                                            className="form-textbox"
                                            autoComplete="section-input_56 family-name"
                                            size="15"
                                            data-component="last"
                                            aria-labelledby="label_39"
                                            value={formData2.name}
                                            onChange={handleChange2}
                                        />
                                    </li>
                                    <li className="form-line" data-type="control_birthdate" id="id_39">
                                        <label className="form-label form-label-top" htmlFor="department">
                                            Department
                                        </label>
                                        <select
                                            id="department"
                                            name="department"
                                            className="form-dropdown"
                                            value={formData2.department}
                                            onChange={handleChange2}
                                        >
                                            <option value="">Please select a department</option>
                                            <option value="Heart">Heart</option>
                                            <option value="Children">Children</option>
                                        </select>
                                    </li>
                                    <li className="form-line" data-type="control_birthdate" id="id_39">
                                        <label className="form-label form-label-top" htmlFor="department">
                                            Room Type
                                        </label>
                                        <select
                                            id="type"
                                            name="type"
                                            className="form-dropdown"
                                            value={formData2.type}
                                            onChange={handleChange2}
                                        >
                                            <option value="">Please select a department</option>
                                            <option value="Single">Single</option>
                                            <option value="Double">Double</option>
                                            <option value="Sweet">Sweet</option>
                                        </select>
                                    </li>
                                    <li className="form-line" data-type="control_birthdate" id="id_39">
                                        <label className="form-label form-label-top" id="label_39" htmlFor="input_room_num">
                                            Room Number
                                        </label>
                                        <input
                                            type="number"
                                            id="input_room_num"
                                            name="room_num"
                                            className="form-textbox"
                                            autoComplete="section-input_56 family-name"
                                            size="15"
                                            data-component="last"
                                            aria-labelledby="label_39"
                                            value={formData2.room_num}
                                            onChange={handleChange2}
                                        />
                                    </li>
                                    <li className="form-line" data-type="control_button" id="id_52">
                                        <button
                                            type="submit"
                                            className="form-submit-button submit-button jf-form-buttons"
                                            data-component="button"
                                            data-content=""
                                            style={{ marginLeft: "36%", marginBottom: "10px" }}
                                        >
                                            Booking
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div>
            <link type="text/css" rel="stylesheet" href="https://cdn01.jotfor.ms/stylebuilder/static/form-common.css?v=5ded9b4" />
            <style>
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
            <div>
                {renderForm()}
            </div>
        </div>
    );
}
export default RoomNum;





