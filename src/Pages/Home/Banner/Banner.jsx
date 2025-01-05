import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={img1}
      className="w-full" />
       <div className="absolute  flex items-center h-full  top-0 left-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
     <div className='text-white  space-y-8 pl-8 w-1/3  '>
      <h1 className='text-5xl '>Affordable  Price For Car Servicing</h1>
      <p>there are many variations of passage of available,  but the <br />majority have suffered alteration in some forms</p>
      <div className=' bg-gray-800'>
      <button className="btn btn-active btn-primary mr-5">Primary</button>
      <button className="btn btn-active btn-secondary">Secondary</button>
      </div>
     </div>
    </div>
    <div className="absolute left-5 right-5  flex -translate-y-1/2 transform justify-end bottom-0">
      <a href="#slide4" className="btn btn-circle mr-6">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
   
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={img2}
      className="w-full" />
       <div className="absolute  flex items-center h-full  top-0 left-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
     <div className='text-white  space-y-8 pl-12 w-1/3 '>
      <h1 className='text-5xl'>Affordable  Price For Car Servicing</h1>
      <p>there are many variations of passage of available,  but the <br />majority have suffered alteration in some forms</p>
      <div className=''>
      <button className="btn btn-active btn-primary mr-5">Primary</button>
      <button className="btn btn-active btn-secondary">Secondary</button>
      </div>
     </div>
    </div>
    <div className="absolute left-5 right-5  flex -translate-y-1/2 transform justify-end bottom-0">
      <a href="#slide1" className="btn btn-circle mr-6">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={img3}
      className="w-full" />
       <div className="absolute  flex items-center h-full  top-0 left-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
     <div className='text-white  space-y-8 pl-12 w-1/3  '>
      <h1 className='text-5xl w-1/3'>Affordable  Price For Car Servicing</h1>
      <p>there are many variations of passage of available,  but the <br />majority have suffered alteration in some forms</p>
      <div className=''>
      <button className="btn btn-active btn-primary mr-5">Primary</button>
      <button className="btn btn-active btn-secondary">Secondary</button>
      </div>
     </div>
    </div>
    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
      <a href="#slide2" className="btn btn-circle mr-6">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={img4}
      className="w-full" />
       <div className="absolute  flex items-center h-full  top-0 left-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
     <div className='text-white  space-y-8 pl-12 w-1/3 '>
      <h1 className='text-5xl '>Affordable  Price For Car Servicing</h1>
      <p>there are many variations of passage of available,  but the <br />majority have suffered alteration in some forms</p>
      <div className=''>
      <button className="btn btn-active btn-primary mr-5">Primary</button>
      <button className="btn btn-active btn-secondary">Secondary</button>
      </div>
     </div>
    </div>
    <div className="absolute left-5 right-5  bottom-0 flex -translate-y-1/2 transform justify-end">
      <a href="#slide3" className="btn btn-circle mr-6">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;