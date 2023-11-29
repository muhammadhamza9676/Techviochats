import React, { useEffect } from 'react';
import './ToTop.css';

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

const ScrollToTop = () => {
  useEffect(() => {
    const handleScroll = () => {
      const backToTopBtn = document.querySelector('.back-to-top');
      if (backToTopBtn) {
        if (window.scrollY > 100) {
          backToTopBtn.style.display = 'block';
        } else {
          backToTopBtn.style.display = 'none';
        }
      }
    };

    

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a href="#" className="back-to-top" onClick={()=>scrollToTop}><i className="fa fa-chevron-up"></i></a>
  );
};

export default ScrollToTop;
