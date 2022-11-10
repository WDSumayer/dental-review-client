import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';

const LimitServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://dental-review-server.vercel.app/limitServices')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
       <div className='py-5'>
         <div className='container'>
            <h2 className='mb-4'>Services</h2>
        <div className='row g-5'>
         {
             services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
         }
        </div>
       <div className='d-flex justify-content-center'><Link to='/services'> <button className='btn mt-5 border rounded-1 py-3 px-5 fs-5 text-dark bg-white'>See All</button></Link></div>
       
     </div>
       </div>
    );
};

export default LimitServices;