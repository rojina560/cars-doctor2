import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import login from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignup = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const password = form.password.value;
        const email = form.email.value;
        const user = {
            name,password,email
        }
        console.log(user);
        createUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(err =>{
            console.log(err);
        })

    }

    return (
        <div>
               <div className="hero bg-base-200 min-h-screen ">
  <div className="hero-content flex-col lg:flex-row ">
    <div className="text-center lg:text-left w-1/2">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <img src={login} alt="" />
      
    </div>
    <div className="card bg-base-100 w-1/2 max-w-sm shrink-0 shadow-2xl ">
      <form onSubmit={handleSignup} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name='name' type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign up</button>
        </div>
      </form>
      <p className='text-center pb-5'>Already have any Account  <Link className='text-orange-600 text-2xl font-semibold' to={'/login'}> Sign Up</Link> </p>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;