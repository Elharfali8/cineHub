import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom'

const PageLinks = ({title, link, linkPath,child}) => {
  return (
      <div className='flex items-center gap-x-2'>
          <Link to='/' className='text-lg lg:text-xl'>
                Home
          </Link>
          <span>
              <FaAngleRight size={23} />
          </span>
          {link ? (
              <Link to={`${linkPath}`} className='text-lg lg:text-xl capitalize'>
                    {title}
               </Link>
          ) : (
            <h3 className='text-lg lg:text-xl capitalize'>
                    {title}
            </h3>
      )}
      {child && (
        <div className="flex items-center gap-x-2">
          <span>
        <FaAngleRight size={23} />
    </span>
        <h3 className='text-lg lg:text-xl capitalize'>
                {child}
        </h3>
        </div>
      )}
    </div>
  )
}

export default PageLinks