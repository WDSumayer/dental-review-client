import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import LimitServices from '../LimitServices/LimitServices';


const Home = () => {
  useTitle('Home')
    return (
       <div>
        <Banner></Banner>
        <LimitServices></LimitServices>
       </div>
    );
};

export default Home;