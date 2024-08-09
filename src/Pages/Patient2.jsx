import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../plugins/icofont/icofont.min.css';
import '../plugins/bootstrap/css/bootstrap.min.css';
import '../plugins/slick-carousel/slick/slick.css';
import '../plugins/slick-carousel/slick/slick-theme.css';
import '../css/bootstrap.min.css';
import '../css/all.min.css';
import '../css/style.scss';
import logo from '../images/logo.png';
import PatientForm from '../Components/PatientForm';
import Feedback from '../Components/Feedback';
import History from '../Components/History';
import Search from '../Components/Search';
import { useNavigate } from 'react-router-dom';
import Predict from '../Components/Predict';

function PatientPage() {
  const [activePage, setActivePage] = useState('home');
  const [activePage2, setActivePage2] = useState({ page: '', formType: '' });
  const [activePage3, setActivePage3] = useState({ page: '', formType: '' });
  const [activePage4, setActivePage4] = useState({ page: '', formType: '' });


  const navigate = useNavigate();


  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem('token');
    // Redirect to login page
    navigate('/login');
  };

  const renderContent = () => {
    switch (activePage) {
      
      case 'account':
        return <PatientForm />;

      case 'feedback':
        return <Feedback />;

      case 'history':
        return <History formType={activePage2.formType}/>

      case 'search':
        return <Search formType={activePage3.formType}/>
      case 'predict':
        return <Predict formType={activePage4.formType}/>

     

      default:
        return (
            <section className="banner">
            <div>
                <div className="row pat">
                    <div className="col-lg-6 col-md-12 col-xl-7">
                        <div className="block">
                            <div className="divider mb-3"></div>
                            <span className="text-uppercase text-sm letter-spacing ">Total Health care solution</span>
                            <h1 className="mb-3 mt-3">Your most trusted health partner</h1>
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
            <Navbar.Collapse id="navbarmain" >
              <Nav className="ml-auto">
              <Nav.Link onClick={handleLogout} className="text-danger">Logout</Nav.Link>
                <Nav.Link onClick={() => setActivePage('account')} className='nav-link allBtn' style={{color:"white",paddingTop:"20px",backgroundColor:"#332a7e"}}>Account</Nav.Link>
                <Nav.Link onClick={() => setActivePage('feedback')}  className='nav-link allBtn' style={{color:"white",textAlign:"center",paddingTop:"20px",backgroundColor:"#332a7e"}}>Feedback</Nav.Link>
                <Nav.Link onClick={() => setActivePage('history')} className='nav-link allBtn' style={{ color: "white" ,backgroundColor:"#332a7e"}}>
                <li className="nav-item dropdown">
                  <a style={{color:"white",}} className="nav-link" href="#" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    History <i className="icofont-thin-down"></i>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown02">
                    <li><a className="dropdown-item" href="#"onClick={() => setActivePage2({ page: 'history', formType: 'Tests' })}>Tests</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() =>setActivePage2({ page: 'history', formType: 'Xray' })}>Xray</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => setActivePage2({ page: 'history', formType: 'Exam' })}>Examinations</a></li>
                  </ul>
                </li>
              </Nav.Link>

                <Nav.Link onClick={() => setActivePage('predict')} className='nav-link allBtn' style={{ color: "white",backgroundColor:"#332a7e" }}>
                <li className="nav-item dropdown">
                  <a style={{color:"white"}} className="nav-link" href="#" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Predict <i className="icofont-thin-down"></i>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown02">
                    <li><a className="dropdown-item" href="#"onClick={() => setActivePage4({ page: 'predict', formType: 'COVID-19' })}>COVID-19</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() =>setActivePage4({ page: 'predict', formType: 'Diabetes' })}>Diabetes</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => setActivePage4({ page: 'predict', formType: 'Heart' })}>Heart</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => setActivePage4({ page: 'predict', formType: 'PediatricAppendicitis' })}>Pediatric Appendicitis</a></li>
                  </ul>
                </li>
              </Nav.Link>

              <Nav.Link onClick={() => setActivePage('search')} className='nav-link allBtn' style={{ color: "white" ,backgroundColor:"#332a7e"}}>
                <li className="nav-item dropdown">
                  <a style={{color:"white"}} className="nav-link" href="#" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Search <i className="icofont-thin-down"></i>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown02">
                    <li><a className="dropdown-item" href="#"onClick={() => setActivePage3({ page: 'search', formType: 'Hospital' })}>Hospital</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() =>setActivePage3({ page: 'search', formType: 'Clincal' })}>Clincal</a></li>
                  </ul>
                </li>
              </Nav.Link> 
              
                <Nav.Link >Welcome PatientName</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      {renderContent()}
    </div>
  );
}

export default PatientPage;
