import React from 'react'
import { useNavigate } from 'react-router-dom'
function Landing() {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4">
            <div className="max-w-5xl w-full text-center">

                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-wide">
                    Meeting Scheduler System
                </h1>
                <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
                    A smart digital platform to manage, schedule, and organize meetings efficiently for teams and organizations.
                </p>

                <div className="grid md:grid-cols-2 gap-10">

                    <div className="bg-gray-800/60 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 shadow-xl  transition-all duration-300">
                        <div className="text-indigo-400 text-5xl mb-4">🛠️</div>
                        <h2 className="text-2xl font-bold text-white mb-3">Admin Portal</h2>
                        <p className="text-gray-400 mb-6">
                            Manage users, approve meetings, generate reports, and control system permissions from one powerful dashboard.
                        </p>

                        <ul className="text-gray-300 text-left space-y-2 mb-6">
                            <li>✔ View & manage all meetings</li>
                            <li>✔ Approve or modify schedules</li>
                            <li>✔ Manage users & roles</li>
                            <li>✔ Generate meeting reports</li>
                        </ul>

                        <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded-lg font-semibold transition"
                            onClick={() =>
                                navigate("/login")
                            }>
                            Enter Admin Portal

                        </button>
                    </div>

                    <div className="bg-gray-800/60 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 shadow-xl  transition-all duration-300">
                        <div className="text-emerald-400 text-5xl mb-4">👥</div>
                        <h2 className="text-2xl font-bold text-white mb-3">Participants Portal</h2>
                        <p className="text-gray-400 mb-6">
                            Join meetings, manage invitations, and stay notified with real-time updates and reminders.
                        </p>

                        <ul className="text-gray-300 text-left space-y-2 mb-6">
                            <li>✔ View meeting invitations</li>
                            <li>✔ Accept or decline meetings</li>
                            <li>✔ Get reminders & updates</li>
                            <li>✔ Track upcoming schedules</li>
                        </ul>

                        <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2 rounded-lg font-semibold transition" onClick={() =>
                            navigate(`/user-login`)
                        }>
                            Enter Participants Portal
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
