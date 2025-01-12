import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServiceCart = ({service}) => {
    const { _id, title, img, price} = service
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
  
    <div className="card-actions flex justify-between items-center">
    <p>price:${price}</p>
      <Link to={`/checkout/${_id}`}><FaArrowRight></FaArrowRight></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCart;




