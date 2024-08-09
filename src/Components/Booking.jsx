import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Booking = () => {
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



  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nationalID: '',
    name: '',
    role:"Patient"
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      nationalID: formData.nationalID,
      name: formData.name,
    };

    try {
      const response = await axios.post('http://localhost:8000/patientHospitalBooking', data);
      toast.success("User Registered Successfully", {
        onClose: () => navigate('/patient')
      });
    } catch (error) {
      toast.error(error.message);
    }
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

      <h2 className="mb-2 title-color" style={{ marginLeft: '45%', marginTop: '10%' }}>Booking</h2>
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
            <li id="cid_43" className="form-input-wide" data-type="control_head"></li>
            <li className="form-line" data-type="control_birthdate" id="id_39">
              <label className="form-label form-label-top" id="label_39" htmlFor="input_nationalID" aria-hidden="false" style={{ marginLeft: '45%' }}>
                NationalID
              </label>
              <input
                type="number"
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
                    Booking
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

export default Booking;
