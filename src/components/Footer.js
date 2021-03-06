import React from 'react'
import { FaAngleUp } from 'react-icons/fa'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <section className="w3l-footer">
  <footer className="footer-28">
    <div className="footer-bg-layer">
      <div className="container py-lg-3">
        <div className="row footer-top-28">
          <div className="col-lg-5 footer-list-28 mt-5">
            <h6 className="footer-title-28">Contact information</h6>
            <ul>
              <li>
                <p><strong>Address</strong> : 59 Bakasi road Kurudu, Abuja, Nigeria </p>
              </li>
              <li>
                <p><strong>Phone</strong> : <a href="tel:+2348101111792">+2348101111792</a></p>
              </li>
              <li>
                <p><strong>Email</strong> : <a href="info@blockmec.org">info@blockmec.org </a></p>
                <p><strong>Support</strong> : <a href="support@blockmec.org">support@blockmec.org</a></p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7">
            <div className="row">
              <div className="col-sm-4 col-6 footer-list-28 mt-5">
                <h6 className="footer-title-28">Company</h6>
                <ul>
                  <li><Link to="/about">About Company</Link></li>
                  <li><a href="#">Latest Blog Posts</a></li>
                  <li><Link to="/services">Our Services</Link></li>
                  <li><a href="#">Job Opportunities</a></li>
                </ul>
              </div>
              <div className="col-sm-4 col-6 footer-list-28 mt-5">
                <h6 className="footer-title-28">Quick Links</h6>
                <ul>
                  <li><a href="contact.html">Get in touch</a></li>
                  <li><a href="#">Create account</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Site Feedack</a></li>
                </ul>
              </div>
              <div className="col-sm-4 footer-list-28 mt-5">
                <h6 className="footer-title-28">Categories</h6>
                <ul>
                  <li><a href="#URL">Creative tech</a></li>
                  <li><a href="#URL">General info</a></li>
                  <li><a href="#URL">Valuable Insights</a></li>
                  <li><a href="#URL">Our events</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="midd-footer-28 align-center py-4 mt-5">
        <div className="container">
          <p className="copy-footer-28 text-center"> &copy; 2022 <Link to="/">Blockmec Technology</Link>. All Rights Reserved. </p>
        </div>
      </div>
    </div>
    {/* <!-- move top --> */}
    <button id="movetop" title="Go to top">
      <span className="fa"><FaAngleUp /></span>
    </button>
    
    {/* <!-- /move top --> */}
  </footer>
  </section>
  )
}

export default Footer