import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import UserAside from "../ui/user-aside";

function UPComing() {
    const navigate = useNavigate()

    function decline() {
        toast.success("You have declined this meeting")
        navigate("/user-dashboard")
    }
    const [meetings, setMeetings] = useState([]);
    async function fectchMeeting() {

        const res = await axios.get("https://meeting-scheduler-server-six.vercel.app/get-all-meeting");
        // console.log(res.data);
        setMeetings(res.data.meeting);
    }
    useEffect(() => {
        fectchMeeting();
        const interval = setInterval(fectchMeeting, 2000)
        return () => clearInterval(interval)
    }, []);

    return (
        <>
            <UserAside />
            <div className="min-h-screen bg-gradient-to-br from-gray-900 w-[77%] absolute top-0 right-0 via-black to-gray-900 flex">


                <main className="flex-1 p-12">

                    <h3 className="text-3xl font-bold  text-white">
                        UPcomming Meetings
                    </h3>

                    {/* Wide Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        {Array.isArray(meetings) && meetings.map((m) => (
                            <div
                                key={m._id}
                                className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 shadow-lg hover:border-indigo-500 hover:shadow-indigo-500/20 transition"
                            >
                                <div className="space-y-2 text-sm">
                                    <p className="text-gray-400">
                                        Title: <span className="text-white">{m.meetingTitle}</span>
                                    </p>

                                    <p className="text-gray-400">
                                        Organizer: <span className="text-white">{m.meetingOrganizer}</span>
                                    </p>
                                    <p className="text-gray-400">
                                        Date: <span className="text-white">{m.meetingDate}</span>
                                    </p>
                                    <p className="text-gray-400">
                                        Time: <span className="text-white">{m.startTime} - {m.endTime}</span>
                                    </p>
                                </div>

                                <div className="flex justify-between items-center mt-6">
                                    <a
                                        href={m.meetingLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-3 py-1.5 text-sm font-semibold rounded-lg border border-indigo-500 text-indigo-400  hover:text-white transition"
                                    >
                                        Join
                                    </a>

                                    <button
                                        onClick={decline}
                                        className="px-3 py-1.5 text-sm font-semibold rounded-lg border border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition"
                                    >
                                        Decline
                                    </button>

                                </div>
                            </div>
                        ))}
                    </div>

                </main>
            </div >
        </>
    );
}

export default UPComing;  