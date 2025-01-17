import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { image } from '../utils/data';

const MediaCard = ({ type, id, title, name, backdrop_path, media_type }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  return (
    <Link to={`/${type || media_type}/${id}`} className='bg-[#1F1B24] rounded-lg transition-all ease-in-out duration-150 hover:scale-105 overflow-hidden'>
      <img src={`${image}${backdrop_path}`} alt={title || name} />
      <div className='p-2'>
        <h3 className='text-lg xl:text-xl font-semibold'>{title || name}</h3>
      </div>
    </Link>
  );
};

export default MediaCard;
