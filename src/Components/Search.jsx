import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Search = ({ formType }) => {

    const navigate = useNavigate();

    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [clinicalData, setClinicalData] = useState([]);

    const handleRegionChange = (event) => {
        setSelectedRegion(event.target.value);
        setSelectedDepartment('');
    };
    const handleDepartmentChange2 = (event) => {
        setSelectedDepartment(event.target.value);
    };

    const handleDepartmentChange = (event) => {
        const { value } = event.target;
        setFormValues({ ...formValues, department: value });
    };

    const handleDoneClick = async () => {
        if (!selectedRegion || !selectedDepartment) {
            // Validate that both fields are selected
            toast.error("Please select both region and department.");
            return;
        }

        try {
            const response = await axios.get('https://localhost:44389/api/Patient/GetClinics', {
              params: {
                selectedRegion: selectedRegion,
                selectedDepartment: selectedDepartment
              }
            });
            setClinicalData(response.data);
            navigate('/clinical', { state: { clinicalData: response.data } }); // Navigate to the clinical page with data
            console.log(response.data); // Assuming response.data is the array of clinical data
          } catch (error) {
            toast.error("Error fetching data.");
          }
    };
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
            document.querySelectorAll('script').forEach(script => {
                if (script.src.includes('jotfor.ms')) {
                    document.head.removeChild(script);
                }
            });
        };
    }, []);

    const [formValues, setFormValues] = useState({
        hospital: '',
        department: '',
    });

    const [selectedHospital, setSelectedHospital] = useState('');


    const handleHospitalChange = (event) => {
        const { value } = event.target;
        setSelectedHospital(value);
        setFormValues({ ...formValues, hospital: value });
    };

    const [formData, setFormData] = useState({
        nationalID: '',
        name: '',
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };


    const handleSubmit = (event) => {
        event.preventDefault();
        // Add form submission logic here
        // Example: Submit formValues to the desired endpoint
        console.log(formValues);

        // Example: Redirect to another page after submission
        window.location.href = "booking.html";
    };
    const handleSubmit2 = async (event) => {
        event.preventDefault();
        const data = {
            nationalID: formData.nationalID,
            name: formData.name,
            hospital: selectedHospital,
            department: formValues.department,

        };

        try {
            const response = await axios.post('https://localhost:44389/api/Patient/ReserveHospital', data);
            toast.success('Form submitted successfully!');
        } catch (error) {
            toast.error('Error submitting form!');
        }
    };

    const renderForm = () => {
        switch (formType) {
            case 'Hospital':
                return (
                    <div>
                    <ToastContainer />
                    <h2 className="mb-2 title-color" style={{ marginLeft: '45%', marginTop: '10%' }}>Hospitals</h2>
                    <form
                        className="jotform-form"
                        onSubmit={handleSubmit2}
                        acceptCharset="utf-8"
                        autoComplete="on"
                    >
                        <div role="main" className="form-all">
                            <ul className="form-section page-section">
                                <li id="cid_43" className="form-input-wide" data-type="control_head"></li>
                                <div id="hospital_section">
                                    <li className="form-line" data-type="control_birthdate">
                                        <label className="form-label form-label-top" id="label_hospital" htmlFor="input_hospital">
                                            Hospitals
                                        </label>
                                        <select
                                            name="hospital"
                                            id="input_hospital"
                                            className="form-dropdown"
                                            onChange={handleHospitalChange}
                                            value={selectedHospital}
                                        >
                                            <option value="">Please select a hospital</option>
                                            <option value="university_hospital">University Hospital</option>
                                            <option value="dar_el_salam_hospital">Dar El-Salam Hospital</option>
                                            <option value="women_health_hospital">Women Health Hospital</option>
                                            <option value="children_university_hospital">Children University Hospital</option>
                                        </select>
                                    </li>
                                </div>
                                {selectedHospital && (
                                    <div id="department_section">
                                        <li className="form-line" data-type="control_birthdate">
                                            <label className="form-label form-label-top" id="label_department" htmlFor="input_department">
                                                Department
                                            </label>
                                            <select
                                                name="department"
                                                id="input_department"
                                                className="form-dropdown"
                                                onChange={handleDepartmentChange}
                                                value={formValues.department}
                                            >
                                                <option value="">Please select a department</option>
                                                <option value="heart">Heart</option>
                                                <option value="children">Children</option>
                                                <option value="bones">Bones</option>
                                                <option value="gynecology_obstetrics">Gynecology and Obstetrics</option>
                                            </select>
                                        </li>
                                    </div>
                                )}
                                <li className="form-line" data-type="control_birthdate" id="id_39">
                                    <label className="form-label form-label-top" id="label_39" htmlFor="input_nationalID" aria-hidden="false" style={{ marginLeft: '45%' }}>
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
                                    <label className="form-label form-label-top" id="label_39" htmlFor="input_name" aria-hidden="false" style={{ marginLeft: '45%' }}>
                                        Name
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
                                <li className="form-line" data-type="control_button" id="id_52">
                                    <div id="cid_52" className="form-input-wide" data-layout="full">
                                        <div data-align="auto" className="form-buttons-wrapper form-buttons-auto jsTest-button-wrapperField">
                                            <button
                                                type="submit"
                                                className="form-submit-button submit-button jf-form-buttons jsTest-submitField"
                                                data-component="button"
                                                data-content=""
                                            >
                                                Done
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>
                );

            case 'Clincal':
                return (
                    <div>
                        <ToastContainer />
                        <h2 className="mb-2 title-color" style={{ marginLeft: '45%', marginTop: '10%' }}>Clinical</h2>
                        <form
                            className="jotform-form"
                            onSubmit={handleSubmit}
                            acceptCharset="utf-8"
                            autoComplete="on"
                        >
                            <div role="main" className="form-all">
                                <ul className="form-section page-section">
                                    <li id="cid_43" className="form-input-wide" data-type="control_head"></li>
                                    <div id="Regions">
                                        <li className="form-line" data-type="control_birthdate">
                                            <label className="form-label form-label-top" id="label_region" htmlFor="input_hospital_region">
                                                Regions
                                            </label>
                                            <select
                                                name="hospital"
                                                id="input_hospital_region"
                                                className="form-dropdown"
                                                value={selectedRegion}
                                                onChange={handleRegionChange}
                                            >
                                                <option value="">Please select a region</option>
                                                <option value="ibnob">Ibnob</option>
                                                <option value="dayrut">Dayrut</option>
                                                <option value="manfalut">Manfalut</option>
                                                <option value="assiut_center">Assiut Center</option>
                                            </select>
                                        </li>
                                    </div>
                                    {selectedRegion && (
                                        <div id="department_section">
                                            <li className="form-line" data-type="control_birthdate">
                                                <label className="form-label form-label-top" id="label_department" htmlFor="input_department">
                                                    Department
                                                </label>
                                                <select
                                                    name="department"
                                                    id="input_department"
                                                    className="form-dropdown"
                                                    value={selectedDepartment}
                                                    onChange={handleDepartmentChange2}
                                                >
                                                    <option value="">Please select a department</option>
                                                    <option value="heart">Heart</option>
                                                    <option value="children">Children</option>
                                                    <option value="bones">Bones</option>
                                                    <option value="gynecology_obstetrics">Gynecology and Obstetrics</option>
                                                </select>
                                            </li>
                                        </div>
                                    )}
                                    <li className="form-line" data-type="control_button" id="id_52">
                                        <div id="cid_52" className="form-buttons-wrapper form-buttons-auto jsTest-button-wrapperField" data-layout="full">
                                            <div data-align="auto" className="form-buttons-wrapper form-buttons-auto jsTest-button-wrapperField">
                                                <button type="button" onClick={handleDoneClick}
                                                    className="form-submit-button submit-button jf-form-buttons jsTest-submitField"
                                                    data-component="button">
                                                    Done
                                                </button>
                                            </div>
                                        </div>
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
};

export default Search;









