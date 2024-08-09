import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Nav, Navbar } from 'react-bootstrap';
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
import prof from '../images/3.jpg';
import Shifts from '../Components/Shifts';
import Medicine from '../Components/Medicine';
import AddAction from '../Components/AddAction';

function Nurse() {
  const [activePage, setActivePage] = useState('home');

  const navigate = useNavigate();


  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem('token');
    // Redirect to login page
    navigate('/login');
  };

  const renderContent = () => {
    switch (activePage) {
      case 'profile':
        return (
          <Container className="mt-4 mb-4 p-3 d-flex justify-content-center" id="prof">
            <Card className="p-4">
              <div className="image d-flex flex-column justify-content-center align-items-center">
                <Button variant="secondary" style={{ backgroundColor: 'transparent', border: 'none' }}>
                  <img src={prof} height="130" width="130" style={{ borderRadius: '50%' }} alt="Profile" />
                </Button>
                <span className="name mt-3">Eleanor Pena</span>
                <span className="idd">@eleanorpena</span>
                <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                  <span className="idd1">Oxc4c16a645_b21a</span>
                  <span><i className="fa fa-copy"></i></span>
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                  <span className="number">1069 <span className="follow">Followers</span></span>
                </div>
                <div className="d-flex mt-2">
                <button className="btn1 btn-dark">Edit Profile</button>
                </div>
                <div className="text mt-3">
                  <span>Eleanor Pena is a creator of minimalistic x bold graphics and digital artwork.<br /><br />Artist/ Creative Director by Day #NFT minting@ with FND night.</span>
                </div>
                <div style={{ marginLeft: '0%' }}>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
                <div className="social">
                  <a href=""><i className="fa-brands fa-twitter" style={{ marginLeft: '5px', marginTop: '10px' }}></i></a>
                  <a href=""><i className="fa-brands fa-facebook" style={{ marginLeft: '5px', marginTop: '10px' }}></i></a>
                  <a href=""><i className="fa-brands fa-square-instagram" style={{ marginLeft: '5px', marginTop: '10px' }}></i></a>
                  <a href=""><i className="fa-brands fa-linkedin" style={{ marginLeft: '5px', marginTop: '10px' }}></i></a>
                </div>
                <div className="px-2 rounded mt-4 date">
                  <span className="join">Joined May, 2021</span>
                </div>
              </div>
            </Card>
          </Container>
        );
        
      case 'Shifts':
        return <Shifts />;

      case 'Medicine':
        return <Medicine />;

      case 'AddAction':
        return <AddAction />;

  

      default:
        return (
            <section className="banner">
            <div className="row nur">
              <div className="col-lg-6 col-md-12 col-xl-7">
                <div className="block">
                  <div className="divider mb-3"></div>
                  <span className="text-uppercase text-sm letter-spacing">Total Health care solution</span>
                  <h1 className="mb-3 mt-3">Your most trusted health partner</h1>
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
                <Nav.Link onClick={() => setActivePage('Shifts')}  className='nav-link allBtn' style={{color:"white",backgroundColor:"#332a7e"}}>Shifts</Nav.Link>
                <Nav.Link onClick={() => setActivePage('Medicine')}  className='nav-link allBtn' style={{color:"white",backgroundColor:"#332a7e"}}>Medicine</Nav.Link>
                <Nav.Link onClick={() => setActivePage('AddAction')}  className='nav-link allBtn' style={{color:"white",backgroundColor:"#332a7e"}}>Add Action</Nav.Link>
    
                <Nav.Link >Welcome NurseName</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      {renderContent()}
    </div>
  );
}

export default Nurse;
