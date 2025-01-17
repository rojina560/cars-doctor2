import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useEffect } from 'react';
import BookingRow from './BookingRow';

const Bookings = () => {
    const {users} = useContext(AuthContext)
    const [ bookings, setBookings] = useState([])
    
    useEffect(()=>{
        fetch(`http://localhost:5000/bookings?email=${users.email}`)
        .then(res => res.json())
        .then(data => setBookings(data))

    },[])
   
    const handleDelete =(id) =>{
        const proceed = confirm('Are you sure you  want to delete')
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`,{
                method: 'DELETE'
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount > 0){
                    alert('deleted successfully')
                    const remaining = bookings.filter(booking  => booking._id !==id)
                    setBookings(remaining)
                }
            })
        }
    }
    const handleConfirm = id => {
        // Find the booking by ID
        const bookingToUpdate = bookings.find(booking => booking._id === id);
        
        // Check if the status is already 'confirm', no need to update
        if (bookingToUpdate.status === 'confirm') {
            console.log("Booking is already confirmed.");
            return;  // Prevent sending the PUT request if it's already confirmed
        }
    
        // Proceed with the PUT request if not already confirmed
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                // Update the booking state on the client side
                const updatedBookings = bookings.map(booking => 
                    booking._id === id ? { ...booking, status: 'confirm' } : booking
                );
                setBookings(updatedBookings);
            } else {
                console.log("No modifications made.");
            }
        })
        .catch(err => console.error('Error updating status:', err));
    };
    
    return (
        <div>
            <h2>your bookings: {bookings.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>Delete</th>
        <th>service Iamge</th>
        <th>service</th>
        <th>date</th>
        <th>price</th>
        <th>Status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     { bookings.map(booking =><BookingRow key={booking._id} booking={booking} handleDelete={handleDelete} handleConfirm={handleConfirm}></BookingRow>)}
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default Bookings;
