import React from "react";
import UserAside from "./ui/user-aside";
import { useNavigate } from "react-router-dom";

export default function UserDashboard() {
    const navigate = useNavigate()
    return (
        <>
            <UserAside />
            <div className="min-h-screen gap-20 bg-gray-900 w-[77%] absolute top-0 right-0 text-gray-100 flex flex-col items-center p-10">

                {/* Heading */}
                <h1 className="text-3xl font-bold text-center">Welcome Participants</h1>

                {/* Small Cards */}
                <div className="flex flex-wrap justify-center mt-10 gap-6 mb-12">

                    {/* All Meetings */}
                    <div className="border cursor-pointer border-gray-700 bg-gray-800 rounded-lg p-4 w-[230px] hover:bg-indigo-500 transition" onClick={() => navigate("/user-meeting")}>
                        <h3 className="font-semibold mb-1">All Meetings</h3>
                        <p className="text-gray-400 text-xs">
                            View and manage all scheduled meetings, organizers, and participants in one centralized system.
                        </p>
                    </div>

                    {/* Upcoming Meetings */}
                    <div className="border cursor-pointer border-gray-700 bg-gray-800 rounded-lg p-4 w-[230px] hover:bg-emerald-500 transition" onClick={() => navigate("/up-coming")}>
                        <h3 className="font-semibold mb-1">Upcoming Meetings</h3>
                        <p className="text-gray-400 text-xs">
                            Track your next meetings with automatic reminders and real-time scheduling updates.
                        </p>
                    </div>

                    {/* Success */}
                    <div className="border cursor-pointer border-gray-700 bg-gray-800 rounded-lg p-4 w-[230px] hover:bg-teal-400 transition " onClick={() => navigate("/rating")}>
                        <h3 className="font-semibold mb-1">Success Rate</h3>
                        <p className="text-gray-400 text-xs">
                            Monitor completed and successful meetings to improve productivity and workflow performance.
                        </p>
                    </div>

                </div>

                {/* Features Section */}
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 max-w-3xl w-full text-left">
                    <h2 className="text-xl font-semibold mb-4 text-center">Meeting Scheduler Features</h2>
                    <ul className="space-y-3 text-gray-300 text-sm list-disc list-inside">
                        <li>Create and manage meetings with date, time, and duration control</li>
                        <li>Automatic upcoming meeting tracking and reminders</li>
                        <li>Secure participant invitation and email notifications</li>
                        <li>Organizer-based meeting management system</li>
                        <li>Real-time meeting status (Upcoming / Completed / Cancelled)</li>
                        <li>Centralized dashboard for monitoring all schedules</li>
                    </ul>
                </div>

            </div>

        </>
    );
}
