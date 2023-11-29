import React from 'react';
import './Footer.css';
import logo from './img/logo.png';
import incubation from './img/incubation.jpg';
import pitb from './img/PITB.png';
import nep from './img/nep.png';
import nic from './img/nic.png';

const Footer = () => {
  return (
    <footer id="footer" className="section-bg">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            {/* Left column */}
            <div className="col-lg-6">
              {/* Inside left column */}
              <div className="row">
                {/* Inside left column, first part */}
                <div className="col-sm-6">
                  <div className="footer-info">
                    <img height="65" width="140" src={logo} alt="" srcSet="" /><br /><br />
                    <img height="50" src={incubation} alt="" /><br />
                    <img height="50" src={pitb} alt="" />
                    <img height="50" src={nep} alt="" />
                    <img height="50" src={nic} alt="" />
                    <br />
                    <p>Techvio chats is an interactive and captivating software development & digitization agency for all the fields all over the globe.</p>
                  </div>
                </div>

                {/* Inside left column, second part */}
                <div className="col-sm-6">
                  <div className="footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                      <li><a href="#home">Home</a></li>
                      <li><a href="#about">About us</a></li>
                      <li><a href="#services">Services</a></li>
                    </ul>
                  </div>

                  <div className="footer-links">
                    <h4>Contact Us</h4>
                    <p>
                      Main I.I Chadnigarh<br />
                      Road SMI University<br />
                      Karachi, Pakistan <br />
                      <strong>Phone:</strong> +92 345 3191638<br />
                      <strong>Email:</strong> techviochats@gmail.com<br />
                    </p>
                  </div>

                  <div className="social-links">
                    <a href="https://twitter.com/TechvioChats" className="twitter"><i className="fa fa-twitter"></i></a>
                    <a href="https://www.facebook.com/techviochats" className="facebook"><i className="fa fa-facebook"></i></a>
                    <a href="https://www.instagram.com/techviochats/" className="instagram"><i className="fa fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/company/techvio-chats/?viewAsMember=true" className="linkedin"><i className="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="col-lg-6">
      <div className="form">
        <h4>Send us a message</h4>
        <p>Join Our Mailing List To Receive The News & Latest Trends.</p>
        <div className="g-recaptcha" data-sitekey="6LdA5okoAAAAALk9EtFTOeYJsnhpRDGzukkpbp01"></div>
        <form target="_blank" action="" method="post" role="form" className="contactForm">
          <div className="form-group">
            <input type="hidden" name="_next" value="index.html" />
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="Your Name"
              data-rule="minlen:4"
              data-msg="Please enter at least 4 chars"
              required
            />
            <div className="validation"></div>
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Your Email"
              data-rule="email"
              data-msg="Please enter a valid email"
            />
            <div className="validation"></div>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="subject"
              id="subject"
              placeholder="Subject"
              data-rule="minlen:4"
              data-msg="Please enter at least 8 chars of subject"
            />
            <div className="validation"></div>
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              name="message"
              rows="5"
              data-rule="required"
              data-msg="Please write something for us"
              placeholder="Message"
            ></textarea>
            <div className="validation"></div>
          </div>

          <div id="sendmessage">Your message has been sent. Thank you!</div>
          <div id="errormessage"></div>

          <div className="text-center">
            <button name="_next" value="https://techviochats.com/" type="submit" title="Send Message">
              <a style={{ textDecoration: 'none', color: 'white' }}>Send Message</a>
            </button>
          </div>
        </form>
      </div>
    </div>

          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong>TechvioChats</strong>. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
