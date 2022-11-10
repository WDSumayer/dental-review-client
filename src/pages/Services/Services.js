import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';

const Services = () => {
   const services = useLoaderData()
    useTitle('Services')
   
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