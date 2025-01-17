import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { AuthContext } from '../../../Providers/AuthProvider';

const Navbar = () => {
  const {users,logOut} = useContext(AuthContext)
  const handleLogOut = () =>{
    logOut()
    .then(() =>{}
    )
    .catch(err =>{
      console.log(err);
    })
  }

    const navLinks = <>
    <li><Link to={'/'}>Home</Link></li>
    <li><Link to={'/about'}>About</Link></li>
    {users?.email ? <>
      <li><Link to={'/bookings'}>my bookings</Link></li>
      <li><button onClick={handleLogOut}>LogOut</button></li>
    </>: <li><Link to={'/login'}>Login</Link></li>}
    </>
    return (
        <div>
            <div className="navbar bg-base-200 h-28 mb-6 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
       {/* <img src={logo} alt="" /> */}
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navLinks}
      </ul>
    </div>
    <img src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;