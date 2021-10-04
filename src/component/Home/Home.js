import React from 'react';
import Head from '../Head/Head';
import Main from '../Main/Main';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Head></Head>
            <h1 className="title-style mt-5">Our Services</h1>
            <Main></Main>
        </div>
    );
};

export default Home;