import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>
      <footer id="footer" className="footer mt-5" data-aos="fade-up">


<div className="footer-top">
  <div className="container">
    <div className="row gy-4">
      <div className="col-lg-5 col-md-12 footer-info">
        <a href="index" className="logo d-flex align-items-center">
          <img src="img/GayatriLogo.png" alt=""/>
        </a>
        <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies
          darta donna mare fermentum iaculis eu non diam phasellus.</p>
        <div className="social-links mt-3">
          <Link to="#" className="twitter"><i className="bi bi-twitter"></i></Link>
          <Link to="#" className="facebook"><i className="bi bi-facebook"></i></Link>
          <Link to="#" className="instagram"><i className="bi bi-instagram"></i></Link>
          <Link to="#" className="linkedin"><i className="bi bi-linkedin"></i></Link>
        </div>
      </div>

      <div className="col-lg-2 col-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><i className="bi bi-chevron-right"></i> <Link to="/">Home</Link></li>
          <li><i className="bi bi-chevron-right"></i> <Link to="/courses">Courses</Link></li>
          <li><i className="bi bi-chevron-right"></i> <Link to="/services">Services</Link></li>
          <li><i className="bi bi-chevron-right"></i> <Link to="/team">Team</Link></li>
          <li><i className="bi bi-chevron-right"></i> <Link to="/review">Review  </Link></li>
        </ul>
      </div>

      <div className="col-lg-2 col-6 footer-links">
        <h4>Our Blogs</h4>
        <ul>
          <li><i className="bi bi-chevron-right"></i> <Link to="#">Web Design</Link></li>
          <li><i className="bi bi-chevron-right"></i> <Link to="#">Web Development</Link></li>
          <li><i className="bi bi-chevron-right"></i> <Link to="#">Product Management</Link></li>
          <li><i className="bi bi-chevron-right"></i> <Link to="#">Marketing</Link></li>
          <li><i className="bi bi-chevron-right"></i> <Link to="#">Graphic Design</Link></li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
        <h4>Contact Us</h4>
        <p>
          9/4, Shri Markendaya Yantramag Dharak Society, Near New WIT College, Next to Upahar Bakery lane, Solapur -
          413006.<br/>
          <strong>Phone:</strong> +91 9823140574 <br/>
          <strong>Email:</strong> info@vertextechnosys.com<br/>
        </p>

      </div>

    </div>
  </div>
  <div className="container">
    <div className="copyright">
      Copyright © 2024. All rights reserved
    </div>
    <div className="credits">
      Design & Developed by <a href="https://www.vertextechnosys.com/"> Vertex Technosys</a>
    </div>
  </div>
</div>
</footer>
    </div>
  )
}

export default Footer