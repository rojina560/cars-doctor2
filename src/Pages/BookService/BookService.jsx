import React from 'react';
import { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';


const BookService = () => {
    const { id } = useParams();
    const service = useLoaderData();
    
    const { title,price , _id,img} = service || {}
    const {users} = useContext(AuthContext)

    console.log("Service ID from URL:", id);
    const handleBookService = e => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const date = form.date.value;
      const email = users?.email;
  
      if (!email) {
          console.error("User email is missing!");
          return;
      }
  
      const booking = {
          customarName: name,
          email,
          date,
          img,
          service: title,
          service_id: _id,
          price
      };
  
      fetch('http://localhost:5000/bookings', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(booking)
      })
          .then(res => res.json())
          .then(data => console.log("Booking data:", data))
          // .catch(err => console.error("Error booking service:", err));
          if(data.insertedId){
            alert('service book successfully')

          };
  };
  
    return (
        <div>
        <h2>Book Services:{title}</h2>
        <form onSubmit={handleBookService}>
            <div className='grid grid-flow-col-1 md:grid-cols-2 gap-6'> 
            <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input name='name' type="text" defaultValue={users?.displayName} placeholder="name" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span  className="label-text">Email</span>
      </label>
      <input  type="email" defaultValue={users?.email} placeholder="email" className="input input-bordered" required />
      
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Date</span>
      </label>
      <input name='date' type="date" placeholder="date" className="input input-bordered" required />
      
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Due amount</span>
      </label>
      <input type="text" defaultValue={'$' + price} className="input input-bordered" required />
      
    </div>
            </div>
            <div className="form-control mt-6">
      
      <input type="submit"  className='btn bg-orange-600 btn-block' value={'order confirm'}/>
    </div>
        </form>
    </div>
    );
};

export default BookService;