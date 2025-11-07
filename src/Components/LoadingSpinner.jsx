import React from 'react';
import logoImg from '../assets/logo.png'

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center h-100 '>
            <p className='text-5xl font-bold flex items-center'>L<span><img className='h-12 w-12 animate-spin ' src={logoImg} alt="" /></span>ADING</p>
        </div>
    );
};

export default LoadingSpinner;