import {createUserWithEmailAndPassword} from 'firebase/auth'
import auth from '../firebase/firebase.config';
import { useState } from 'react';

const SignUp = () => {

  const [success, setSuccess] = useState('')
  const [signUpError, setSignUpError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.confirmPassword.value;
    console.log(email, password)
    // Reset everytime
    setSuccess('');
    setSignUpError('');

    if(password.length < 6){
      setSignUpError('Password should be at least 6 characters!');
      return;
    }

    // Firebase
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      console.log(result)
      setSuccess('User created successfully!')
    })
    .catch(error => {
      console.error(error)
      setSignUpError('Email already in use');
    })
  }

  return (
    <>
      <section className="my-9">
        <div className="container mx-auto px-5">
          <div>
            <div className="max-w-sm mx-auto bg-lime-100 p-6">
              <h2 className="text-center text-2xl mb-6">Sign Up</h2>
              <form onSubmit={handleSignUp} className="flex flex-col gap-4">
                <input
                  className="px-2 py-1 outline-none rounded-md"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email" 
                  required
                />
                <input
                  className="px-2 py-1 outline-none rounded-md"
                  type="password"
                  name="confirmPassword"
                  id="confirm-password"
                  placeholder="Confirm Password" 
                  required
                />
                <button className="bg-lime-50 px-4 py-1 mt-3 hover:bg-lime-500 hover:text-white">
                  Sign Up
                </button>
              </form>
              {
                success && <p className='text-green-500 text-center mt-5'>{success}</p>
              }
              {
                signUpError && <p className='text-red-500 text-center mt-5'>{signUpError}</p>
              }
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
