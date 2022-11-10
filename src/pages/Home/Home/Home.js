import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import LimitServices from '../LimitServices/LimitServices';
import Advice from './Advice/Advice';
import Specialities from './Specialities/Specialities'


const Home = () => {
  useTitle('Home')
    return (
       <div>
        <Banner></Banner>
        <Advice></Advice>
        <LimitServices></LimitServices>
        <Specialities></Specialities>
       </div>
    );
};

export default Home;