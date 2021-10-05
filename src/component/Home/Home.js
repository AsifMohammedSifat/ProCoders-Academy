import React from 'react';
import HomeHeader from '../HomeHeader/HomeHeader';
import HomeFoot from '../HomeFoot/HomeFoot';
import Main from '../Main/Main';
import './Home.css';

const Home = () => {
    return (
        <div>
            {/* home components  */}
            <HomeHeader></HomeHeader>
            <h1 className="title-style mt-5">Our Services</h1>
            <Main></Main>
            <HomeFoot></HomeFoot>
        </div>
    );
};

export default Home;