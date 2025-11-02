import React from 'react';
import Banner from '../Components/Banner';

const Home = () => {
    return (
        <div>
        <Banner/>
        <div className='text-center mt-14'>
            <h1 className='text-[48px] font-bold'>Trending Apps</h1>
            <p className='text-[20px] text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
        </div>

        <div>

        </div>

       <div className='w-max mx-auto mt-12 mb-20'>
         <button className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white px-7 py-2 text-[16px] rounded-sm font-semibold hover:cursor-pointer'>Show All</button>
       </div>
        </div>
    );
};

export default Home;