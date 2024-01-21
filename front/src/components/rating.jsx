import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import '../style/index.css'

/* The parameter is prop, one is actual rating like 4,5 star and text is that is displayed next to it .*/ 
const Rating = ({actualRating,text}) => {
  return (
    <div className='rating'>
        <span>
            {actualRating >= 1 ? <FaStar/> : actualRating>=0.5 ? <FaStarHalfAlt/>: <FaRegStar/>}
            {/*If ar is greater than or equal to1 than fasar, else if , and else */}
        </span>

        <span>
            {actualRating >= 2 ? <FaStar/> : actualRating>=1.5 ? <FaStarHalfAlt/>: <FaRegStar/>}
            {/*If ar is greater than or equal to1 than fasar, else if , and else */}
        </span>

        <span>
            {actualRating >= 3 ? <FaStar/> : actualRating>=2.5 ? <FaStarHalfAlt/>: <FaRegStar/>}
            {/*If ar is greater than or equal to1 than fasar, else if , and else */}
        </span>
        <span>
            {actualRating >= 4 ? <FaStar/> : actualRating>=3.5 ? <FaStarHalfAlt/>: <FaRegStar/>}
            {/*If ar is greater than or equal to1 than fasar, else if , and else */}
        </span>

        <span>
            {actualRating >= 5 ? <FaStar/> : actualRating>=4.5 ? <FaStarHalfAlt/>: <FaRegStar/>}
            {/*If ar is greater than or equal to1 than fasar, else if , and else */}
        </span>
        <span className="rating-text">{text && text}</span>
    </div>
  )
}

export default Rating;

