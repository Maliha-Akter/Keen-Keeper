import React from 'react';

const CardTracking = () => {
    return (
        <div className='container mx-auto lg:flex justify-evenly items-center space-y-4 '>
            <div className='text-center space-y-2 rounded-xl p-14 shadow-lg hover:shadow-xl transition'>
                <h2 className='font-bold text-3xl'>10</h2>
                <p className='text-2xl'>Total Friends</p>
            </div>
            <div className='text-center space-y-2 rounded-xl p-14 shadow-lg hover:shadow-xl transition'>
                <h2 className='font-bold text-3xl'>3</h2>
                <p className='text-2xl'>On Track</p>
            </div>
            <div className='text-center space-y-2 rounded-xl p-14 shadow-lg hover:shadow-xl transition'>
                <h2 className='font-bold text-3xl'>6</h2>
                <p className='text-2xl'>Need Attention</p>
            </div>
            <div className='text-center space-y-2 rounded-xl p-14 shadow-lg hover:shadow-xl transition'>
                <h2 className='font-bold text-3xl'>12</h2>
                <p className='text-2xl'>Interactions This Month</p>
            </div>
        </div>
    );
};

export default CardTracking;