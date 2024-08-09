import React, { useState } from 'react';
import { Link, Navigate,useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import login from '../images/img-3.jpg';

const data = [
  { email: "itdepartment@gmail.com", password: "123", role: "admin" },
  { email: "doctor@gmail.com", password: "1234", role: "doctor" },
  { email: "patient@gmail.com", password: "12345", role: "patient" },
  { email: "reciption@gmail.com", password: "123456", role: "reception" },
  { email: "nurse@gmail.com", password: "1234567", role: "nurse" },
  { email: "xray@gmail.com", password: "12345678", role: "xray" },
  { email: "test@gmail.com", password: "1234567899", role: "test" },
  { email: "phar@gmail.com", password: "12345678910", role: "pharmacy" },
]; 

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null); // State to store the logged-in user
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email and password match any entry in data array
    const foundUser = data.find(user => user.email === email && user.password === password);

    if (foundUser) {
      // Successful login
      localStorage.setItem('token', 'your_token_here'); // Set a token to indicate authentication
      setUser(foundUser); // Set the logged-in user
      setLoggedIn(true);
    } else {
      // Failed login
      setError('Invalid email or password. Please try again.');
    }
  };

  if (loggedIn && user) {
    switch (user.role) {
      case 'doctor':
        return <Navigate to="/doctor" state={{ email }} />;
      case 'pharmacy':
        return <Navigate to="/pharmacy" state={{ email }} />;
      case 'secrtary':
        return <Navigate to="/secrtary" state={{ email }} />;
      case 'test':
        return <Navigate to="/test" state={{ email }} />;
      case 'xray':
        return <Navigate to="/xray" state={{ email }} />;
      case 'admin':
        return <Navigate to="/admin" state={{ email }} />;
      case 'patient':
      return navigate('/patient', { state: { email } });

        //return <Navigate to={`/patient/${email}`} state={{ email }} />;
      case 'nurse':
        return <Navigate to="/nurse" state={{ email }} />;
      case 'reception':
        return <Navigate to="/reception" state={{ email }} />;
      default:
        return <Navigate to="/" />;
    }
  }

  return (
    <section className="section appoinment">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="appoinment-content">
              <img src={login} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6 col-md-10">
            <div className="appoinment-wrap mt-5 mt-lg-0">
              <h2 className="mb-2 title-color">Login</h2>
              <form id="loginForm" className="appoinment-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="loginForm">
                      <label htmlFor="email">Email</label><br />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      /><br />
                      <label htmlFor="pass">Password</label><br />
                      <input
                        type="password"
                        id="pass"
                        name="pass"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
                <button type="submit" className="logbtn">Login</button><br />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div style={{ marginRight: '30%', marginTop: '5%' }}>
                  <Link to="/forget" className="forget" style={{ marginRight: '2%', textDecoration: "none" }}>Forget Password</Link>
                  <Link to="/signup" className="" style={{ textDecoration: "none", marginLeft: '2%' }}>Sign Up</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../plugins/icofont/icofont.min.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import '../css/style.scss';
// import login from '../images/img-3.jpg';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:8000/Login', {
//         email,
//         password  // Ensure this matches the backend field name `pass`
//       });

//       console.log(response.data); // Log the API response to the console

//       const foundUser = response.data;

//       if (foundUser && foundUser.role) {
//         localStorage.setItem('user', JSON.stringify(foundUser)); // Store the user in local storage
//         navigate(`/${foundUser.role.toLowerCase()}`); // Navigate to the respective role's page
//       } else {
//         setError('Invalid email or password. Please try again.');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       setError('Failed to log in. Please try again.');
//     }
//   };

//   return (
//     <section className="section appoinment">
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-lg-6">
//             <div className="appoinment-content">
//               <img src={login} alt="" className="img-fluid" />
//             </div>
//           </div>
//           <div className="col-lg-6 col-md-10">
//             <div className="appoinment-wrap mt-5 mt-lg-0">
//               <h2 className="mb-2 title-color">Login</h2>
//               <form id="loginForm" className="appoinment-form" onSubmit={handleSubmit}>
//                 <div className="row">
//                   <div className="col-lg-6">
//                     <div className="loginForm">
//                       <label htmlFor="email">Email</label><br />
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                       /><br />
//                       <label htmlFor="pass">Password</label><br />
//                       <input
//                         type="password"
//                         id="pass"
//                         name="pass"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <button type="submit" className="logbtn">Login</button><br />
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//                 <div style={{ marginRight: '30%', marginTop: '5%' }}>
//                   <Link to="/forget" className="forget" style={{ marginRight: '2%', textDecoration: "none" }}>Forget Password</Link>
//                   <Link to="/signup" className="" style={{ textDecoration: "none", marginLeft: '2%' }}>Sign Up</Link>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LoginPage;







// import React, { useState } from 'react';
// import axios from 'axios';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.get('http://localhost:8000/Login');

//       const user = response.data.find(
//         (user) => user.email === email && user.password === password
//       );

//       if (user) {
//         console.log('Fetched Data including Role:', user);
//         setError('');
//       } else {
//         setError('Invalid email or password');
//       }
//     } catch (error) {
//       setError('Error fetching data');
//       console.error('There was an error!', error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>

//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// };

// export default LoginForm;


