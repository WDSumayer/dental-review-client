import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import moment from 'moment';
import { toast } from 'react-toastify';

const UpdateReview = () => {
    const prevReview = useLoaderData()
    const [review, setReview] = useState(prevReview)





    const handleReviewUpdate = (e) => {
        e.preventDefault()
        console.log(review)
        fetch(`https://dental-review-server.vercel.app/reviews/${prevReview._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('updated succesfully',{autoClose: 1000})
            }
            console.log(data)
        })
    }
    const handleReviewChange = (e) => {
        const field = e.target.name
        const value = e.target.value;
        const newReview = {...review}
        newReview[field] = value
        setReview(newReview)
    }
//service_name
    return (
        <div style={{height:'100vh'}} className='container'>
            <div className='row'>
                <div className='col-12 col-md-3'></div>
                <div className='col-12 col-md-6'>
                    <div className='pt-5'>
                    <Form onSubmit={handleReviewUpdate}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Service</Form.Label>
        <Form.Control className='py-2' defaultValue={prevReview.service_name} type="text" readOnly />
       
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Email address</Form.Label>
        <Form.Control className='py-2' type="email" defaultValue={prevReview.email} readOnly />
       
      </Form.Group>
      
      <textarea onChange={handleReviewChange} name="description" id="" className='w-100 p-3' defaultValue={prevReview.description} rows='10' placeholder='Write your review' required></textarea>
     
      <Button variant="primary" className='w-100 py-2' type="submit">
        Update
      </Button>
      
    </Form>
                    </div>
                </div>
                <div className='col-12 col-md-3'></div>
            </div>
        </div>
    );
};

export default UpdateReview;