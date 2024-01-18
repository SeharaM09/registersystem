import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    userName:"",
    email: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { userName, email, password  } = data;
    try {
      const response = await axios.post("/register", {
        userName,
        email,
        password,
      });

      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setData({
          userName:"",
          email: "",
          password: "",
        });

        toast.success("Login successful. Welcome!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center">
      <div className="relative App-frame lg:w-[22%] xl:w-[22%] max-w-5xl rounded-lg bg-white p-10 shadow-md h-auto" style={{ fontFamily: 'Akshar, sans-serif' }}>
        <button
          className="bg-transparent border-none cursor-pointer"
          style={{ position: 'absolute', top: 0, right: 0 }}
        >
          {/* Close button SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" width="20.333px" height="20.343px" viewBox="0 0 21 21" fill="#C7C900" className="absolute top-1 right-1 flex-shrink-0">
            <path d="M15.5151 5.64817C15.3563 5.48926 15.1408 5.39999 14.9162 5.39999C14.6915 5.39999 14.4761 5.48926 14.3172 5.64817L10.432 9.53548L6.54672 5.64817C6.38785 5.48926 6.1724 5.39999 5.94775 5.39999C5.72311 5.39999 5.50766 5.48926 5.34879 5.64817C5.18996 5.80713 5.10074 6.02269 5.10074 6.24746C5.10074 6.47222 5.18996 6.68779 5.34879 6.84674L9.23402 10.734L5.34879 14.6213C5.18996 14.7803 5.10074 14.9959 5.10074 15.2206C5.10074 15.4454 5.18996 15.661 5.34879 15.8199C5.50766 15.9788 5.72311 16.0681 5.94775 16.0681C6.1724 16.0681 6.38785 15.9788 6.54672 15.8199L10.432 11.9326L14.3172 15.8199C14.4761 15.9788 14.6915 16.0681 14.9162 16.0681C15.1408 16.0681 15.3563 15.9788 15.5151 15.8199C15.674 15.661 15.7632 15.4454 15.7632 15.2206C15.7632 14.9959 15.674 14.7803 15.5151 14.6213L11.6299 10.734L15.5151 6.84674C15.674 6.68779 15.7632 6.47222 15.7632 6.24746C15.7632 6.02269 15.674 5.80713 15.5151 5.64817Z"/>
          </svg>
        </button>

        <h2 className="sign-in-text text-center text-2xl font-semibold mb-6">
          Sign Up
        </h2>
        <form onSubmit={registerUser}>
                  <div className="form-group mb-4">
            <input
              type="text"
              id="username"
              name="userName"
              placeholder="user name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded"
              value={data.userName}
              onChange={(e) => setData({ ...data, userName: e.target.value })}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="password"
              id="createPassword"
              name="createPassword"
              placeholder="Create Password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
              <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
              <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
              <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
            </svg>
          </div>
          <button
            type="submit"
            className="w-full bg-[#C7C900] hover:bg-[#c6c9009f] text-white font-medium py-2 px-4 rounded mt-4"
          >
            Sign Up
          </button>
        </form>
        <div className="sign-up-link text-center mt-4">
          <span className="already-have-account text-gray-600 text-sm">
            Already have an account?
          </span>
          <Link to="/Login" className="sign-in-anchor text-[#C7C900] text-sm ml-1">
            Sign In
          </Link>
        </div>
        {/* <div className="or-container flex items-center justify-center mt-4">
          <div className="or-divider flex-grow bg-gray-300 h-px"></div>
          <span className="or text-gray-600 text-sm mx-2">Or</span>
          <div className="or-divider flex-grow bg-gray-300 h-px"></div>
        </div> */}
        {/* <div className="button-container mt-4">
            <div className="facebook-button-container mb-2">
            <button className="facebook-button  w-full bg-[#2A6F97] text-white font-medium py-2 px-4 rounded item-center text-sm">
              <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 48 48">
                            <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
              </svg>
                Login with Facebook
              </button>
          </div> */}
          {/* <div className="google-button-container mb-2">
            <button className="google-button w-full bg-white text-[#9F9F9F] font-medium py-2 px-4 rounded item-center text-sm" style={{ border: "1px solid #ccc" }}>
              <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
              </svg>              
                Login with Google
              </button>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
