import React from 'react';
import './Review.css'

const Review = ({review}) => {
    const {img, name, description, date} = review
    return (
        <div>
            <div className='single-reivew'>
                <div className='row g-5'>
                    <div className='col-md-2'>
                    <img src={img} alt=''></img>
                    </div>
                    <div className='col-md-10'>
                    <div className='review-content'>
                    <h6>{name}</h6>
                    <p>{date? date : 'no date'}</p>
                    <p>{description}</p>
                </div>
                    </div>
                </div>
               
               
            </div>
        </div>
    );
};

export default Review;