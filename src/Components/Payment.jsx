import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Payment = () => {
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

  const [nid, setNid] = useState("");
  const [patientData, setPatientData] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);
  const [error, setError] = useState(null);

  const handleNidChange = (e) => {
    setNid(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchPatientData();
  };

  const fetchPatientData = async () => {
    try {
      const response = await axios.get(
        `https://localhost:44389/api/Reception/ReturnPrices/${nid}`
      );
      console.log(response);

      const data = response.data;

      if (data) {
        const { name, services } = data;

        // Calculate total amount
        let total = 0;
        services.forEach((service) => {
          total += parseInt(service.price, 10); // Convert price to integer
        });

        setPatientData({ name, services });
        setTotalAmount(total);
        setError(null); // Reset error state
      } else {
        // Handle case where patient with NID is not found
        setPatientData(null);
        setTotalAmount(0);
        setError("No patient found with the specified NID.");
      }
    } catch (error) {
      console.error("Error fetching patient data:", error);
      setError("Error fetching patient data. Please try again.");
      setPatientData(null);
      setTotalAmount(0);
    }
  };

  const printPage = () => {
    window.print();
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

      <form
        onSubmit={handleSubmit}
        className="jotform-form"
        acceptCharset="utf-8"
        autoComplete="on"
      >
        <input type="hidden" name="formID" value="" />
        <input type="hidden" id="JWTContainer" value="" />
        <input type="hidden" id="cardinalOrderNumber" value="" />
        <input
          type="hidden"
          id="jsExecutionTracker"
          name="jsExecutionTracker"
          value="build-date-1706118061123"
        />
        <input
          type="hidden"
          id="submitSource"
          name="submitSource"
          value="unknown"
        />
        <input type="hidden" id="buildDate" name="buildDate" value="" />
        <div role="main" className="form-all">
          <ul className="form-section page-section">
            <li
              id="cid_43"
              className="form-input-wide"
              data-type="control_head"
            ></li>

            <li className="form-line" data-type="control_birthdate" id="id_39">
              <label
                className="form-label form-label-top"
                id="label_39"
                htmlFor="input_39"
                aria-hidden="false"
                style={{ marginLeft: "45%" }}
              >
                {" "}
                Patient ID{" "}
              </label>
              <input
                type="text"
                value={nid}
                onChange={handleNidChange}
                className="form-textbox"
                autoComplete="off"
                size="15"
                aria-labelledby="label_56 sublabel_56_last"
                required
              />
            </li>

            <li className="form-line" data-type="control_birthdate" id="id_39">
              <label
                className="form-label form-label-top"
                id="label_39"
                htmlFor="input_39"
                aria-hidden="false"
                style={{ marginLeft: "45%" }}
              >
                {" "}
                Name{" "}
              </label>
              <input
                type="text"
                value={patientData?.name || ""}
                disabled
                className="form-textbox"
                autoComplete="off"
                size="15"
                aria-labelledby="label_56 sublabel_56_last"
              />
            </li>

            <li className="form-line" data-type="control_birthdate" id="id_39">
              <table className="table" style={{ textAlign: "center" }}>
                <thead>
                  <tr>
                    <th scope="col" style={{ fontWeight: "bold" }}>
                      Services
                    </th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {patientData?.services.map((service, index) => (
                    <tr key={index}>
                      <td style={{ fontWeight: "bold" }}>
                        {service.nameOfService}
                      </td>
                      <td>{service.price}$</td>
                    </tr>
                  ))}
                  <tr style={{ color: "red", fontWeight: "bold" }}>
                    <th
                      style={{ color: "red", fontWeight: "bold" }}
                      scope="col"
                    >
                      Total
                    </th>
                    <th style={{ color: "red", fontWeight: "bold" }}>
                      {totalAmount}$
                    </th>
                  </tr>
                </tbody>
              </table>
            </li>
            <li className="form-line" data-type="control_button" id="id_2">
              <div id="cid_2" className="form-input-wide" data-layout="full" style={{textAlign:"center"}}>
                <div
                  data-align="auto"
                  className="form-buttons-wrapper form-buttons-auto jsTest-button-wrapperField"
                >
                  <button
                    id="input_2"
                    type="submit"
                    className=" nav-link allBtn"
                    style={{ color: 'white', padding: '10px', display: 'block', textAlign: 'center', backgroundColor: '#332a7e', border: 'none', borderRadius: '5px', marginBottom: '25px', width: '150px' }}
                  >
                    Submit
                  </button>
                  <button
                    id="input_reset_2"
                    type="reset"
                    className="form-submit-reset form-submit-button-simple_grey jsTest-resetField"
                    style={{ marginLeft: "1%"}}
                  >
                    Clear
                  </button>
                  <button
                    type="button"
                    className=" nav-link allBtn"
                    style={{ color: 'white', padding: '10px',  display: 'block', textAlign: 'center', backgroundColor: '#332a7e', border: 'none', borderRadius: '5px', marginBottom: '25px', width: '150px' }}                    onClick={printPage}
                  >
                    Print
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

export default Payment;