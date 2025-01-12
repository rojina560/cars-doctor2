import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Checkout = () => {
    const service = useLoaderData();
    const { title,price , _id} = service;
    const {users} = useContext(AuthContext)
    const handleBookService = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = users?.email;
        const order = {
            customarName: name,
            email,
            date,
            service: _id,
            price: price
        }
        console.log(order);

    }

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

export default Checkout;