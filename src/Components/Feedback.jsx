import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Feedback = () => {
    useEffect(() => {
        const scripts = [
            "https://cdn03.jotfor.ms/static/prototype.forms.js?v=3.3.50539",
            "https://cdn01.jotfor.ms/static/jotform.forms.js?v=3.3.50539",
            "https://cdn02.jotfor.ms/js/vendor/maskedinput_5.0.9.min.js?v=3.3.50539",
            "https://cdn03.jotfor.ms/js/punycode-1.4.1.min.js?v=3.3.50539",
            "https://cdn01.jotfor.ms/js/payments/validategateways.js?v=3.3.50539",
            "https://cdn01.jotfor.ms/s/umd/6f82c562e06/for-form-branding-footer.js?v=3.3.50539",
            "https://cdn02.jotfor.ms/js/vendor/smoothscroll.min.js?v=3.3.50539",
            "https://cdn03.jotfor.ms/js/errorNavigation.js?v=3.3.50539"
        ];

        const scriptElements = scripts.map(src => {
            const script = document.createElement('script');
            script.src = src;
            script.type = "text/javascript";
            document.body.appendChild(script);
            return script;
        });

        return () => {
            scriptElements.forEach(script => document.body.removeChild(script));
        };
    }, []);

    const [formData, setFormData] = useState({
        Name: '',
        feedback: '',
        nationalID: '',
        rate: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validation for NID to prevent negative values
        if (formData.nationalID < 0) {
            toast.error("National ID cannot be negative");
            return;
        }

        // Create the userData object with fixed and user-entered properties
        let userData = {
            nationalID: formData.nationalID,
            hospitalName: formData.Name,
            feedback: formData.feedback,
            rate: formData.rate,
            role: 'Patient' // Fixed property with a fixed value
        };

        // POST request to the server
        axios.post('https://localhost:44389/api/Patient/FeedBack', userData)
            .then(res => {
                toast.success("User Registered Successfully");
            })
            .catch(err => {
                toast.error(err.message);
            });
    };

    const handleRatingClick = (rate) => {
        setFormData({
            ...formData,
            rate
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

            <h2 className="mb-2 title-color" style={{ marginLeft: '45%', marginTop: '10%' }}>Feedback</h2>

            <form className="jotform-form" onSubmit={handleSubmit} action="https://submit.jotform.com/submit/240234767427560" method="post" name="form_240234767427560" id="240234767427560" acceptCharset="utf-8" autoComplete="on">
                <input type="hidden" name="formID" value="240234767427560" />
                <input type="hidden" id="JWTContainer" value="" />
                <input type="hidden" id="cardinalOrderNumber" value="" />
                <input type="hidden" id="jsExecutionTracker" name="jsExecutionTracker" value="build-date-1706118061123" />
                <input type="hidden" id="submitSource" name="submitSource" value="unknown" />
                <input type="hidden" id="buildDate" name="buildDate" value="1706118061123" />

                <div role="main" className="form-all">
                    <ul className="form-section page-section">
                        <li id="cid_43" className="form-input-wide" data-type="control_head"></li>

                        <li className="form-line" data-type="control_textbox" id="id_39">
                            <label className="form-label form-label-top" htmlFor="Name" style={{ marginLeft: '45%' }}>Name</label>
                            <input type="text" id="Name" name="Name" className="form-textbox" autoComplete="section-input_56 given-name" size="15" value={formData.Name} onChange={handleChange} />
                        </li>

                        <li className="form-line" data-type="control_number" id="id_39">
                            <label className="form-label form-label-top" htmlFor="nationalID" style={{ marginLeft: '45%' }}>National ID</label>
                            <input type="text" id="nationalID" name="nationalID" className="form-textbox" autoComplete="section-input_56 family-name" size="15" value={formData.nationalID} onChange={handleChange} />
                        </li>

                        <li className="form-line" data-type="control_rating" id="id_39">
                            <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
                                <div className="">
                                    <div className="star-container" style={{ display: 'inline-block' }}>
                                        {[1, 2, 3, 4, 5].map((rate) => (
                                            <span
                                                key={rate}
                                                onClick={() => handleRatingClick(rate)}
                                                className="star"
                                                style={{ cursor: 'pointer', fontSize: '24px', color: formData.rate >= rate ? 'gold' : 'gray' }}
                                            >
                                                ★
                                            </span>
                                        ))}
                                        <br />
                                    </div><br />
                                    <h3 id="output">Rating is: {formData.rate}/5</h3>
                                </div>
                            </div>
                        </li>

                        <li className="form-line" data-type="control_textarea" id="id_39">
                            <label className="form-label form-label-top" htmlFor="feedback" style={{ marginLeft: '45%' }}>Feedback</label>
                            <textarea
                                cols="10"
                                rows="3"
                                id="feedback"
                                name="feedback"
                                className="form-textarea"
                                autoComplete="section-input_56 family-name"
                                size="15"
                                value={formData.feedback}
                                onChange={handleChange}
                            />
                        </li>

                        <li className="form-line" data-type="control_button" id="id_52">
                            <div id="cid_52" className="form-input-wide" data-layout="full">
                                <div data-align="auto" className="form-buttons-wrapper form-buttons-auto jsTest-button-wrapperField">
                                    <button type="submit" className="form-submit-button submit-button jf-form-buttons jsTest-submitField" data-component="button">Submit Form</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    );
};

export default Feedback;
