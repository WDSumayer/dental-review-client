import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';

const Services = () => {
//    const services = useLoaderData()
    useTitle('Services')
    const [services, setServices] = useState([])
     useEffect(() => {
        fetch('https://dental-review-server.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
     }, [])
   
    return (
        <div className='container'>
            <div className='row g-5'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;