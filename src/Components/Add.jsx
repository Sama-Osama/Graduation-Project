import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add = () => {
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

    const [fullname, setfullname] = useState('');
    const [password, setpass] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [gender, setgender] = useState('');
    const [NID, setNID] = useState('');
    const [salary, setsalary] = useState('');
    const [department, setdepartment] = useState('');
    const [type, settype] = useState('');
    const [img, setimg] = useState('');
    const [Bdate, setbdate] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validation for NID to prevent negative values
        if (NID < 0) {
            toast.error("National ID cannot be negative");
            return;
        }

        const userData = {
            Role: "IT",
            Type: type,
            DoctorName: type === "Doctor" ? fullname : undefined,
            DoctorPassword: type === "Doctor" ? password : undefined,
            DoctorEmail: type === "Doctor" ? email : undefined,
            DoctorPhone: type === "Doctor" ? phone : undefined,
            DoctorGender: type === "Doctor" ? gender : undefined,
            DoctorNationalId: type === "Doctor" ? NID : undefined,
            DoctorSalary: type === "Doctor" ? salary : undefined,
            DoctorDepartment: type === "Doctor" ? department : undefined,
            DoctorPicture: type === "Doctor" ? img : undefined,
            DoctorBirthDate: type === "Doctor" ? Bdate : undefined,
            NurseName: type === "Nurse" ? fullname : undefined,
            NurseEmail: type === "Nurse" ? email : undefined,
            NursePassword: type === "Nurse" ? password : undefined,
            NurseNationalId: type === "Nurse" ? NID : undefined,
            NursePhone: type === "Nurse" ? phone : undefined,
            NurseGender: type === "Nurse" ? gender : undefined,
            NurseSalary: type === "Nurse" ? salary : undefined,
            NurseDepartment: type === "Nurse" ? department : undefined,
            NurseImage: type === "Nurse" ? img : undefined,
            NurseBirthDate: type === "Nurse" ? Bdate : undefined,
            EmployeeName: ["XRay", "Test", "Pharmacy", "Reception"].includes(type) ? fullname : undefined,
            EmployeeEmail: ["XRay", "Test", "Pharmacy", "Reception"].includes(type) ? email : undefined,
            EmployeePassword: ["XRay", "Test", "Pharmacy", "Reception"].includes(type) ? password : undefined,
            EmployeeNationalId: ["XRay", "Test", "Pharmacy", "Reception"].includes(type) ? NID : undefined,
            EmployeePhone: ["XRay", "Test", "Pharmacy", "Reception"].includes(type) ? phone : undefined,
            EmployeeGender: ["XRay", "Test", "Pharmacy", "Reception"].includes(type) ? gender : undefined,
            EmployeeSalary: ["XRay", "Test", "Pharmacy", "Reception"].includes(type) ? salary : undefined,
            EmployeeDepartment: ["XRay", "Test", "Pharmacy", "Reception"].includes(type) ? department : undefined,
            EmployeeImage: ["XRay", "Test", "Pharmacy", "Reception"].includes(type) ? img : undefined,
            EmployeeBirthDate: ["XRay", "Test", "Pharmacy", "Reception"].includes(type) ? Bdate : undefined,
            TypeOfEmployee: ["XRay", "Test", "Pharmacy", "Reception"].includes(type) ? type : undefined,
        };
             // POST
        axios.post('https://localhost:44389/api/It/Add', userData)
        .then(res => {
            toast.success("User Registered Successfully");
            navigate('/admin');
        }) // 201 created Ok
        .catch(err => {
            toast.error(err.message);
        });
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

            <form id="sign" className="appointment-form" onSubmit={handleSubmit}>
                <h2 className="mb-2 title-color" style={{ marginLeft: '45%', marginTop: '10%' }}>Add</h2>
                <div role="main" className="form-all">
                    <ul className="form-section page-section">
                        <li className="form-line" data-type="control_fullname" id="id_56">
                            <label className="form-label form-label-top form-label-extended form-label-auto" htmlFor="first_56">Full Name </label>
                            <div id="cid_56" className="form-input-wide" data-layout="full">
                                <div className="extended">
                                    <span className="form-sub-label-container" style={{ verticalAlign: 'top' }}>
                                        <input
                                            type="text"
                                            id="first_56"
                                            name="fullname"
                                            className="form-textbox"
                                            autoComplete="given-name"
                                            value={fullname} onChange={e => setfullname(e.target.value)}
                                            required
                                        />
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className="form-line" data-type="control_birthdate" id="id_39">
                            <label className="form-label form-label-top" htmlFor="birth_39"> Birth Date </label>
                            <input
                                type="date"
                                id="birth_39"
                                name="birthdate"
                                className="form-textbox"
                                value={Bdate} onChange={e => setbdate(e.target.value)}
                                required
                            />
                        </li>
                        <li className="form-line form-line-column form-col-1" data-type="control_radio" id="id_15">
                            <label className="form-label form-label-top form-label-auto" id="label_15" aria-hidden="false"> Gender </label>
                            <div id="cid_15" className="form-input-wide" data-layout="full">
                                <div className="form-multiple-column" data-columncount="2" role="group" aria-labelledby="label_15" data-component="radio">
                                    <span className="form-radio-item">
                                        <span className="dragger-item"></span>
                                        <input
                                            type="radio"
                                            aria-describedby="label_15"
                                            className="form-radio"
                                            id="input_15_0"
                                            value="male"
                                            name="gender"
                                            onChange={e => setgender(e.target.value)}
                                            required
                                        />
                                        <label id="label_input_15_0" htmlFor="input_15_0">Male</label>
                                    </span>
                                    <span className="form-radio-item">
                                        <span className="dragger-item"></span>
                                        <input
                                            type="radio"
                                            aria-describedby="label_15"
                                            className="form-radio"
                                            id="input_15_1"
                                            value="female"
                                            name="gender"
                                            onChange={e => setgender(e.target.value)}
                                            required
                                        />
                                        <label id="label_input_15_1" htmlFor="input_15_1">Female</label>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className="form-line form-line-column form-col-3" data-type="control_phone" id="id_41">
                            <label className="form-label form-label-top form-label-auto" htmlFor="input_41_full"> Phone </label>
                            <div id="cid_41" className="form-input-wide" data-layout="half">
                                <input
                                    type="tel"
                                    id="input_41_full"
                                    name="phone"
                                    className="form-textbox"
                                    autoComplete="tel-national"
                                    value={phone} onChange={e => setphone(e.target.value)}
                                    required
                                />
                            </div>
                        </li>
                        <li className="form-line" data-type="control_birthdate" id="id_39">
                            <label className="form-label form-label-top" htmlFor="email"> Email </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-textbox"
                                autoComplete="email"
                                value={email} onChange={e => setemail(e.target.value)}
                                required
                            />
                        </li>
                        <li className="form-line" data-type="control_birthdate" id="id_39">
                            <label className="form-label form-label-top" htmlFor="password"> Password </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-textbox"
                                value={password} onChange={e => setpass(e.target.value)}
                                required
                            />
                        </li>
                        <li className="form-line" data-type="control_birthdate" id="id_39">
                            <label className="form-label form-label-top" htmlFor="nationalID"> NationalID </label>
                            <input
                                type="text"
                                id="nationalID"
                                name="NID"
                                className="form-textbox"
                                value={NID} onChange={e => setNID(e.target.value)}
                                required
                            />
                        </li>
                        <li className="form-line" data-type="control_birthdate" id="id_39">
                            <label className="form-label form-label-top" htmlFor="salary"> Salary </label>
                            <input
                                type="number"
                                id="salary"
                                name="salary"
                                className="form-textbox"
                                value={salary} onChange={e => setsalary(e.target.value)}
                                required
                            />
                        </li>
                        <li className="form-line" data-type="control_birthdate" id="id_39">
                            <label className="form-label form-label-top" htmlFor="type"> Type</label>
                            <select
                                id="type"
                                name="type"
                                className="form-dropdown"
                                value={type} onChange={e => settype(e.target.value)}
                                required
                            >
                                <option value="">Please select a type</option>
                                <option value="Doctor">Doctor</option>
                                <option value="Nurse">Nurse</option>
                                <option value="XRay">XRay</option>
                                <option value="Test">Test</option>
                                <option value="Reception">Reception</option>
                                <option value="Pharmacy">Pharmacy</option>
                            </select>
                        </li>
                        <li className="form-line" data-type="control_birthdate" id="id_39">
                            <label className="form-label form-label-top" htmlFor="department"> Department </label>
                            <select
                                id="department"
                                name="department"
                                className="form-dropdown"
                                value={department} onChange={e => setdepartment(e.target.value)}
                                required
                            >
                                <option value="">Please select a department</option>
                                <option value="Heart">Heart</option>
                                <option value="Children">Children</option>
                            </select>
                        </li>
                        <li className="form-line" data-type="control_birthdate" id="id_39">
                            <label className="form-label form-label-top" htmlFor="image"> Image </label>
                            <div id="upbtn">
                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    className="visually-hidden"
                                    accept="image/*"
                                    onChange={e => setimg(e.target.files[0].name)}
                                    required
                                />
                                <label htmlFor="image" className="file-upload-button">Upload</label>
                            </div>
                        </li>
                        <li className="form-line" data-type="control_button" id="id_52">
                            <div className="form-input-wide">
                                <button type="submit" className="nav-link allBtn" style={{ color: 'white', padding: '10px', marginLeft: 'auto', marginRight: 'auto', display: 'block', textAlign: 'center', backgroundColor: '#332a7e', border: 'none', borderRadius: '5px', marginBottom: '25px', width: '150px' }}>Add</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    );
};

export default Add;
