import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';

export default function Login() {
  const navigate = useNavigate();
  const {setUser} = useContext(UserContext);
  const [data, setData] = useState({
    email: '',
    password: '',
    role: '', // Initialize role as an empty string
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password, role } = data; // Extract role from data
    try {
      const response = await axios.post('/login', {
        email,
        password,
        role, // Include role in the request body
      });
      const { data } = response;
      if (data.error) {
        toast.error(data.error);
      }

       else {
        const {userName, email} = data;
        console.log(data)

        setUser({userName, email})
          navigate('/Personalinfo');

       }
      
    } catch (error) {
      // Handle error
    }
  }

  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center">
      <div className="relative App-frame lg:w-[22%] xl:w-[22%] max-w-5xl rounded-lg bg-white p-10 shadow-md h-auto" style={{ fontFamily: 'Akshar, sans-serif' }}>
        <button
          className="bg-transparent border-none cursor-pointer"
          style={{ position: 'absolute', top: 0, right: 0 }}
        >
          {/* Close button SVG */}
          
        </button>

        <h2 className="sign-in-text text-center text-2xl font-semibold mb-6">
          Sign In
        </h2>
        <form onSubmit={loginUser}>
          <div className="form-group mb-4">
            <input
              type="text"
              id="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="form-group mb-4 relative">
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
              {/* Your eye icon SVG code here */}
            </svg>
          </div>
          <div className="text-center">
            <a href="#" className="forgot-password-link text-center text-[#C7C900] text-sm">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-[#C7C900] hover:bg-[#c6c9009f] text-white font-medium py-2 px-4 rounded mt-4"
          >
            Sign In
          </button>
          <div className="sign-up-link text-center mt-4">
            <span className="dont-have-account text-gray-600 text-sm">
              Don’t have an account?
            </span>
            <Link to="/Register" className="sign-up-anchor text-[#C7C900] text-sm ml-1">
              Sign Up
            </Link>
          </div>
          {/* <div className="or-container flex items-center justify-center mt-4">
            <div className="or-divider flex-grow bg-gray-300 h-px"></div>
            <span className="or text-gray-600 text-sm mx-2">Or</span>
            <div className="or-divider flex-grow bg-gray-300 h-px"></div>
          </div> */}
          {/* <div className="button-container mt-4">
            <div className="facebook-button-container mb-2">
              <button className="facebook-button flex items-center w-full bg-[#2A6F97] text-white font-medium py-2 px-4 rounded item-center text-sm">
                {/* Your Facebook button content here */}
                {/* <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 48 48">
                            <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
              </svg>
                Login with Facebook
              </button>
            </div>
            <div className="google-button-container mb-2">
              <button className="google-button w-full bg-white text-[#9F9F9F] font-medium py-2 px-4 rounded item-center text-sm" style={{ border: "1px solid #ccc" }}>
                {/* Your Google button content here */}
                {/* <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
              </svg>              
                Login with Google
              </button>
            </div>
          </div>  */} 
        </form>
      </div>
    </div>
  );
}
