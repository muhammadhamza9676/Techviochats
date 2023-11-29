import React from 'react';
import Slider from 'react-slick';
import './Clients.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import client1 from './img/clients/client-1.png';
import client2 from './img/clients/client-2.png';
import client3 from './img/clients/client-3.png';
import client4 from './img/clients/client-4.png';
import client5 from './img/clients/client-5.png';
import client6 from './img/clients/client-6.png';
import client7 from './img/clients/client-7.png';
import client8 from './img/clients/client-8.png';

const ClientsSection = () => {
  const clients = [client1, client2, client3, client4, client5, client6, client7, client8];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    // ],
  };

  return (
    <section id="clients" className="wow fadeInUp">
      <div className="container">
        <header className="section-header">
          <h3>Our Clients</h3>
        </header>
        <Slider {...settings}>
          {clients.map((client, index) => (
            <div key={index}>
              <img src={client} alt={`Client ${index + 1}`} style={{ borderRadius: 'none', height: '80px'}} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ClientsSection;
