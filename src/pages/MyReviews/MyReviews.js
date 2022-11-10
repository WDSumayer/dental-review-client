import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyReview from './MyReview';

const MyReviews = () => {
    const{user, logOut} = useContext(AuthContext)
    const [myreviews, setMyReviews] = useState([])
    useTitle('My Reviews')
    

    useEffect(() => {
        fetch(`https://dental-review-server.vercel.app/reviewsByEmail?email=${user?.email}`, {
            headers: {
                authorization : `Bearer ${localStorage.getItem('dent-token')}`
              }
        })
        .then(res => {
            if(res.status === 401 || res.status === 403){
                return logOut()
              }
             return res.json()
        })
        .then(data => setMyReviews(data))
        
    } , [user?.email, logOut])


    const handleDeleteReview = (id) => {
        const proceed = window.confirm('Do you want to delete this?')
        if(proceed){
            fetch(`https://dental-review-server.vercel.app/reviews/${id}`, {
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
       <div style={{height:'100vh'}}>
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
       </div>
    );
};

export default MyReviews;