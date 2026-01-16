import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaUsers } from "react-icons/fa6";
import { BsLaptopFill } from "react-icons/bs";
import { BiSolidReport } from "react-icons/bi";

function Aside() {
    const navigate = useNavigate()
    return (
        <div>
            <div className="min-h-screen bg-gradient-to-br from-gray-900 fixed top-0 via-black w-[23%] to-gray-900 flex">

                <aside className="w-76 bg-gray-950  h-/[100vh] border-r border-gray-800 flex flex-col items-center py-10 gap-2">
                    <h2 className="text-white w-100 text-lg mb-10" style={{ textAlign: "center" }}>
                        Meeting Scheduler System
                    </h2>

                    <button
                        onClick={() => navigate("/create-meeting")}
                        className="bg-indigo-600 w-65 hover:bg-indigo-500 transition text-white px-6 py-2 rounded-lg font-semibold shadow-md  m-3"
                    >
                        + Create Meeting
                    </button>
                    <button
                        onClick={() => navigate("/create-meeting")}
                        className="bg-indigo-600 w-65 hover:bg-indigo-500 transition text-white px-6 py-2 rounded-lg font-semibold shadow-md "
                    >
                        + Create Reports
                    </button>
                    <ul className="flex-1 mt-5 w-full space-y-9">

                        <li onClick={() => navigate("/meeting")}
                            className="flex items-center  gap-3 px-3 py-2 rounded-lg cursor-pointer text-gray-300 hover:bg-gray-800 hover:text-white transition">
                            <BsLaptopFill /> All Meetings
                        </li>

                        <li onClick={() => navigate("/user")}
                            className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-gray-300 hover:bg-gray-800 hover:text-white transition">
                            <FaUsers /> All Participants
                        </li>

                        <li onClick={() => navigate("/report")}
                            className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-gray-300 hover:bg-gray-800 hover:text-white transition">
                            <BiSolidReport /> All Reports
                        </li>

                    </ul>

                </aside>
            </div>
        </div>
    )
}

export default Aside
