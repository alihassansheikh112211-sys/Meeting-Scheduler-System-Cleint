import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";

export default function ResetPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const { token } = useParams();
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleReset = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            return toast.error("Passwords don't match");
        }

        try {
            await axios.post(
                `https://meeting-scheduler-server-six.vercel.app/reset-password${token}`,
                { password }
            );

            toast.success("Reset password successfully");
            navigate("/");
        } catch (error) {
            toast.error(error.response?.data?.msg || "Network error, please try later!");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4">
            <div className="bg-gray-800/70 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-2xl p-10 w-full max-w-md">
                <h2 className="text-3xl font-bold text-white text-center mb-3">
                    Reset Password
                </h2>

                <p className="text-gray-400 text-center mb-8">
                    Enter your new password to continue
                </p>

                <form onSubmit={handleReset} className="space-y-5">
                    <div className="relative mt-3">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full bg-gray-900 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-gray-400 hover:text-indigo-400 transition"
                        >
                            {showPassword ? <BiSolidHide /> : <BiSolidShow />}
                        </button>
                    </div>

                    <div>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Confirm new password"
                            className="w-full bg-gray-900 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-500 transition text-white py-2 rounded-lg font-semibold shadow-lg"
                    >
                        Reset Password
                    </button>
                </form>

            </div>
        </div>
    );
}
