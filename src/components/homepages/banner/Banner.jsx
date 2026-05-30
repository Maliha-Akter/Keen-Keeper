import React from 'react';
import { FaPlus } from "react-icons/fa6";

const Banner = () => {
    return (
        <div className='my-16 text-center space-y-5 container mx-auto'>
            <h2 className='text-4xl font-bold'>Friends to keep close in your life</h2>
            <p className='text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                relationships that matter most.</p>
            <div className='flex justify-center'>
                <button className='flex items-center text-center bg-[#244D3F] text-white px-4 py-3 rounded-xl font-bold'>
                <FaPlus />
            <span>Add a Friend</span>
            </button>
            </div>
        </div>
    );
};

export default Banner;