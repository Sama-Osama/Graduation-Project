import React, { useEffect, useState } from 'react';
import img from '../images/3.jpg'

const PatientForm = () => {
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

    const [formData, setFormData] = useState({
        firstName: 'Ali',
        lastName: 'Ahmed',
        birthDate: '',
        gender: 'Male', // or use a default value
        phone: '010235489666',
        email: 'ali@gmail.com',
        password: '12345',
        nationalID: '60',
        role:"Patient"

      });

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
    };

    return (
        <div>
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


            <h2 className="mb-2 title-color" style={{ marginLeft: '45%', marginTop: '10%' }}>Account</h2>
            <form className="jotform-form" onSubmit={handleSubmit} method="post" name="form_240234767427560" id="240234767427560" acceptCharset="utf-8" autoComplete="on">
                <input type="hidden" name="formID" value="240234767427560" />
                <input type="hidden" id="JWTContainer" value="" />
                <input type="hidden" id="cardinalOrderNumber" value="" />
                <input type="hidden" id="jsExecutionTracker" name="jsExecutionTracker" value="build-date-1706118061123" />
                <input type="hidden" id="submitSource" name="submitSource" value="unknown" />
                <input type="hidden" id="buildDate" name="buildDate" value="1706118061123" />

                <div role="main" className="form-all">
                    <ul className="form-section page-section">
                        <li className="form-input-wide" data-type="control_head" id="cid_43"></li>
                        <li>
                            <button className="btn btn-secondary" style={{ backgroundColor: 'transparent', border: 'none', borderColor: 'transparent' }}>
                                <img src={img} height="130" width="130" style={{ borderRadius: '50%', marginLeft: '200%' }} alt="Avatar" />
                            </button>
                        </li>
                        <li className="form-line" data-type="control_fullname" id="id_56">
                            <label className="form-label form-label-top form-label-extended form-label-auto" id="label_56" htmlFor="first_56" aria-hidden="false"> Name </label>
                            <div id="cid_56" className="form-input-wide" data-layout="full">
                                <div data-wrapper-react="true" className="extended">
                                    <span className="form-sub-label-container" style={{ verticalAlign: 'top' }} data-input-type="first">
                                        <input type="text" id="first_56" name="firstName" className="form-textbox" autoComplete="section-input_56 given-name" size="10" value={formData.firstName}  />
                                        <label className="form-sub-label" htmlFor="first_56" id="sublabel_56_first" style={{ minHeight: '13px' }}>First Name</label>
                                    </span>
                                    <span className="form-sub-label-container" style={{ verticalAlign: 'top' }} data-input-type="middle">
                                        <input type="text" id="last_56" name="lastName" className="form-textbox" autoComplete="section-input_56 family-name" size="15" value={formData.lastName}  />
                                        <label className="form-sub-label" htmlFor="last_56" id="sublabel_56_last" style={{ minHeight: '13px' }}>Last Name</label>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className="form-line" data-type="control_birthdate" id="id_39">
                            <label className="form-label form-label-top" id="label_39" htmlFor="input_39" aria-hidden="false"> Birth Date </label>
                            <input type="date" id="input_39" name="birthDate" className="form-textbox" value={formData.birthDate}  />
                        </li>
                        <li className="form-line form-line-column form-col-1" data-type="control_radio" id="id_15">
                            <label className="form-label form-label-top form-label-auto" id="label_15" aria-hidden="false"> Gender </label>
                            <div id="cid_15" className="form-input-wide" data-layout="full">
                                <div className="form-multiple-column" data-columncount="2" role="group" aria-labelledby="label_15" data-component="radio">
                                    <span className="form-radio-item">
                                        <input type="radio"  className="form-radio" id="input_15_0" name="gender" value="Male" checked   />
                                        <label id="label_input_15_0" htmlFor="input_15_0">Male</label>
                                    </span>
                                    <span className="form-radio-item">
                                        <input type="radio"  className="form-radio" id="input_15_1" name="gender" value="Female"  />
                                        <label id="label_input_15_1" htmlFor="input_15_1">Female</label>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className="form-line form-line-column form-col-3" data-type="control_phone" id="id_41">
                            <label className="form-label form-label-top form-label-auto" id="label_41" htmlFor="input_41_full"> Phone </label>
                            <div id="cid_41" className="form-input-wide" data-layout="half">
                                <span className="form-sub-label-container" style={{ verticalAlign: 'top' }}>
                                    <input type="tel" id="input_41_full" name="phone" className="form-textbox validate[Fill Mask]" data-type="mask-number" autoComplete="section-input_41 tel-national" style={{ width: '310px' }} value={formData.phone}  />
                                </span>
                            </div>
                        </li>
                        <li className="form-line" data-type="control_birthdate" id="id_39">
                            <label className="form-label form-label-top" id="label_39" htmlFor="input_39" aria-hidden="false"> Email </label>
                            <input type="email" id="input_39" name="email" className="form-textbox" autoComplete="section-input_56 family-name" size="15"  value={formData.email} />
                        </li>
                        <li className="form-line" data-type="control_birthdate" id="id_39">
                            <label className="form-label form-label-top" id="label_39" htmlFor="input_39" aria-hidden="false"> Password </label>
                            <input type="password" id="input_39" name="password" className="form-textbox" autoComplete="section-input_56 family-name" size="15" value={formData.password}    />
                        </li>
                        <li className="form-line" data-type="control_birthdate" id="id_39">
                            <label className="form-label form-label-top" id="label_39" htmlFor="input_39" aria-hidden="false"> NationalID </label>
                            <input type="number" id="input_39" name="nationalID" className="form-textbox" disabled value={formData.nationalID}   />
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
    }


export default  PatientForm;

