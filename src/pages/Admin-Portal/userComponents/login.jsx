import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [user, setUser] = useState({

    email: "",
    password: "",
  });
  function changeHandler(e) {
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const navigate = useNavigate();
  async function submitHandler(e) {
    e.preventDefault();
    try {
      const res = await axios.post("https://meeting-scheduler-system-server.vercel.app/login", user);
      console.log(res);
      toast.success("User logged in successfully");
      navigate("/Admin-dashboard");
    } catch (error) {
      toast.error(error.response?.data?.msg || "Network error, please try later!");
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4">
      <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-2xl p-10 w-full max-w-md">

        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Login
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Welcome back! Please login to your account
        </p>

        <form className="  space-y-5" onSubmit={submitHandler}>

          <input
            type="email"
            onChange={changeHandler}
            name="email"
            value={user.email}
            placeholder="Enter your email address"
            className="w-full bg-gray-900 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <div className="relative mt-3">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={user.password}
              onChange={changeHandler}
              placeholder="Enter your password"
              className="w-full bg-gray-900 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3  top-3 text-gray-400 hover:text-indigo-400 transition"
            >
              {showPassword ? <BiSolidHide />
                : <BiSolidShow />
              }
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 mt-4 hover:bg-indigo-500 transition text-white font-semibold py-2 rounded-lg shadow-lg"
          >
            Login
          </button>
        </form>


        <p className="text-gray-400 mt-3 text-center ">
          <Link to="/forget-password" className="text-indigo-400 hover:text-indigo-300 font-semibold">
            Forget Password
          </Link>
        </p>
        <p className="text-gray-400 text-center mt2">
          Don’t have an account?{" "}
          <Link to="/register" className="text-indigo-400 hover:text-indigo-300 font-semibold">
            Sign Up Here
          </Link>
        </p>
      </div>
    </div >
  );
}

export default Login;
