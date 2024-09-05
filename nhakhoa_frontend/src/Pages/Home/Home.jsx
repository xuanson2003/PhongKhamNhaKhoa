import React from 'react';
import HeroSlider from '~/Components/HeroSlider/HeroSlider';
import Schedule from '~/Components/Schedule/Schedule';
import Feautes from '~/Components/Feautes/Feautes';
import FunFact from '~/Components/FunFact/FunFact';
import Service from '~/Components/Service/Service';
import CallAction from '~/Components/CallAction/CallAction';
import Doctor from '~/Components/Doctor/Doctor';
import Blog from '~/Components/Blog/Blog';

function Home(props) {
    return (
        <>
            <HeroSlider />
            <Schedule />
            <Feautes />
            <FunFact />
            <Service />
            <CallAction />
            <Doctor />
            <Blog />
        </>
    );
}

export default Home;
