import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../plugins/icofont/icofont.min.css';
import '../plugins/bootstrap/css/bootstrap.min.css';
import '../plugins/slick-carousel/slick/slick.css';
import '../plugins/slick-carousel/slick/slick-theme.css';
import '../css/bootstrap.min.css';
import '../css/all.min.css';
import '../css/style.scss';
import logo from '../images/logo.png';


class SecretaryPage extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg navigation" id="navbar" style={{ backgroundColor: 'rgb(236, 234, 234)' }}>
                        <div className="container">
                            <a className="navbar-brand" href="/secrtary">
                                <img src={logo} alt="" className="img-fluid" />
                            </a>

                            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain" aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icofont-navigation-menu"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarmain">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item dropdown" id="">
                                        <a className="nav-link " href="/login" id="logout" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: 'red' }}>Logout </a>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link " href="secretery.html" id="" data-toggle="" aria-haspopup="true" aria-expanded="false">Welcome SecretaryName</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>

                <div className="container">
                    <div className="row">
                        <div className="col-md-offset-1 col-md-10" id="t3">
                            <div className="panel" style={{ marginTop: '80px', marginLeft: '180px', width: '80%' }}>
                                <div className="panel-heading">
                                    <div className="row">
                                        <div className="col col-sm-3 col-xs-12" style={{ marginLeft: '330px' }}>
                                            <h4 className="title">Secretary</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-body table-responsive" style={{ marginLeft: '30px', textAlign: 'center' }}>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Patient_id</th>
                                                <th>8AM-10AM</th>
                                                <th>10AM-12PM</th>
                                                <th>12PM-2PM</th>
                                                <th>2PM-4PM</th>
                                                <th>4PM-6PM</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td> id<br />Name<br /><input type="checkbox" defaultChecked /></td>
                                                <td></td>
                                              
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td></td>
                                                <td> id<br />Name<br /><input type="checkbox" defaultChecked /></td>
                                                <td></td>
                                                <td></td>
                                                <td> id<br />Name<br /><input type="checkbox" /></td>
                                           
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td> id<br />Name<br /><input type="checkbox" defaultChecked /></td>
                                                <td></td>
                                                <td> id<br />Name<br /><input type="checkbox" defaultChecked /></td>
                                                <td></td>
                                                <td></td>
                                            
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td></td>
                                                <td> id<br />Name<br /><input type="checkbox" defaultChecked /></td>
                                                <td></td>
                                                <td> id<br />Name<br /><input type="checkbox" /></td>
                                                <td></td>
                                             
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td> id<br />Name<br /><input type="checkbox" defaultChecked /></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td> id<br />Name<br /><input type="checkbox" /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <script src="script2.js"></script>
            </div>
        );
    }
}

export default SecretaryPage;
