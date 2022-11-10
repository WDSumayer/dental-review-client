import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import LimitServices from '../LimitServices/LimitServices';
import Advice from './Advice/Advice';


const Home = () => {
  useTitle('Home')
    return (
       <div>
        <Banner></Banner>
        <LimitServices></LimitServices>
        <Advice></Advice>
       </div>
    );
};

export default Home;