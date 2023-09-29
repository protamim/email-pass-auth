import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";
import { HiEyeSlash, HiEye } from "react-icons/hi2";

const SignIn = () => {
    const [signInError, setSignInError] = useState('');
    const [signInSuccess, setSignInSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false)

    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        // reset every click before promise
        setSignInError('');
        setSignInSuccess('');

        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result)
            setSignInSuccess('You\'re signed in successfully')
        })
        .catch(error =>{
            console.log(error.message)
            setSignInError('Invalid sign in credentials')
        })
    }

  return (
    <>
      <section className="my-9">
        <div className="container mx-auto px-5">
          <div>
            <div className="max-w-sm mx-auto bg-lime-100 p-6">
              <h2 className="text-center text-2xl mb-6">Sign In</h2>
              <form onSubmit={handleSignIn} className="flex flex-col gap-4 relative">
                <input
                  className="px-2 py-1 outline-none rounded-md"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                />
                <input
                  className="px-2 py-1 outline-none rounded-md"
                  type={showPassword?'text':'password'}
                  name="password"
                  id="password"
                  placeholder="Password"
                />
                <span className='absolute top-[40%] left-[91%] text-gray-500 cursor-pointer' onClick={()=> setShowPassword(!showPassword)}>
                  {showPassword?<HiEyeSlash />:<HiEye />}
                </span>
                <button className="bg-lime-50 px-4 py-1 mt-3 hover:bg-lime-500 hover:text-white">
                  Sign In
                </button>
              </form>
              {
                signInError && <p className="text-red-600 mt-3 text-center">{signInError}</p>
              }
              {
                signInSuccess && <p className="text-green-400 mt-3 text-center">{signInSuccess}</p>
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
