import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../plugins/icofont/icofont.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/style.scss'; 
import logo from '../images/logo.png'; 
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div id="top">
      <header>
        <nav className="navbar navbar-expand-lg navigation" id="navbar">
          <div className="container">
            <a className="navbar-brand" href="index.html">
            <img src={logo} alt="" className="img-fluid" /> 
            </a>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarmain"
              aria-controls="navbarmain"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icofont-navigation-menu"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarmain">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    Welcome to Hospital Management Information System
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-xl-7">
              <div className="block">
                <div className="divider mb-3"></div>
                <span className="text-uppercase text-sm letter-spacing">
                  Total Health care solution
                </span>
                <h1 className="mb-3 mt-3">Your most trusted health partner</h1>
                <p className="mb-4 pr-5">
                  A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium
                  quisquam aperiam maiores sunt fugit, deserunt rem suscipit placeat.
                </p>
                <div className="btn-container">
                <Link
                    to="/login"
                    className="btn btn-main-2 btn-icon btn-round-full"
                    style={{ height: '5vh' }}
                  >
                    Start <i className="icofont-simple-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <header>
        <div className="header-top-bar">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <ul className="top-bar-info list-inline-item pl-0 mb-0">
                  <li className="list-inline-item">
                    <a href="mailto:support@gmail.com">
                      <i className="icofont-support-faq mr-2"></i>support@novena.com
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <i className="icofont-location-pin mr-2"></i>Address Ta-134/A, New York, USA
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                  <a href="tel:+23-345-67890">
                    <span>Call Now : </span>
                    <span className="h4">823-4565-13456</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
