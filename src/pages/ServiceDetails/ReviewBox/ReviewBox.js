import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Review from '../Review/Review';
import './ReviewBox.css'

const ReviewBox = ({_id, add}) => {

    const [reviews, setReviwes] = useState([])

    useEffect(() => {
        fetch(`https://dental-review-server.vercel.app/reviewsById?id=${_id}`)
        .then(res => res.json())
        .then(data => {
        setReviwes(data)
        if(data.acknowledged === true){
           
        }
       console.log(reviews)
        })
    }, [_id,add])
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