import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyReview from './MyReview';

const MyReviews = () => {
    const{user} = useContext(AuthContext)
    const [myreviews, setMyReviews] = useState([])
    useTitle('My Reviews')


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
                if(data.deletedCount > 0){
                    toast.success('Your review deleted successfully.', {autoClose: 1000})
                }
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
                <h1 className='text-center pt-5'>You didn't add any review of any service.</h1>
            }
            </div>
          
        </div>
    );
};

export default MyReviews;