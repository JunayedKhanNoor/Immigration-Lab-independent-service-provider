import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import CountryList from '../CountryList/CountryList';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <CountryList></CountryList>
        </div>
    );
};

export default Home;