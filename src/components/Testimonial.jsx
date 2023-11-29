import React from 'react';
import './Testimonial.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Testimonial1Image from './img/testimonial-1.jpg';
import Testimonial2Image from './img/testimonial-2.jpg';
import Testimonial3Image from './img/testimonial-3.jpg';
import Testimonial4Image from './img/testimonial-4.jpg';
import Testimonial5Image from './img/testimonial-5.jpg';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const testimonialData = [
    {
      img: Testimonial1Image,
      name: 'Oma Alexander',
      role: 'CEO & Founder at Themisapp',
      quote:
        'Hammad is absolutely amazing at what he does. I could not have asked for more...',
    },
    {
      img: Testimonial2Image,
      name: 'Brandon Rodrigez',
      role: 'Gamer & Youtuber',
      quote:
        'When I looked for someone to build a messenger bot, I was really worried that I wouldn’t be able to find someone who could deliver on what I needed...',
    },
    {
      img: Testimonial3Image,
      name: 'Mark Jedidaiah',
      role: 'Construction Team Manager',
      quote:
        'Wonderful experience with this seller. Awesome service and always willing to entertain any questions with a smile...',
    },
    {
      img: Testimonial4Image,
      name: 'Naomisu',
      role: 'Lead Generation Consultant',
      quote:
        'He works fast and has good skills to know what to do, how to solve problems, responds very quickly...',
    },
    {
      img: Testimonial5Image,
      name: 'Shaogangchen',
      role: 'CRM Software Architecturer',
      quote:
        'Excellent work, very punctual and ambitious, definitely going to use. Thanks again...',
    },
  ];
  
  return (
    <section id="testimonials">
      <div className="container">
        <header className="section-header">
          <h3>Testimonials</h3>
        </header>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <Slider {...settings}>
          {testimonialData.map((testimonial, index) => (
            <div className="testimonial-item" key={index}>
              <img src={testimonial.img} className="testimonial-img" style={{borderRadius: '50%'}}alt="" />
              <h3>{testimonial.name}</h3>
              <h4>{testimonial.role}</h4>
              <p>{testimonial.quote}</p>
            </div>
          ))}
        </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
