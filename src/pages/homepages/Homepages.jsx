import React from 'react';
import Banner from '../../components/homepages/banner/Banner';
import CardTracking from '../../components/homepages/card-tracking/CardTracking';
import Friends from '../friends/Friends';

const Homepages = () => {
    return (
        <div>
            <Banner></Banner>
            <CardTracking></CardTracking>
            <Friends></Friends>
        </div>
    );
};

export default Homepages;