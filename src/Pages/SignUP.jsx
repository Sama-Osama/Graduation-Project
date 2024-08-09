import React from 'react'
import { Link, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../plugins/icofont/icofont.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/style.scss';
import signup from '../images/img-3.jpg';


function SignUP() {
    return (
        <div>
            <section className="section appoinment">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="appoinment-content">
                                <img src={signup} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10">
                            <div className="appoinment-wrap mt-5 mt-lg-0">
                                <h2 className="mb-2 title-color">Sign up</h2>
                                <form id="sign" className="appointment-form" method="post" action="#">
                                    <div>
                                        <div className="signForm">
                                            <label htmlFor="fname">First Name</label>
                                            <input type="text" id="fname" name="fname" /><br />

                                            <label htmlFor="lname">Last Name</label>
                                            <input type="text" id="lname" name="lname" /><br />

                                            <label htmlFor="email">Email</label>
                                            <input type="email" id="email" name="email" /><br />

                                            <label htmlFor="pass">Password</label>
                                            <input type="password" id="pass" name="pass" /><br />

                                            <label htmlFor="conpass">Confirm Password</label>
                                            <input type="password" id="conpass" name="conpass" /><br />

                                            <label htmlFor="date">Birth Date</label>
                                            <input type="date" id="date" name="date" /><br />

                                            <div style={{ display: 'flex' }}>
                                                <label htmlFor="gender">Gender</label>
                                                <div id="cid_15" className="form-input-wide" data-layout="full">
                                                    <div className="form-multiple-column" data-columncount="2" role="group" aria-labelledby="label_15" data-component="radio" style={{ marginLeft: '-15%' }}>
                                                        <input type="radio" aria-describedby="label_15" className="form-radio" id="input_15_0" name="q15_gender" value="Male" style={{ marginLeft: '-5%' }} />
                                                        <label className="form-radio-label" htmlFor="input_15_0">Male</label>
                                                        <input type="radio" aria-describedby="label_15" className="form-radio" id="input_15_1" name="q15_gender" value="Female" style={{ marginLeft: '-30%' }} />
                                                        <label className="form-radio-label" htmlFor="input_15_1">Female</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <label htmlFor="phone">Phone</label>
                                            <input type="number" id="phone" name="phone" /><br />

                                            <label htmlFor="address">Address</label>
                                            <input type="text" id="address" name="address" /><br />

                                            <label htmlFor="id">National Id</label>
                                            <input type="number" id="id" name="id" /><br />
                                        </div>
                                    </div>
                                    <Link type="submit" to="/login" style={{ marginTop: "20px",padding:"12px 50px",textDecoration:"none" }} className="logbtn">Sign Up</Link>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SignUP