import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RiDashboard3Fill } from "react-icons/ri";
import { RiComputerFill } from "react-icons/ri";
import { MdQueuePlayNext } from "react-icons/md";

function UserAside() {
    const navigate = useNavigate()
    return (
        <div>
            <div className="min-h-screen bg-gradient-to-br from-gray-900 fixed top-0 via-black w-[23%] to-gray-900 flex">

                <aside className="w-76 bg-gray-950  h-/[100vh] border-r border-gray-800 flex flex-col items-center py-10 gap-2">
                    <h2 className="text-white w-100 text-lg mb-10" style={{ textAlign: "center" }}>
                        Meeting Scheduler System
                    </h2>


                    <ul className="flex-1 mt-5 w-full space-y-12">

                        <li onClick={() => navigate("/user-dashboard")}
                            className="flex items-center  gap-3 px-3 py-2 rounded-lg cursor-pointer text-gray-300 hover:bg-gray-800 hover:text-white transition">
                            <RiDashboard3Fill /> Dashboard
                        </li>
                        <li onClick={() => navigate("/user-meeting")}
                            className="flex items-center  gap-3 px-3 py-2 rounded-lg cursor-pointer text-gray-300 hover:bg-gray-800 hover:text-white transition">
                            <RiComputerFill />All Meetings
                        </li>

                        <li onClick={() => navigate("/up-coming")}
                            className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-gray-300 hover:bg-gray-800 hover:text-white transition">
                            <MdQueuePlayNext />   Upcomming Meeting
                        </li>


                    </ul>

                </aside>
            </div>
        </div>
    )
}

export default UserAside
