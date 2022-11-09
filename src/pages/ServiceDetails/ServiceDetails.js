import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewBox from './ReviewBox/ReviewBox';
import moment from 'moment';
import './ServiceDetails.css'
import { toast } from 'react-toastify';

const ServiceDetails = () => {
    const {user} = useContext(AuthContext)
    const service = useLoaderData()
    const {_id, name, img, description, price } = service;
    

    const handleReview = (e) => {
       e.preventDefault()
       
       const form = e.target;
       const message = form.message.value;
       const review = {
        service_id: _id,
        service_name: name,
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        email: user.email,
        name: user.displayName,
        photoURL: user.photoURL,
        description: message
       }
       console.log(review)
       fetch('http://localhost:5000/reviews', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(review)
       })
       .then(res => res.json())
       .then(data => {
        if(data.acknowledged){
            form.reset()
            toast.success('Congratulation, you are right!!!', {autoClose: 1000})
            
        }
        console.log(data)
       })
       .catch(error => console.log(error))

      
        fetch(`http://localhost:5000/reviewsById?id=${_id}`)
        .then(res => res.json())
        .then(data => {
        
       
        })
    

    }

    
    return (
        <div className='service-detail-area py-5'>
            <div className='container'>
                <div className='service-details pb-5'>
                    <div className="card p-4 rounded-0 mb-3">
                        <div className="row g-4 d-flex align-items-center">
                            <div className="col-md-4">
                                <img src={img} className="img-fluid" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{name}</h5>
                                    <p className="card-text">{description}</p>
                                    <h6>Price: $ {price}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                   

                </div>

                <div>
                   <div className='row'>
                  
                    <div className='col-md-7'>
                       <div className='others px-3 py-5'>
                         <ReviewBox _id={_id}></ReviewBox>
                       </div>
                    </div>
                    <div className='col-md-5'>
                   <h5>What is you opinion about this servcie?</h5>
                    <p>Your opinion is very important to us.</p>
                    <form onSubmit={handleReview}>
                        <textarea name="message" id="" className='w-100 p-3' rows='10' placeholder='Write your review' required></textarea>
                       
                       <p> <button className='btn btn-primary rounded-1 py-2 px-3 fs-6' type='submit'>Add review</button></p>
                    </form>
                    </div>
                   
                   </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;