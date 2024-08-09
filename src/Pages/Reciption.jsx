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
import CreateAccount from '../Components/CreateAccount';
import Report from '../Components/Report';
import RoomNum from '../Components/RoomNum';
import Payment from '../Components/Payment';

function Reciption() {
  const [activePage, setActivePage] = useState('home');
  const [activePage2, setActivePage2] = useState({ page: '', formType: '' });



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
      case 'CreateAccount':
        return <CreateAccount />;

      case 'Report':
        return <Report />;

      case 'Payment':
        return <Payment />;

      case 'Room':
        return <RoomNum formType={activePage2.formType}/>

     

      default:
        return (
            <section className="banner">
            <div className="">
              <div className="row res">
                <div className="col-lg-6 col-md-12 col-xl-7">
                  <div className="block">
                    <div className="divider mb-3"></div>
                    <span className="text-uppercase text-sm letter-spacing" style={{ color: 'white' }}>
                      Total Health care solution
                    </span>
                    <h1 className="mb-3 mt-3" style={{ color: 'white' }}>
                      Your most trusted health partner
                    </h1>
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
                <Nav.Link onClick={() => setActivePage('CreateAccount')}  className='nav-link allBtn' style={{color:"white",backgroundColor:"#332a7e",paddingTop:"20px"}}>Create Account</Nav.Link>
                <Nav.Link onClick={() => setActivePage('Report')}  className='nav-link allBtn' style={{color:"white",backgroundColor:"#332a7e",paddingTop:"20px"}}>Report</Nav.Link>
                <Nav.Link onClick={() => setActivePage('Payment')}  className='nav-link allBtn' style={{color:"white",backgroundColor:"#332a7e",paddingTop:"20px"}}>Payment</Nav.Link>

                <Nav.Link onClick={() => setActivePage('Room')} className='nav-link allBtn' style={{ color: "white",backgroundColor:"#332a7e" }}>
                <li className="nav-item dropdown" style={{borderRadius:"8px",width:"100px",padding:"3px"}}>
                  <a style={{color:"white"}} className="nav-link" href="#" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Room <i className="icofont-thin-down"></i>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown02">
                    <li><a className="dropdown-item" href="#"onClick={() => setActivePage2({ page: 'Room', formType: 'Operation' })}>Operation Room</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() =>setActivePage2({ page: 'Room', formType: 'Normal' })}>Normal Room</a></li>
                  </ul>
                </li>
              </Nav.Link> 

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

export default Reciption;


