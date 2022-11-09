import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './ReviewBox.css'

const ReviewBox = ({service}) => {

    const [reviews, setReviwes] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => {
            const addReviews = data.filter(review => review.service_id === service._id )
            setReviwes(addReviews)
            console.log(reviews)
        })
    }, [reviews, service._id])
    return (
        <div>
            { reviews.length > 0 ?
                reviews.map(review => <Review key={review._id} review={review}></Review>)
                :
                <h1>there is no review</h1>
            }
        </div>
    );
};

export default ReviewBox;