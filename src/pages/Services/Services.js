import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';

const Services = () => {
   const services = useLoaderData()

   
    return (
        <div className='container'>
            <div className='row'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;