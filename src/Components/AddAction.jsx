import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddAction = () => {
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
    nurseID: '',
    notes: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://localhost:44389/api/Nurse/AddAction', formData); // Replace with your actual API endpoint
      console.log('Form submission response:', response.data);
      toast.success('Form submitted successfully!');
      setTimeout(() => {
        window.location.href = "/nurse";
      }, 2000); 
      // Redirect to another page after submission
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error.response) {
        toast.error(`Error submitting form: ${error.response.data.message || 'Unknown error'}`);
      } else if (error.request) {
        console.error('Request data:', error.request);
        toast.error('Error submitting form: No response received');
      } else {
        console.error('Error message:', error.message);
        toast.error(`Error submitting form: ${error.message}`);
      }
    }
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

      <h2 className="mb-2 title-color" style={{ marginLeft: '45%', marginTop: '10%' }}>Add Action</h2>
      <form onSubmit={handleSubmit} className="appoinment-form">
        <div role="main" className="form-all">
          <ul className="form-section page-section">
            <li id="cid_43" className="form-input-wide" data-type="control_head"></li>
            <li className="form-line" data-type="control_birthdate" id="id_39">
              <label
                className="form-label form-label-top"
                id="label_39"
                htmlFor="nationalID"
                style={{ marginLeft: '45%' }}
              >
                NationalID
              </label>
              <input
                type="text"
                id="nationalID"
                name="nationalID"
                className="form-textbox"
                autoComplete="off"
                size="15"
                value={formData.nationalID}
                onChange={handleChange}
              />
            </li>
            <li className="form-line" data-type="control_birthdate" id="id_39">
              <label
                className="form-label form-label-top"
                id="label_39"
                htmlFor="nurseID"
                style={{ marginLeft: '45%' }}
              >
                NurseID
              </label>
              <input
                type="text"
                id="nurseID"
                name="nurseID"
                className="form-textbox"
                autoComplete="off"
                size="15"
                value={formData.nurseID}
                onChange={handleChange}
              />
            </li>
            <li className="form-line" data-type="control_textarea" id="id_40">
              <label
                className="form-label form-label-top"
                id="label_40"
                htmlFor="notes"
                style={{ marginLeft: '45%' }}
              >
                Notes
              </label>
              <textarea
                rows="1"
                cols="20"
                id="notes"
                name="notes"
                className="form-textarea"
                value={formData.notes}
                onChange={handleChange}
              ></textarea>
            </li>
            <li className="form-line" data-type="control_button" id="id_52">
              <div id="cid_52" className="form-input-wide" data-layout="full">
                <div className="form-buttons-wrapper form-buttons-auto">
                  <button type="submit" id="input_52" className="form-submit-button submit-button jf-form-buttons">
                    Submit Form
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

export default AddAction;
