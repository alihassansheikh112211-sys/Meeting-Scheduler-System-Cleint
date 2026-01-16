import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";


function UserForget() {
    const [user, setUser] = useState({
        email: "",
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
            const res = await axios.post(
                "https://meeting-scheduler-server-six.vercel.app/forget-password",
                user
            );
            // console.log(res);
            toast.success("Email sent successfully");
        } catch (error) {
            toast.error(error.response?.data?.msg || "Network error, please try later!");
        }
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4">
            <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-2xl p-10 w-full max-w-md">

                {/* Heading */}
                <h2 className="text-3xl font-bold text-white text-center mb-6">
                    Forget Password
                </h2>
                <p className="text-gray-400 text-center mb-8">
                    Reset  your password
                </p>

                <form className="space-y-5" onSubmit={submitHandler}>

                    <input
                        type="email"
                        onChange={changeHandler}
                        name="email"
                        value={user.email}
                        placeholder="Enter your email address"
                        className="w-full bg-gray-900 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 mt-4 hover:bg-indigo-500 transition text-white font-semibold py-2 rounded-lg shadow-lg"
                    >
                        Send Email
                    </button>
                </form>

            </div>
        </div>
    );
}

export default UserForget;
