import React from 'react';
import './WhyUs.css';
import img from './img/why-us.jpg';

const WhyUsSection = () => {
  return (
    <section id="why-us" className="wow fadeIn">
      <div className="container-fluid">
        <header className="section-header">
          <h3>Why choose us?</h3>
          <p>We believe people should work in an environment that empowers and inspires them.</p>
        </header>
        <div className="row">
          <div className="col-lg-6">
            <div className="why-us-img">
              <img src={img} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="why-us-content">
              <p>
                We believe in our clients and our strength lies in developing close working relationships to help them
                succeed. This enables us to create, and deliver, value at every stage of our clients’ journey.
              </p>
              <p>
                We foster a work environment where people can communicate openly and encourage feedback to help us learn
                and grow. We believe people should work in an environment that empowers and inspires them.
              </p>
              <div className="features wow bounceInUp clearfix">
                <i className="fa fa-diamond" style={{ color: '#f058dc' }}></i>
                <h4>Build once, Deploy on Multiple</h4>
                <p>Build once, Deploy on Multiple' approach. Craft tailored AI solutions that seamlessly adapt to
                  various platforms and applications. Whether it's chatbots, data analysis, or customer engagement, our
                  strategy ensures efficient development and easy deployment across multiple touchpoints, maximizing
                  your AI investment and accelerating your business growth.</p>
              </div>
              <div className="features wow bounceInUp clearfix">
                <i className="fa fa-object-group" style={{ color: '#ffb774' }}></i>
                <h4>24/7 Active</h4>
                <p>Our AI-driven systems are tirelessly at work around the clock, providing uninterrupted customer
                  support, real-time insights, and instant responses. With AI handling tasks day and night, you can
                  enhance customer satisfaction, optimize operations, and unlock new levels of efficiency that drive
                  your business forward.</p>
              </div>
              <div className="features wow bounceInUp clearfix">
                <i className="fa fa-language" style={{ color: '#589af1' }}></i>
                <h4>Multilingual Support</h4>
                <p>Our advanced AI technology enables seamless communication in multiple languages, delivering
                  personalized interactions and exceptional customer experiences. Expand your global reach, engage
                  diverse audiences, and foster connections with AI-driven multilingual capabilities that set your
                  business apart.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row counters">
          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">124</span>
            <p>Clients</p>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">56</span>
            <p>Projects</p>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">10</span>
            <p>Own SaaS product</p>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">11</span>
            <p>Hard Workers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
