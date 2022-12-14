import React from 'react';
import Chair from '../../assets/images/chair.png';

const Banner = () => {
    return (
        <div class="hero min-h-screen px-12">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={Chair} class="max-w-sm rounded-lg shadow-2xl" />
                <div className=''>
                    <h1 class="text-5xl font-bold">Your New smile start here</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Get Started</button>
                </div>
            </div>
        </div>);
};

export default Banner;