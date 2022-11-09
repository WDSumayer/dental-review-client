import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReview from './MyReview';

const MyReviews = () => {
    const{user} = useContext(AuthContext)
    const [myreviews, setMyReviews] = useState([])



    useEffect(() => {
        fetch(`http://localhost:5000/reviewsByEmail?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setMyReviews(data))
        
    } , [user?.email])


    const handleDeleteReview = (id) => {
        const proceed = window.confirm('Do you want to delete this?')
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = myreviews.filter(myreview => myreview._id !== id)
                setMyReviews(remaining)
            })
        }
    }
    return (
        <div className='container py-5'>
            <div className='row g-5'>
            {
                myreviews.length > 0 ?
                myreviews.map(myreview => <MyReview key={myreview._id} myreview={myreview} handleDeleteReview={handleDeleteReview}></MyReview>)
                :
                <h1>You didn't add any review of any service.</h1>
            }
            </div>
          
        </div>
    );
};

export default MyReviews;