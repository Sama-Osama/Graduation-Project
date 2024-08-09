import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const History = ({ formType,email }) => {
    const [tests, setTests] = useState([]);
    const [xrays, setXrays] = useState([]);

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
    useEffect(() => {
        // Example fetching function
        const fetchTests = async () => {
            try {
                const response = await axios.get(`https://localhost:44389/api/Patient/GetTests/${email}`); // Update with your API endpoint
                if (Array.isArray(response.data.tests)) {
                    setTests(response.data.tests);
                } else {
                    setTests([]); // Ensure state is an array if response is not as expected
                }
            } catch (error) {
                console.error('Error fetching tests:', error);
                setTests([]); // Ensure state is an array on error
            }
        };
        fetchTests();
    }, []);

    useEffect(() => {
        const fetchXrays = async () => {
            try {
                const response = await axios.get(`https://localhost:44389/api/Patient/GetXrays/${email}`);
                console.log('Fetched xray data:', response.data); // Check the structure of response.data
                // Assuming response.data is { xrays: [...] }
                setXrays(response.data.xrays); // Extract the xrays array from response.data
            } catch (error) {
                console.error('Error fetching xray data:', error);
                // Handle error state here if needed
            }
        };
    
        fetchXrays();
    }, []);
    
    

    
   

    const renderForm = () => {
        switch (formType) {
            case 'Tests':
                return (
                    <form id="sign" className="appointment-form">
                        <h2 className="mb-2 title-color" style={{ marginLeft: '45%', marginTop: '10%' }}>{formType}</h2>
                        <div role="main" className="form-all">
                            <ul className="form-section page-section">
                                {Array.isArray(tests) && tests.length > 0 ? (
                                    tests.map((testUrl, index) => (
                                        <li className="form-line" id={`id_${index}`} key={index}>
                                            <div id={`cid_${index}`} className="form-input-wide" data-layout="full">
                                                <div className="extended">
                                                    <a
                                                        className="form-sub-label"
                                                        style={{ fontSize: "20px", marginLeft: "200px" }}
                                                        href={testUrl}  // Directly use the URL as href
                                                        target="_blank"  // Open link in a new tab
                                                        rel="noopener noreferrer"  // Security best practices
                                                    >
                                                        Test Document {index + 1}
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                ) : (
                                    <li className="form-line">
                                        <div className="form-input-wide">
                                            <div className="extended">
                                                No test documents available.
                                            </div>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </form>
                );
            
                case 'Xray':
                    return (
                        <form id="sign" className="appointment-form">
                            <h2 className="mb-2 title-color" style={{ marginLeft: '45%', marginTop: '10%' }}>{formType}</h2>
                            <div role="main" className="form-all">
                                <ul className="form-section page-section">
                                    {xrays.map((xrayUrl, index) => (
                                        <li className="form-line" key={index}>
                                            <div className="form-input-wide">
                                                <div className="extended">
                                                    <a
                                                        className="form-sub-label"
                                                        style={{ fontSize: "20px", marginLeft: "200px" }}
                                                        href={xrayUrl}  // Directly use the URL as href
                                                        target="_blank"  // Open link in a new tab
                                                        rel="noopener noreferrer"  // Security best practices
                                                    >
                                                        X-Ray Document {index + 1}
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </form>
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

export default History;
