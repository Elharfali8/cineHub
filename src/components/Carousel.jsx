// src/Carousel.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../carousel.css';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { image } from '../utils/data';
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Carousel = ({ data, type }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);

  

  // Function to update itemsToShow based on window width
  const updateItemsToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) {
      setItemsToShow(4); // Desktop
    } else if (screenWidth >= 992) {
      setItemsToShow(3); // Tablet
    } else if (screenWidth >= 768) {
      setItemsToShow(2); // Medium
    } else {
      setItemsToShow(1); // Small
    }
  };

  useEffect(() => {
    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data?.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data?.length) % data?.length);
  };

  return (
    <div className="main-carousel">
      <div className="main-carousel-items" style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}>
        {data?.map((item) => {
          const {backdrop_path, title, name, id, release_date, vote_average, first_air_date} = item
          
          return (
            <motion.div
            key={id}
            className="main-carousel-item"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ flex: `0 0 calc(100% / ${itemsToShow})` }}
          >
              <Link to={`/${type}/${id}`} className='shadow-lg rounded-lg pb-1 '>
                <img src={`${image}${backdrop_path}`} alt={title || name} />
                <div className='pt-2 px-2 flex items-center justify-between'>
                  <div>
                    <h3 className='main-color   text-lg lg:text-xl tracking-wide poppins-medium '>{title || name}</h3>
                    <p className='text-lg secondary-color'>
                      release date : {' '}
                      <span>{release_date || first_air_date}</span>
                    </p>
                  </div>
                  <div className='flex gap-x-1 text-lg items-center poppins-medium text-[#E57C23]'>
                    <span>{vote_average.toFixed(1)}</span>
                      <span><FaStar size={20} /></span>
                  </div>
                </div>
            </Link>
          </motion.div>
          )
        })}
      </div>
      <button className="prev-button" onClick={prevSlide}><FaAngleLeft size={27} /></button>
      <button className="next-button" onClick={nextSlide}><FaAngleRight size={27} /></button>
    </div>
  );
};

export default Carousel;
