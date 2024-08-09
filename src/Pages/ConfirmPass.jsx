import React from 'react'
import { Link, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../plugins/icofont/icofont.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/style.scss';
import forget from '../images/img-3.jpg';


function ConfirmPass() {
    return (
      <section className="section appoinment">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="appoinment-content">
              <img src={forget} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6 col-md-10">
            <div className="appoinment-wrap mt-5 mt-lg-0">
              <h2 className="mb-2 title-color">Forget Password</h2>
              <form id="#" className="appoinment-form" action="#">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="loginForm">
                      <div className="password">
                        <label htmlFor="password">Password</label><br />
                        <input type="password" id="password" />
                      </div>
                      <div className="confirmPassword">
                        <label htmlFor="confirm">Confirm Password</label><br />
                        <input type="password" id="confirm" />
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <button type="submit" className="logbtn"><Link  style={{textDecoration:"none",color:"white"}}to="/login">Confirm</Link></button><br />
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
      );
}

export default ConfirmPass;