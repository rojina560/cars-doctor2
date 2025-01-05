import React from 'react';
import persons from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className='lg: w-1/2 relative'>
          <img
            src={persons}
            className="w-3/4 rounded-lg shadow-2xl " />
          <img
            src={parts}
            className=" w-1/2 border-8 border-white rounded-lg shadow-2xl absolute top-1/2 right-5 " />
          </div>
          <div className='lg: w-1/2 space-y-5'>
          <h2 className='text-3xl font-semibold text-orange-800'>About Us</h2>
            <h1 className="text-5xl font-bold">we are qualified and of <br />
            experiance in this filed</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum temporibus aspernatur placeat, voluptatibus et dolores dignissimos voluptate culpa illo hic neque consequatur cumque quam aliquid a doloribus quos minima nisi.</p>
            <button className="btn bg-blue-900 text-white">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;