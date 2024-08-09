import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';



const Clinicals = () => {

  const location = useLocation();
  const [clinicalData, setClinicalData] = useState([]);
  const clinicName = location.state?.clinicName || '';

  const navigate = useNavigate();

  const handleBookingClick = (name) => {
    console.log("Clinic name passed:", name); // Log the clinic name
    navigate('/clinicbooking', { state: { clinicName: name } });
  };

  useEffect(() => {
    if (location.state && location.state.clinicalData) {
        setClinicalData(location.state.clinicalData);
    }
}, [location.state]);




  return (
    <div>
      <h2 className="mb-2 title-color" style={{ marginLeft: '45%', marginTop: '5%' }}>Clinicals</h2>
      <div>
      {clinicalData.map((item, index) => (
                    <div className="member d-flex align-items-start" style={{ marginTop: '60px', marginLeft: '20%' }} key={index}>
                        
                        <div className="member-info" style={{ marginLeft: '10px' }}>
                            <h4>{item.name}</h4>
                            <span>{item.description}</span>
                            <p>{item.region}</p>
                            <p>{item.department}</p>
                            <div className="social">
                                <a href="#" style={{ paddingLeft: '5px' }}><i className="fab fa-twitter"></i></a>
                                <a href="#" style={{ paddingLeft: '5px' }}><i className="fab fa-facebook"></i></a>
                                <a href="#" style={{ paddingLeft: '5px' }}><i className="fab fa-instagram-square"></i></a>
                                <a href="#" style={{ paddingLeft: '5px' }}><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                        {/* <Link
                        
                            onClick={() => handleBookingClick(item.name)}
                            className="nav-link allBtn" id="big2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                            style={{ color: 'white', padding: '10px', marginLeft: "20%" }}>
                            Booking
                        </Link> */}
                        <button
              onClick={() => handleBookingClick(item.name)}
              className="nav-link allBtn" id="big2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
              style={{ color: 'white', padding: '10px', marginLeft: "20%",backgroundColor:"#2979AE" }}
            >
              Booking
            </button>
                    </div>
                ))}
      </div>
    </div>
  );
};

export default Clinicals;
