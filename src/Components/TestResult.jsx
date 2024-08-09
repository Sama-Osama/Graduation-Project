// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function TestResult() {
//   const [NID, setNID] = useState("");
//   const [DoctorName, setDoctorName] = useState("");
//   const [img, setimg] = useState(null);

//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (NID < 0) {
//       toast.error("National ID cannot be negative");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("NID", NID);
//     formData.append("DoctorName", DoctorName);
//     formData.append("img", img);

//     axios
//       .post("https://localhost:44389/api/Test/UploadTest", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then((res) => {
//         toast.success("Form submitted successfully!");
//         setTimeout(() => {
//           navigate("/xray");
//         }, 2000);
//       })
//       .catch((err) => {
//         toast.error(err.message);
//       });
//   };

//   return (
//     <div>
//       <ToastContainer />
//       <link
//         type="text/css"
//         rel="stylesheet"
//         href="https://cdn01.jotfor.ms/stylebuilder/static/form-common.css?v=5ded9b4"
//       />
//       <style type="text/css">
//         {`@media print {
//             * {
//                 -webkit-print-color-adjust: exact !important;
//                 color-adjust: exact !important;
//             }

//             .form-section {
//                 display: inline !important
//             }

//             .form-pagebreak {
//                 display: none !important
//             }

//             .form-section-closed {
//                 height: auto !important
//             }

//             .page-section {
//                 position: initial !important
//             }
//         }`}
//       </style>
//       <link
//         type="text/css"
//         rel="stylesheet"
//         href="https://cdn02.jotfor.ms/themes/CSS/5e6b428acc8c4e222d1beb91.css?v=3.3.50539&themeRevisionID=63e6805f64383509e31513f4"
//       />
//       <link
//         type="text/css"
//         rel="stylesheet"
//         href="https://cdn03.jotfor.ms/css/styles/payment/payment_styles.css?3.3.50539"
//       />
//       <link
//         type="text/css"
//         rel="stylesheet"
//         href="https://cdn01.jotfor.ms/css/styles/payment/payment_feature.css?3.3.50539"
//       />
//       <link
//         type="text/css"
//         rel="stylesheet"
//         href="https://cdn02.jotfor.ms/stylebuilder/static/donationBox.css?v=3.3.50539"
//       />

//       <form id="sign" className="appointment-form" onSubmit={handleSubmit}>
//         <h2
//           className="mb-2 title-color"
//           style={{ marginLeft: "45%", marginTop: "10%" }}
//         >
//           Add
//         </h2>
//         <div role="main" className="form-all">
//           <ul className="form-section page-section">
//             <li className="form-line" data-type="control_birthdate" id="id_39">
//               <label className="form-label form-label-top" htmlFor="nationalID">
//                 {" "}
//                 NationalID{" "}
//               </label>
//               <input
//                 type="text"
//                 id="nationalID"
//                 name="nationalID"
//                 className="form-textbox"
//                 value={NID}
//                 onChange={(e) => setNID(e.target.value)}
//                 required
//               />
//             </li>
//             <li className="form-line" data-type="control_birthdate" id="id_39">
//               <label className="form-label form-label-top" htmlFor="DoctorName">DoctorName</label>
//               <input
//                 type="text"
//                 id="DoctorName"
//                 name="DoctorName"
//                 className="form-textbox"
//                 value={DoctorName}
//                 onChange={(e) => setDoctorName(e.target.value)}
//                 required
//               />
//             </li>
//             <li className="form-line" data-type="control_birthdate" id="id_39">
//               <label className="form-label form-label-top" htmlFor="image">
//                 {" "}
//                 Image{" "}
//               </label>
//               <div id="upbtn">
//                 <input
//                   type="file"
//                   id="image"
//                   name="image"
//                   className="visually-hidden"
//                   accept="application/pdf"
//                   onChange={(e) => setimg(e.target.files[0].name)}
//                   required
//                 />
//                 <label htmlFor="image" className="file-upload-button">
//                   Upload
//                 </label>
//               </div>
//             </li>
//             <li className="form-line" data-type="control_button" id="id_52">
//               <div className="form-input-wide">
//                 <button
//                   type="submit"
//                   className="nav-link allBtn"
//                   style={{
//                     color: "white",
//                     padding: "10px",
//                     marginLeft: "auto",
//                     marginRight: "auto",
//                     display: "block",
//                     textAlign: "center",
//                     backgroundColor: "#332a7e",
//                     border: "none",
//                     borderRadius: "5px",
//                     marginBottom: "25px",
//                     width: "150px",
//                   }}
//                 >
//                   Add
//                 </button>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default TestResult;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function XrayResult() {
  const [NID, setNID] = useState("");
  const [DoctorName, setDoctorName] = useState("");
  const [img, setimg] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (NID < 0) {
      toast.error("National ID cannot be negative");
      return;
    }

    const formData = new FormData();
    formData.append("NID", NID);
    formData.append("DoctorName", DoctorName);
    formData.append("img", img);

    axios
      .post("https://localhost:44389/api/Test/UploadTest", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        toast.success("Form submitted successfully!");
        setTimeout(() => {
          //navigate("/testresults");
        }, 2000);
      })
      .catch((err) => {
        toast.error(`Error: ${err.response?.data || err.message}`);
      });
  };

  return (
    <div>
      <ToastContainer />
       <link
        type="text/css"
        rel="stylesheet"
        href="https://cdn01.jotfor.ms/stylebuilder/static/form-common.css?v=5ded9b4"
      />
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
      <link
        type="text/css"
        rel="stylesheet"
        href="https://cdn02.jotfor.ms/themes/CSS/5e6b428acc8c4e222d1beb91.css?v=3.3.50539&themeRevisionID=63e6805f64383509e31513f4"
      />
      <link
        type="text/css"
        rel="stylesheet"
        href="https://cdn03.jotfor.ms/css/styles/payment/payment_styles.css?3.3.50539"
      />
      <link
        type="text/css"
        rel="stylesheet"
        href="https://cdn01.jotfor.ms/css/styles/payment/payment_feature.css?3.3.50539"
      />
      <link
        type="text/css"
        rel="stylesheet"
        href="https://cdn02.jotfor.ms/stylebuilder/static/donationBox.css?v=3.3.50539"
      />


      <form id="sign" className="appointment-form" onSubmit={handleSubmit}>
        <h2
          className="mb-2 title-color"
          style={{ marginLeft: "45%", marginTop: "10%" }}
        >
          Add
        </h2>
        <div role="main" className="form-all">
          <ul className="form-section page-section">
            <li className="form-line" data-type="control_birthdate" id="id_39">
              <label className="form-label form-label-top" htmlFor="nationalID">
                {" "}
                NationalID{" "}
              </label>
              <input
                type="text"
                id="nationalID"
                name="nationalID"
                className="form-textbox"
                value={NID}
                onChange={(e) => setNID(e.target.value)}
                required
              />
            </li>
            <li className="form-line" data-type="control_birthdate" id="id_39">
              {" "}
              <label className="form-label form-label-top" htmlFor="DoctorName">
                DoctorName
              </label>
              {" "}
              <input
                type="text"
                id="DoctorName"
                name="DoctorName"
                className="form-textbox"
                value={DoctorName}
                onChange={(e) => setDoctorName(e.target.value)}
                required
              />
            </li>
            <li className="form-line" data-type="control_birthdate" id="id_39">
              <label className="form-label form-label-top" htmlFor="image">
                {" "}
                Image{" "}
              </label>
              <div id="upbtn">
                <input
                  type="file"
                  id="image"
                  name="image"
                  className="visually-hidden"
                  accept="application/pdf"
                  onChange={(e) => setimg(e.target.files[0])}
                  required
                />
                <label htmlFor="image" className="file-upload-button">
                  Upload
                </label>
              </div>
            </li>
            <li className="form-line" data-type="control_button" id="id_52">
              <div className="form-input-wide">
                <button
                  type="submit"
                  className="nav-link allBtn"
                  style={{
                    color: "white",
                    padding: "10px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    display: "block",
                    textAlign: "center",
                    backgroundColor: "#332a7e",
                    border: "none",
                    borderRadius: "5px",
                    marginBottom: "25px",
                    width: "150px",
                  }}
                >
                  Add
                </button>
              </div>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
}

export default XrayResult;
