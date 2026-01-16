import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { MdDelete, } from "react-icons/md";
import toast from "react-hot-toast";
import Aside from "../ui/Aside-content";

function User() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    async function fectchUser() {
        // const res = await fetch("http://localhost:8000/");
        // console.log("res", res);
        // const data = await res.json();
        // console.log("data", data);
        const res = await axios.get("https://meeting-scheduler-system-server.vercel.app/get-all-user");
        // console.log(res.data);
        setUsers(res.data.existingUser);
    }
    useEffect(() => {
        fectchUser();
    }, []);
    async function deleteUser(id) {
        try {

            const User = await axios.delete(`https://meeting-scheduler-server-six.vercel.app/delete-user${id}`);
            const singleUser = users.filter(
                (merayUser) => merayUser._id !== id
            );
            setUsers(singleUser);
            toast.success("User deleted successfully");
        } catch (error) {
            toast.error(error.response?.data?.msg || "Network error, please try later!");

        }
    }
    return (
        <>
            <Aside />
            <div className="min-h-screen  w-[77%] absolute top-0 right-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex">



                <main className="flex-1 p-12">

                    <h3 className="text-3xl font-bold text-white">All Users</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        {Array.isArray(users) && users.map((m) => (
                            <div
                                key={m._id}
                                className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 shadow-lg hover:border-indigo-500 hover:shadow-indigo-500/20 transition"
                            >
                                {/* Header */}
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-semibold text-white truncate">
                                        {m.name}
                                    </h3>

                                    <MdDelete
                                        onClick={() => deleteUser(m._id)}
                                        className="text-xl text-indigo-400 hover:text-red-400 cursor-pointer"
                                    />
                                </div>

                                {/* Body */}
                                <div className="space-y-2 text-sm">
                                    <p className="text-gray-400 flex gap-1" >
                                        Email: <span className="text-white">{m.email}</span>
                                    </p>
                                    <p className="text-gray-400">
                                        Gender: <span className="text-white">{m.gender}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </main>

            </div >
        </>
    );
}

export default User;
