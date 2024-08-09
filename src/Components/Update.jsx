import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update = () => {
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

    const handleSubmit =  async (event) => {
        event.preventDefault();

        // Validation for NID to prevent negative values (if needed)
        if (NID < 0) {
            toast.error("National ID cannot be negative");
            return;
        }

        const userData ={
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

        console.log('User Data:', userData);


        try {
            const response = await axios.put(`https://localhost:44389/api/It/Update/${NID}`, userData,{
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Response received:', response.data);
            toast.success("User Updated Successfully");
            navigate('/admin');
        } catch (error) {
            if (error.response && error.response.status === 404) {
                toast.error("User not found. Please verify the National ID.");
            } else {
                console.error('Error updating user:', error.message);
                toast.error(error.message);
            }
        }
    };




    // const [formData, setFormData] = useState({
    //     id: '',
    //     firstname: '',
    //     lastname: '',
    //     password: '',
    //     email: '',
    //     phone: '',
    //     gender: '',
    //     NID: '',
    //     salary: '',
    //     department: '',
    //     role: '',
    //     img: null,
    //     Bdate: ''
    // });

    //const [loading, setLoading] = useState(false);
    const [loading] = useState(false);


    // const fetchUserData = async (nid) => {
    //     setLoading(true);
    //     try {
    //         const response = await axios.get('http://localhost:8000/admins');
    //         const adminsData = response.data;
    //         console.log('Fetched admins data:', adminsData);
    //         const userData = adminsData.find(admin => admin.NID === nid);
    //         if (userData) {
    //             setFormData(prevState => ({
    //                 ...prevState,
    //                 ...userData
    //             }));
    //         } else {
    //             toast.error("User not found");
    //         }
    //         setLoading(false);
    //     } catch (error) {
    //         console.error('Error fetching admin data:', error);
    //         toast.error("Failed to fetch admin data");
    //         setLoading(false);
    //     }
    // };

    // const handleNIDChange = (e) => {
    //     const nid = e.target.value;
    //     setFormData({ ...formData, NID: nid });
    //     // if (nid) {
    //     //     fetchUserData(nid);
    //     // }
    // };

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    // const handleRadioChange = (e) => {
    //     const { value } = e.target;
    //     setFormData({ ...formData, gender: value });
    // };

    // const handleSubmit = async (event,NID) => {
    //     event.preventDefault();

    //     // // Validation for NID to prevent negative values (if needed)
    //     // if (formData.NID < 0) {
    //     //     toast.error("National ID cannot be negative");
    //     //     return;
    //     // }

    //     try {
    //         const response = await axios.put(`https://localhost:44389/api/It/Update/${NID}`, formData);
    //         console.log('Response received:', response.data);
    //         toast.success("User Updated Successfully");
    //         navigate('/admin');
    //     } catch (error) {
    //         if (error.response && error.response.status === 404) {
    //             toast.error("User not found. Please verify the National ID.");
    //         } else {
    //             console.error('Error updating user:', error.message);
    //             toast.error(error.message);
    //         }
    //     }
    // };

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

            <form id="update" className="appointment-form" onSubmit={handleSubmit}>
                <h2 className="mb-2 title-color" style={{ marginLeft: '45%', marginTop: '10%' }}>Update</h2>
                <div role="main" className="form-all">
                    <ul className="form-section page-section">
                        <li className="form-line" data-type="control_birthdate" id="id_39">
                            <label className="form-label form-label-top" htmlFor="nationalID"> NationalID </label>
                            <input
                                type="number"
                                id="nationalID"
                                name="NID"
                                className="form-textbox"
                                value={NID} onChange={e => setNID(e.target.value)}
                                required
                            />
                        </li>

                        <li className="form-line" data-type="control_fullname" id="id_56">
                            <label className="form-label form-label-top form-label-extended form-label-auto" htmlFor="first_56"> Full Name </label>
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
                                name="Bdate"
                                className="form-textbox"
                                value={Bdate} onChange={e => setbdate(e.target.value)}
                                
                            />
                        </li>

                        <li className="form-line" data-type="control_radio" id="id_47">
                            <label className="form-label form-label-top" id="label_47" htmlFor="input_47"> Gender </label>
                            <div id="cid_47" className="form-input-wide" data-layout="full">
                                <div className="form-single-column" data-columncount="2" role="group" aria-labelledby="label_47" data-component="radio">
                                    <span className="form-radio-item">
                                        <span className="dragger-item">
                                            <input
                                                type="radio"
                                                aria-describedby="label_47"
                                                className="form-radio"
                                                id="gender-male"
                                                name="gender"
                                                //checked={setgender === 'male'}
                                                value="male"
                                                onChange={e => setgender(e.target.value)}
                                            />
                                            <label id="label_gender-male" htmlFor="gender-male"> Male </label>
                                        </span>
                                    </span>
                                    <span className="form-radio-item">
                                        <span className="dragger-item">
                                            <input
                                                type="radio"
                                                className="form-radio"
                                                id="gender-female"
                                                name="gender"
                                                value="female"
                                                onChange={e => setgender(e.target.value)}                                            />
                                            <label id="label_gender-female" htmlFor="gender-female"> Female </label>
                                        </span>
                                    </span>
            
                                </div>
                            </div>
                        </li>

                        <li className="form-line" data-type="control_email" id="id_4">
                            <label className="form-label form-label-top" htmlFor="email_4"> E-mail </label>
                            <input
                                type="email"
                                id="email_4"
                                name="email"
                                className="form-textbox"
                                value={email} onChange={e => setemail(e.target.value)}
                                
                            />
                        </li>

                        <li className="form-line" data-type="control_textbox" id="id_4">
                            <label className="form-label form-label-top" htmlFor="phone_4"> Phone Number </label>
                            <input
                                type="number"
                                id="phone_4"
                                name="phone"
                                className="form-textbox"
                                value={phone} onChange={e => setphone(e.target.value)}
                                
                            />
                        </li>

                        <li className="form-line" data-type="control_textbox" id="id_4">
                            <label className="form-label form-label-top" htmlFor="password_4"> Password </label>
                            <input
                                type="password"
                                id="password_4"
                                name="password"
                                className="form-textbox"
                                value={password} onChange={e => setpass(e.target.value)}
                                
                            />
                        </li>

                        <li className="form-line" data-type="control_textbox" id="id_4">
                            <label className="form-label form-label-top" htmlFor="salary_4"> Salary </label>
                            <input
                                type="number"
                                id="salary_4"
                                name="salary"
                                className="form-textbox"
                                value={salary} onChange={e => setsalary(e.target.value)}
                                
                            />
                        </li>

                        <li className="form-line" data-type="control_birthdate" id="id_39">
                            <label className="form-label form-label-top" htmlFor="department"> Department </label>
                            <select
                                id="department"
                                name="department"
                                className="form-dropdown"
                                value={department} onChange={e => setdepartment(e.target.value)}
                                
                            >
                                <option value="">Please select a department</option>
                                <option value="Heart">Heart</option>
                                <option value="Children">Children</option>
                                {/* Add more options as needed */}
                            </select>
                        </li>

                        <li className="form-line" data-type="control_birthdate" id="id_39">
                            <label className="form-label form-label-top" htmlFor="type"> Type </label>
                            <select
                                id="type"
                                name="type"
                                className="form-dropdown"
                                value={type} onChange={e => settype(e.target.value)}
                                
                            >
                                <option value="">Please select a role</option>
                                <option value="Doctor">Doctor</option>
                                <option value="Nurse">Nurse</option>
                                <option value="Recepion">Recepion</option>
                                <option value="Pharmacy">Pharmacy</option>
                                <option value="Test">Test</option>
                                <option value="XRay">XRay</option>
                            
                            </select>
                        </li>

                        <li className="form-line" data-type="control_fileupload" id="id_12">
                            <label className="form-label form-label-top" htmlFor="img_4"> Image </label>
                            <input
                                type="file"
                                id="img_4"
                                name="img"
                                className="form-upload"
                                accept="image/*"
                                onChange={e => setimg(e.target.files[0].name)}
                            />
                            <label htmlFor="image" className="file-upload-button">Upload</label>

                        </li>

                        <li className="form-line" data-type="control_button" id="id_2">
                            <div className="form-input-wide">
                                <div style={{ textAlign: 'center' }}>
                                    <button  style={{ color: 'white', padding: '10px', marginLeft: 'auto', marginRight: 'auto', display: 'block', textAlign: 'center', backgroundColor: '#332a7e', border: 'none', borderRadius: '5px', marginBottom: '25px', width: '150px' }} id="sign" type="submit" className="form-submit-button" disabled={loading}>
                                        {loading ? "Updating..." : "Update"}
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    );
};

export default Update;
