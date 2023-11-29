import React from 'react';
import "./Services.css";

const ServicesSection = () => {
    return (
        <section id="services" className="section-bg">
            <div className="container">
                <header className="section-header">
                    <h3>Services</h3>
                    <p>we don’t just talk about integrity, we demonstrate it. Through our work ethics, our behavior towards our
                        employees and our dealings with clients, we stick to our values.</p>
                </header>
                <div className="row">
                    <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
                        <div className="box">
                            <div className="icon" style={{ background: '#fceef3' }}><i className="ion-ios-analytics-outline"
                                style={{ color: '#ff689b' }}></i></div>
                            <h4 className="title"><a href="#">Generative AI Assistant</a></h4>
                            <p className="description">We provide Generative AI-based Assistant that helps industries in various domains
                                like customer support, Website Assistant with Social Media Integration using OpenAI API.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
                        <div className="box">
                            <div className="icon" style={{ background: '#fff0da' }}><i className="ion-ios-bookmarks-outline"
                                style={{ color: '#e98e06' }}></i></div>
                            <h4 className="title"><a href="#">AI Content Generator</a></h4>
                            <p className="description">Helps content creators and writers to think about better content. It aids both digital and business content creators in providing and producing valuable content.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                        <div className="box">
                            <div className="icon" style={{ background: '#e6fdfc' }}><i className="ion-ios-paper-outline"
                                style={{ color: '#3fcdc7' }}></i></div>
                            <h4 className="title"><a href="#">ERP and Software Solution</a></h4>
                            <p className="description">Accounts & Finance Modules, Advance Reporting, HR Module ERP. Automate Corporate Functions With Integrated ERP Software. Modules: Finance, Stock, POS. HRM Software. ERP Software.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                        <div className="box">
                            <div className="icon" style={{ background: '#eafde7' }}><i className="ion-ios-speedometer-outline"
                                style={{ color: '#41cf2e' }}></i></div>
                            <h4 className="title"><a href="#">Whatsapp AI Chatbots</a></h4>
                            <p className="description">Elevate your business with our cutting-edge WhatsApp AI chatbot solutions. Seamlessly engage customers, provide instant support, and automate tasks round the clock. Your success, powered by our innovation.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
                        <div className="box">
                            <div className="icon" style={{ background: '#e1eeff' }}><i className="ion-ios-world-outline"
                                style={{ color: '#2282ff' }}></i></div>
                            <h4 className="title"><a href="#">Website Development</a></h4>
                            <p className="description">Web development solutions providing a bundle of services to boost your brand or business on the internet that opens a door to limitless. We craft dynamic, user-centric websites that captivate visitors and drive conversions.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
                        <div className="box">
                            <div className="icon" style={{ background: '#ecebff' }}><i className="ion-ios-clock-outline"
                                style={{ color: '#8660fe' }}></i></div>
                            <h4 className="title"><a href="#">Outbound Calling Assistant</a></h4>
                            <p className="description">Our AI-powered automation streamlines customer outreach, enhances lead generation, and drives sales growth integrated into your operations, personalize interactions, and business success through advanced technology.</p>
                        </div>
                    </div>
                </div>
            </div>
    </section >
  );
};

export default ServicesSection;
