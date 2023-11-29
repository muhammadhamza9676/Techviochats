import React from 'react';
import './Team.css';
import team1Image from './img/team-1.jpg';
import team2Image from './img/team-2.jpg';
import team3Image from './img/team-3.jpg';
import team4Image from './img/team-4.jpg';
import team5Image from './img/team-5.jpg';
import team6Image from './img/team-6.jpg';
import team7Image from './img/team-7.jpg';
import team8Image from './img/team-8.jpg';


const TeamSection = () => {
    return (
        <section id="team" className="section-bg">
            <div className="container">
                <div className="section-header">
                    <h3>Our Team</h3>
                    <p>Our aim is to convert the leads into customers, making the business grow and succeed.</p>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-6 wow fadeInUp">
                        <div className="member">
                            <img height="220" src={team1Image} className="img-fluid" alt="Team Member 1" />
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Hammad Sheikh</h4>
                                    <span>Founder & CEO</span>
                                    <div className="social">
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="https://www.facebook.com/techviochats"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="member">
                            <img src={team2Image} className="img-fluid" alt="Team Member 2" />
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Rayyan Zain</h4>
                                    <span>CMO</span>
                                    <div className="social">
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="member">
                            <img style={{ minHeight: "80px", width: "235px" }} src={team3Image} className="img-fluid" alt="Team Member 3" />
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Obaid Muneer</h4>
                                    <span>AI Automation Manager</span>
                                    <div className="social">
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="member">
                            <img src={team4Image} className="img-fluid" alt="Team Member 4" />
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Anus Nadeem</h4>
                                    <span>Creative Designer</span>
                                    <div className="social">
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="member">
                            <img height="220" src={team5Image} className="img-fluid" alt="Team Member 5" />
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Jawad Ali</h4>
                                    <span>MERN Stack Developer</span>
                                    <div className="social">
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="member">
                            <img src={team6Image} className="img-fluid" alt="Team Member 6" />
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Areeba Khan</h4>
                                    <span>React Developer</span>
                                    <div className="social">
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="member">
                            <img src={team7Image} className="img-fluid" alt="Team Member 7" />
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Sindhya Devi</h4>
                                    <span>Marketing Assistant</span>
                                    <div className="social">
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="member">
                            <img src={team8Image} className="img-fluid" alt="Team Member 8" />
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Rasib Ahmed</h4>
                                    <span>UI UX Designer</span>
                                    <div className="social">
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </section>
    );
};

export default TeamSection;
