import React from 'react';
import './Intro.css';
import incubationImg from './img/incubation.jpg';
import nepImg from './img/nep.png';
import nicImg from './img/nic.png';
import slideImg from './img/slide.png';

const IntroSection = () => {
  return (
    <section id="intro" className="clearfix">
      <div className="container d-flex h-100">
        <div className="row justify-content-center align-self-center">
          <div className="col-md-6 intro-info order-md-first order-last">
            <h2>
              AI Automation <br />and <span>Generative AI Chatbots solutions!</span>
            </h2>
            <p style={{ marginTop: '-30px' }}>
              We help businesses to supercharge their sales and leads via AI automations and Chatbot solutions.
            </p>
            <div>
              <img height="60" src={incubationImg} alt="" />
              <img height="60" src={nepImg} alt="" />
              <img style={{ marginLeft: '10px' }} height="60" src={nicImg} alt="" /> <br /><br />
              <a href="#about" className="btn-get-started scrollto">
                Get Started
              </a>
            </div>
          </div>

          <div className="col-md-6 intro-img order-md-last order-first">
            <img src={slideImg} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
