import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Recheck = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src =
      "https://cdn03.jotfor.ms/static/prototype.forms.js?v=3.3.50539";
    script1.type = "text/javascript";
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://cdn01.jotfor.ms/static/jotform.forms.js?v=3.3.50539";
    script2.type = "text/javascript";
    document.body.appendChild(script2);

    const script3 = document.createElement("script");
    script3.src =
      "https://cdn02.jotfor.ms/js/vendor/maskedinput_5.0.9.min.js?v=3.3.50539";
    script3.type = "text/javascript";
    document.body.appendChild(script3);

    const script4 = document.createElement("script");
    script4.src =
      "https://cdn03.jotfor.ms/js/punycode-1.4.1.min.js?v=3.3.50539";
    script4.type = "text/javascript";
    script4.defer = true;
    document.body.appendChild(script4);

    const script5 = document.createElement("script");
    script5.src =
      "https://cdn01.jotfor.ms/js/payments/validategateways.js?v=3.3.50539";
    script5.type = "text/javascript";
    document.body.appendChild(script5);

    const script6 = document.createElement("script");
    script6.src =
      "https://cdn01.jotfor.ms/s/umd/6f82c562e06/for-form-branding-footer.js?v=3.3.50539";
    script6.type = "text/javascript";
    script6.defer = true;
    document.body.appendChild(script6);

    const script7 = document.createElement("script");
    script7.src =
      "https://cdn02.jotfor.ms/js/vendor/smoothscroll.min.js?v=3.3.50539";
    script7.type = "text/javascript";
    document.body.appendChild(script7);

    const script8 = document.createElement("script");
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

  const [NationalId, setNid] = useState("");
  const [formData, setFormData] = useState({
    FullName: "",
    NationalId: "",
    Age: "",
    XRay: [], // Initialize Xray as an empty array
    Tests: [], // Initialize Tests as an empty array
    Medicines: [],
  });

  const fetchUserData = async (nid) => {
    try {
      const response = await axios.get(
        `https://localhost:44389/api/Doctor/Recheck/${nid}`
      );
      const patientHistory = response.data;
      console.log("Fetched Patient data:", patientHistory);

      const userData = patientHistory;

      if (userData) {
        console.log("Found user data:", userData);
        setFormData({
          FullName: userData.fullName,
          NationalId: userData.nationalId,
          Age: userData.age,
          XRay: userData.xRays || [], // Use || [] to handle undefined arrays
          Tests: userData.tests || [], // Use || [] to handle undefined arrays
          Medicines: userData.medicines || [], // Use || [] to handle undefined arrays
        });
        toast.success("Patient data fetched successfully!");
      } else {
        setFormData({
          FullName: "",
          NationalId: nid,
          Age: "",
          XRay: [], // Clear Xray array if not found
          Tests: [], // Clear Tests array if not found
          Medicines: [], // Clear Medicines array if not found
        });
        toast.error("User not found");
      }
    } catch (error) {
      console.error("Error fetching patient data:", error);
      toast.error("Failed to fetch patient data");
    }
  };

  const handleNidChange = (event) => {
    setNid(event.target.value);
  };

  const handleNidBlur = () => {
    fetchUserData(NationalId);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
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

      <h2
        className="mb-2 title-color"
        style={{ marginLeft: "45%", marginTop: "10%" }}
      >
        Recheck
      </h2>
      <div>
        <form
          id="sign"
          className="appoinment-form"
          method="post"
          action="#"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="formID" value="240234767427560" />
          <div role="main" className="form-all">
            <ul className="form-section page-section">
              <li
                className="form-line"
                data-type="control_birthdate"
                id="id_39"
              >
                <label
                  className="form-label form-label-top"
                  id="label_39"
                  htmlFor="input_39"
                  aria-hidden="false"
                  style={{ marginLeft: "45%" }}
                >
                  {" "}
                  NationalID{" "}
                </label>
                <input
                  style={{ textAlign: "center" }}
                  type="text"
                  id="nid"
                  name="nid"
                  className="form-textbox"
                  data-defaultvalue=""
                  autoComplete="section-input_39 family-name"
                  size="15"
                  data-component="last"
                  aria-labelledby="label_39"
                  value={NationalId}
                  onChange={handleNidChange}
                  onBlur={handleNidBlur}
                />
              </li>
              <li
                className="form-line"
                data-type="control_birthdate"
                id="id_39"
              >
                <label
                  className="form-label form-label-top"
                  id="label_39"
                  htmlFor="input_39"
                  aria-hidden="false"
                  style={{ marginLeft: "45%" }}
                >
                  {" "}
                  PatientName{" "}
                </label>
                <input
                  style={{ textAlign: "center" }}
                  type="text"
                  value={formData.FullName}
                  id="patientname"
                  name="patientname"
                  className="form-textbox"
                  data-defaultvalue=""
                  autoComplete="section-input_39 family-name"
                  size="15"
                  data-component="last"
                  aria-labelledby="label_39"
                  readOnly
                />
              </li>
              <li
                className="form-line"
                data-type="control_birthdate"
                id="id_39"
              >
                <label
                  className="form-label form-label-top"
                  id="label_39"
                  htmlFor="input_39"
                  aria-hidden="false"
                  style={{ marginLeft: "45%" }}
                >
                  {" "}
                  Age{" "}
                </label>
                <input
                  style={{ textAlign: "center" }}
                  type="text"
                  value={formData.Age}
                  id="age"
                  name="age"
                  className="form-textbox"
                  data-defaultvalue=""
                  autoComplete="section-input_39 family-name"
                  size="15"
                  data-component="last"
                  aria-labelledby="label_39"
                  readOnly
                />
              </li>
              <li
                className="form-line"
                data-type="control_birthdate"
                id="id_39"
              >
                <label
                  className="form-label form-label-top"
                  id="label_39"
                  aria-hidden="false"
                  style={{ marginLeft: "45%" }}
                >
                  {" "}
                  XRAY{" "}
                </label>
                <div
                style={{
                    textAlign: "center",
                    width: "90%",
                    marginLeft: "5%",
                    border: "1px solid #ccc",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                >
                  {formData.XRay.length === 0 ? (
                    <span>No XRay available</span>
                  ) : (
                    formData.XRay.map((file, index) => (
                      <div key={index}>
                        <a
                          href={file}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {file}
                        </a>
                      </div>
                    ))
                  )}
                </div>
              </li>
              <li
                className="form-line"
                data-type="control_birthdate"
                id="id_39"
              >
                <label
                  className="form-label form-label-top"
                  id="label_39"
                  aria-hidden="false"
                  style={{ marginLeft: "45%" }}
                >
                  {" "}
                  Tests{" "}
                </label>
                <div
                  style={{
                    textAlign: "center",
                    width: "90%",
                    marginLeft: "5%",
                    border: "1px solid #ccc",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                >
                  {formData.Tests.length === 0 ? (
                    <span>No Tests available</span>
                  ) : (
                    formData.Tests.map((file, index) => (
                      <div key={index}>
                        <a
                          href={file}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {file}
                        </a>
                      </div>
                    ))
                  )}
                </div>
              </li>
              <li
                className="form-line"
                data-type="control_birthdate"
                id="id_39"
              >
                <label
                  className="form-label form-label-top"
                  id="label_39"
                  htmlFor="input_39"
                  aria-hidden="false"
                  style={{ marginLeft: "45%" }}
                >
                  {" "}
                  Medicines{" "}
                </label>
                <textarea
                  style={{ textAlign: "center" }}
                  id="Medicines"
                  name="Medicines"
                  className="form-textbox"
                  data-defaultvalue=""
                  autoComplete="section-input_39 family-name"
                  size="15"
                  data-component="last"
                  aria-labelledby="label_39"
                  value={formData.Medicines.join(", ")} // Join the array into a comma-separated string
                  readOnly
                />
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Recheck;
