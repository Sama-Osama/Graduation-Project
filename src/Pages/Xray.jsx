import React, { useState } from 'react';
import { Container, Card, Button, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../plugins/icofont/icofont.min.css';
import '../plugins/bootstrap/css/bootstrap.min.css';
import '../plugins/slick-carousel/slick/slick.css';
import '../plugins/slick-carousel/slick/slick-theme.css';
import '../css/bootstrap.min.css';
import '../css/all.min.css';
import '../css/style.scss';
import logo from '../images/logo.png';
import EditProfileModal from '../Components/EditProfileModal';
import axios from 'axios';
import XrayAppointment from '../Components/XrayAppintments';
import XrayResult from '../Components/XrayResult';


const XrayPage = () => {
  const navigate = useNavigate();


  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem('token');
    // Redirect to login page
    navigate('/login');
  };



  const [activePage, setActivePage] = useState('home');
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    description: '',
    image: null // Initialize image state
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image') {
      setFormData({ ...formData, image: files[0] }); // Update image state with the selected file
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleEditProfile = () => {
    setShowModal(true); // Open the modal
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData); // Log formData to verify it contains image and other data
  
    // Assuming you're using Axios for HTTP requests
    axios.post('http://localhost:8000/profile', formData)
      .then(response => {
        console.log('Profile Updated:', response.data);
        setShowModal(false); // Close modal after successful update
      })
      .catch(error => {
        console.error('Error updating profile:', error);
      });
  };


  const renderContent = () => {
    switch (activePage) {
      case 'profile':
        return (
          <Container className="mt-4 mb-4 p-3 d-flex justify-content-center" id="prof">
            <Card className="p-4">
              <div className="image d-flex flex-column justify-content-center align-items-center">
                <Button variant="secondary" style={{ backgroundColor: 'transparent', border: 'none' }}>
                  <img  height="130" width="130" style={{ borderRadius: '50%' }} alt="Profile" />
                </Button>
                <span className="name mt-3">{formData.firstname} {formData.lastname}</span>
                <span className="idd">{formData.email}</span>
                <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                  <span className="idd1">{formData.phone}</span>
                  <span><i className="fa fa-copy"></i></span>
                </div>
                <div className="d-flex mt-2">
                <button onClick={handleEditProfile}>Edit Profile</button>
                </div>
                <div className="text mt-3">
                  <span>Doctor at heart department .<br /><br />graduated from assuit universityt.</span>
                </div>
                <div className="px-2 rounded mt-4 date">
                  <span className="join">Joined May, 2021</span>
                </div>
              </div>
            </Card>

            {/* Modal for editing profile */}
            <EditProfileModal
        show={showModal}
        handleClose={handleCloseModal}
        formData={formData}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
          </Container>
                  );
        break;
      case 'XrayAppointment':
        return <XrayAppointment/>; 
      case 'XrayResult':
        return <XrayResult/>
      default:
        return (
          <section class="banner2">
	<div class="container">
		<div class="row ">
			<div class="col-lg-6 col-md-12 col-xl-7">
				<div class="block">
					<div class="divider mb-3"></div>
					<span class="text-uppercase text-sm letter-spacing ">Total Health care solution</span>
					<h1 class="mb-3 mt-3">Your most trusted health partner</h1>
					
					<p class="mb-4 pr-5">A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium quisquam aperiam maiores sunt fugit, deserunt rem suscipit placeat.</p>
				</div>
			</div>
		</div>
	</div>
</section>
        );
    }
  };

  return (
    <div>
    <header>
      <Navbar expand="lg" id="navbar">
        <Container>
          <Navbar.Brand href="#" onClick={() => setActivePage('home')}>
            <img src={logo} alt="Logo" className="img-fluid" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarmain" />
          <Navbar.Collapse id="navbarmain">
            <Nav className="ml-auto">
            <Nav.Link onClick={handleLogout} className="text-danger">Logout</Nav.Link>

              <Nav.Link onClick={() => setActivePage('XrayResult')}  className='nav-link allBtn' style={{color:"white",paddingTop:"20px",backgroundColor:"#332a7e"}}>XrayResult</Nav.Link>
              <Nav.Link onClick={() => setActivePage('XrayAppointment')}  className='nav-link allBtn' style={{color:"white",paddingTop:"20px",backgroundColor:"#332a7e"}}>XrayAppointment</Nav.Link>


             

              {/* Example welcome message */}
              <Nav.Link>Welcome XrayName</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>

    {renderContent()}
  </div>
    );
  };

export default XrayPage;
