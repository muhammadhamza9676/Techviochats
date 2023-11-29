import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section id="call-to-action" className="wow fadeInUp">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 text-center text-lg-left">
            <h3 className="cta-title">Call To Action</h3>
            <p className="cta-text">"Ready to Transform Your Business? Elevate Efficiency and Engagement with TechioChats
              AI Automation Solutions. Experience the Future Today – Streamline Tasks, Boost Productivity, and Enhance
              Customer Experiences. Get in Touch for a Demo!"</p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <a className="cta-btn align-middle" href="https://api.whatsapp.com/send/?phone=%2B923453191638&amp;text&amp;app_absent=0">Call To Action</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
