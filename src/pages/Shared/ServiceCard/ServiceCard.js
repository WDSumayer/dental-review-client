import React from 'react';
import './ServiceCard.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {name,_id, img, price, description} = service;

    
    return (
        <div className='col-12 col-md-4'>
            <div className='border p-4'>
                <div className='card-img'>
                    <img src={img} alt=''></img>
                </div>
                <div className='card-content'>
                    <h3 className='pt-3'>{name}</h3>
                    <p>{description.length > 100 ? description.slice(0, 100) + '...' : description}</p>
                   <div className='d-flex justify-content-between align-items-center'>
                   <h6 className='m-0'>Price: $ {price}</h6>
                   <Link to={`/serviceDetails/${_id}`}>
                   <button className='service-btn'>Details<span className='ps-2'><FaLongArrowAltRight></FaLongArrowAltRight></span></button>
                   </Link>
                    
                   </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;