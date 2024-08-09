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
import Recheck from '../Components/Recheck';
import Diagnosis from '../Components/Dignosis';
import Transfer from '../Components/Transfer';
import Xray from '../Components/Xray';
import Tests from '../Components/Tests';

function Doctor() {
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

      case 'recheck':
        return <Recheck />;

      case 'diagnosis':
        return <Diagnosis />;

      case 'transfer':
        return <Transfer />;

      case 'xray':
        return <Xray />;

      case 'tests':
        return <Tests />;

      default:
        return (
          <section className="banner">
            <div>
              <Row className="bg1">
                <Col lg={6} md={12} xl={7}>
                  <div className="block">
                    <div className="divider mb-3"></div>
                    <span className="text-uppercase text-sm letter-spacing">Total Health care solution</span>
                    <h1 className="mb-3 mt-3">Your most trusted health partner</h1>
                  </div>
                </Col>
              </Row>
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
                <Nav.Link onClick={() => setActivePage('recheck')}  className='nav-link allBtn' style={{color:"white",backgroundColor:"#332a7e"}}>Recheck</Nav.Link>
                <Nav.Link onClick={() => setActivePage('diagnosis')}  className='nav-link allBtn' style={{color:"white",backgroundColor:"#332a7e"}}>Diagnosis</Nav.Link>
                <Nav.Link onClick={() => setActivePage('transfer')}  className='nav-link allBtn' style={{color:"white",backgroundColor:"#332a7e"}}>Transfer</Nav.Link>
                <Nav.Link onClick={() => setActivePage('xray')}  className='nav-link allBtn' style={{color:"white",backgroundColor:"#332a7e"}}>Xray</Nav.Link>
                <Nav.Link onClick={() => setActivePage('tests')}  className='nav-link allBtn' style={{color:"white",backgroundColor:"#332a7e"}}>Tests</Nav.Link>
                <Nav.Link >Welcome DoctorName</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      {renderContent()}
    </div>
  );
}

export default Doctor;
