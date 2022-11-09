import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyReviews = () => {
    const{user} = useContext(AuthContext)
    const [myreviews, setMyReviews] = useState([])



    useEffect(() => {
        fetch(`http://localhost:5000/reviewsByEmail?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setMyReviews(data))
        
    } , [user?.email])
    return (
        <div>
            {
                myreviews.map(myreview => <p>{myreview.service_name}</p>)
            }
        </div>
    );
};

export default MyReviews;