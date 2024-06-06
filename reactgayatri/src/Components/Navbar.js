import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../Slice/RegisterSlice';
import { useDispatch } from 'react-redux';
function Navbar() {
  const std_email = localStorage.getItem("email");
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <header id="header" className="fixed-top header-scrolled">
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container d-flex align-items-center justify-content-between">
        <a className="navbar-brand" href="/">
        <img src="/img/GayatriLogo.png" alt="Gayatri Logo" className="img-logo" />
          </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link  " aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/courses">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team">Team</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>  
            <li className="nav-item">
              <Link className="nav-link" to="/review">Review</Link>
            </li> 
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
            {std_email !== null && (
                  <li className="nav-item">
                    <a className="nav-link" href="/userdashboard">User Dashboard</a>
                  </li>
                )}
            <Link to={std_email === null ? "/register" : "#"} className="a">
        <button className="reg-but" onClick={std_email === null ? null : handleLogout}>
          {std_email === null ? "Register" : "Logout"}
        </button>
      </Link>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  </div>
  )
}

export default Navbar
