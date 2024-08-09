import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Report = () => {
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





  const [selectedOption, setSelectedOption] = useState('');
  const [reportText, setReportText] = useState('');

  useEffect(() => {
    // Function to fetch the report data
    const fetchReportData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/Report');
        const reports = response.data; // Assuming your API returns an array with one object

        // Check if selectedOption exists in the reports object
        const selectedReport = reports[0]; // Access the first object in the array
        if (selectedReport && selectedReport[selectedOption]) {
          setReportText(selectedReport[selectedOption]);
        } else {
          setReportText('No data found for selected report');
        }
      } catch (error) {
        console.error('Error fetching report data:', error);
        setReportText('Error fetching report data');
      }
    };

    // Fetch data initially or whenever selectedOption changes
    if (selectedOption) {
      fetchReportData();
    }
  }, [selectedOption]);

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
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
        </div>

      <form
        className="jotform-form"
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
        <div className="form-section page-section">
          <ul className="form-section page-section">
            <li id="cid_43" className="form-input-wide" data-type="control_head"></li>
            <div id="hospital_section" style={{backgroundColor:"white",width:"40%",marginLeft:"30%",marginTop:"10%",padding:"20px 20px"}}>
              <li className="form-line" data-type="control_birthdate" style={{ width: "80%" }}>

                <label htmlFor="input_hospital">Report:</label>
                <select
                  id="input_hospital"
                  className="form-dropdown"
                  onChange={handleChange}
                  value={selectedOption}
                >
                  <option value="">Please select a Report</option>
                  <option value="Doctors who have rate up 3.5">Doctors who have rate up 3.5</option>
                  <option value="Hospitals with pharmacy">Hospitals with pharmacy</option>
                </select>
            {selectedOption && (
              <div>
                <p>{reportText}</p>
              </div>
            )}
            
          </li>
          </div>
          </ul>
          </div> 
      </form>
    </div>
    
  );


};

export default Report;
