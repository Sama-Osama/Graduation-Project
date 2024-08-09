import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Button, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../plugins/icofont/icofont.min.css';
import '../plugins/bootstrap/css/bootstrap.min.css';
import '../plugins/slick-carousel/slick/slick.css';
import '../plugins/slick-carousel/slick/slick-theme.css';
import '../css/bootstrap.min.css';
import '../css/all.min.css';
import '../css/style.scss';
import logo from '../images/logo.png';
import prof from '../images/3.jpg';
import Add from '../Components/Add';
import Delete from '../Components/Delete';
import Update from '../Components/Update';
import EditProfileModal from '../Components/EditProfileModal';
import axios from 'axios';


const ITDepartment = () => {
  const [activePage, setActivePage] = useState('home');

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    description: '',
    image: null // Initialize image state
  });

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem('token');
    // Redirect to login page
    navigate('/login');
  };

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

      case 'Add':
        return <Add/>; 
      case 'Delete':
        return <Delete/>
      case 'Update':
       return <Update/>
      default:
        return (
          <section class="banner">
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

              <Nav.Link onClick={() => setActivePage('Add')}  className='nav-link allBtn' style={{color:"white",paddingTop:"20px",backgroundColor:"#332a7e"}}>Add</Nav.Link>
              <Nav.Link onClick={() => setActivePage('Delete')}  className='nav-link allBtn' style={{color:"white",paddingTop:"20px",backgroundColor:"#332a7e"}}>Delete</Nav.Link>
              <Nav.Link onClick={() => setActivePage('Update')}  className='nav-link allBtn' style={{color:"white",paddingTop:"20px",backgroundColor:"#332a7e"}}>Update</Nav.Link>


            

              {/* Example welcome message */}
              <Nav.Link>Welcome ITName</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>

    {renderContent()}
  </div>
    );
  };

export default ITDepartment;
