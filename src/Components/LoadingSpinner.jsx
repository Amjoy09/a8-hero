import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center h-100 '>
            <p className='text-4xl font-bold animate-spin '>LOADING</p>
        </div>
    );
};

export default LoadingSpinner;