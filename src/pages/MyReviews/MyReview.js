import React from 'react';
import './MyReview.css'

const MyReview = ({myreview, handleDeleteReview}) => {
    const {_id, name,service_name,description, date, photoURL:img} = myreview 
    return (
        <div className='col-12 col-md-6'>
            <div className='myreview-box'>
                <div className='d-flex align-items-center'>
                    <img style={{width:'51px', height:'51px', borderRadius:'50%',marginRight:'15px'}} src={img} alt=''></img>
                   <div>
                   <p className='m-0 fs-6 fw-bold'>{name}</p>
                    <p className='m-0'><small>{date}</small></p>
                   </div>
                </div>
                <div className='py-3'>
                    <h5>{service_name}</h5>
                    <p>{description}</p>
                    
                </div>
                <div className='d-flex justify-content-end'>
                    <button onClick={() => handleDeleteReview(_id)} className='btn btn-primary py-2 px-4 border-0 rounded-1 fs-6'>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default MyReview;