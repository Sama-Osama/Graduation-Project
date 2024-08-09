import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Delete = () => {
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




  const [NID, setNID] = useState('');
  // const [adminsData, setAdminsData] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get('https://localhost:44389/api/It/Delete');
  //     setAdminsData(response.data);
  //     setLoading(false);
  //   } catch (error) {
  //     toast.error("Failed to fetch admin data");
  //     setLoading(false);
  //   }
  // };

  const handleConfirmDelete = async (event) => {
    event.preventDefault();
    
    // if (NID <= 0 || isNaN(NID)) {
    //   toast.error("National ID must be a positive number");
    //   return;
    // }
  
    // if (loading) {
    //   toast.error("Data is still loading");
    //   return;
    // }
  
    // const admins = adminsData;
  
    // if (!admins || admins.length === 0) {
    //   toast.error("No data available");
    //   return;
    // }
  
    // const userToDelete = admins.find((admin) => admin.NID === NID.toString());
  
    // if (!userToDelete) {
    //   toast.error("User not found in local data");
    //   return;
    // }
  
    // console.log("Deleting user with NID:", NID);
  
    try {
      const response = await axios.delete(`https://localhost:44389/api/It/Delete/${NID}`);
  
      if (response.status === 200) {
        toast.success("User deleted successfully");
        navigate("");
  
        // // Update the adminsData state by removing the deleted user
        // setAdminsData(admins.filter((admin) => admin.id !== userToDelete.id));
        setShowModal(false); // Close the modal after successful deletion
      } else {
        toast.error("Failed to delete user");
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error("User not found on server");
      } else {
        toast.error("Failed to delete user");
      }
      console.error("Delete request error:", error);
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    if (!NID) {
      toast.error("Please enter a valid National ID");
      return;
  }
    setShowModal(true);
  };

  return (
    <div>
      <ToastContainer />


      {/* Confirmation Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete the user with NID {NID}?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

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

      <ToastContainer />

      <form className="appointment-form" onSubmit={(e) => e.preventDefault()}>
        <h2 className="mb-2 title-color" style={{ marginLeft: '45%', marginTop: '10%' }}>Delete</h2>
        <div className="form-all">
          <ul className="form-section page-section">
            <li className="form-line" data-type="control_birthdate">
              <label className="form-label form-label-top" htmlFor="nationalID"> NationalID </label>
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
            <li className="form-line" data-type="control_button">
              <div className="form-input-wide">
                <button type="button" className="nav-link allBtn" style={{ color: 'white', padding: '10px', marginLeft: 'auto', marginRight: 'auto', display: 'block', textAlign: 'center', backgroundColor: '#332a7e', border: 'none', borderRadius: '5px', marginBottom: '25px', width: '150px' }} onClick={handleDelete}>Delete</button>
              </div>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default Delete;
