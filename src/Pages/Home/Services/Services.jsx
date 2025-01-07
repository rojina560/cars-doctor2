import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';



const Services = () => {
    const [services , setServices] = useState([])

    useEffect( ()=>{
        fetch('servicees.json')
        .then(res=>res.json())
        .then(data => setServices(data))
    },
        [])
        console.log(services);
    return (
        <div className='mt-4'>
            <div className='text-center'>
                <h3 className='text-3xl text-orange-600'> Servieces</h3>
                <h2 className='text-5xl'>Our Services Area</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni officia tenetur iure ducimus perspiciatis <br />illum numquam quasi cupiditate iste facere.</p>
            </div>
            <p>{services.length}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.map(service =><ServiceCart key={service._id} service={service}> </ServiceCart>)
                }
             
            </div>
            <div className='text-center my-6 '>  <button className='btn bg-orange-600 text-white text-2xl'> See More</button></div>
        </div>
    );
};

export default Services;