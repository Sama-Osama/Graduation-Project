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
import Phar from './Phar';
const PharmacyPage = () => {

    const navigate = useNavigate();


    const handleLogout = () => {
      // Clear authentication data
      localStorage.removeItem('token');
      // Redirect to login page
      navigate('/login');
    };

    
    const [showProfile, setShowProfile] = useState(false); // State to toggle profile visibility

    return (
        <div>
            {/* Header */}
            <header>
                <nav className="navbar navbar-expand-lg navigation" id="navbar">
                    <div className="container">
                        <a className="navbar-brand" href="/pharmacy">
                            <img src={logo} alt="" className="img-fluid" />
                        </a>
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                            data-target="#navbarmain" aria-controls="navbarmain" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="icofont-navigation-menu"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarmain">
                            <ul className="navbar-nav ml-auto">

                                <li className="nav-item dropdown">
                                        <a className="nav-link " href="secretery.html" id="" data-toggle="" aria-haspopup="true" aria-expanded="false">Welcome PharmcyName</a>
                                    </li>
                                <li className="nav-item dropdown">
                                <Nav.Link onClick={handleLogout} className="text-danger">Logout</Nav.Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Profile Section */}
            {showProfile && (
                <div className="card p-4" style={{ margin: 'auto' }}>
                    <div className="image d-flex flex-column justify-content-center align-items-center">
                        <button className="btn btn-secondary" style={{ backgroundColor: 'transparent', border: 'none', borderColor: 'transparent' }}>
                            <img src={prof} height="130" width="130" style={{ borderRadius: '50%' }} alt="Profile" />
                        </button>
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
                            <span>Eleanor Pena is a creator of minimalistic x bold graphics and digital artwork.<br /><br /> Artist/ Creative Director by Day #NFT minting@ with FND night.</span>
                        </div>
                        <div style={{ marginLeft: '0%' }}>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <div className="social">
                            <a href="#"><i className="fa-brands fa-twitter" style={{ marginLeft: '5px', marginTop: '10px',color:"black", }}></i></a>
                            <a href="#"><i className="fa-brands fa-facebook" style={{ marginLeft: '5px', marginTop: '10px',color:"black" }}></i></a>
                            <a href="#"><i className="fa-brands fa-square-instagram" style={{ marginLeft: '5px', marginTop: '10px',color:"black" }}></i></a>
                            <a href="#"><i className="fa-brands fa-linkedin" style={{ marginLeft: '5px', marginTop: '10px',color:"black" }}></i></a>
                        </div>
                        <div className="px-2 rounded mt-4 date">
                            <span className="join">Joined May,2021</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Pharmacy Form Section */}
            {!showProfile && <Phar/>} {/* Display PharmacyForm component when showProfile is false */}
        </div>
    );
};

export default PharmacyPage;
