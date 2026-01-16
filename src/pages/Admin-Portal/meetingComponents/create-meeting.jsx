import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function CreateMeeting() {
  const [meeting, setMeeting] = useState({
    meetingTitle: "",
    meetingOrganizer: "",
    meetingDate: "",
    startTime: "",
    endTime: "",
    meetingLink: "",
  });
  const navigate = useNavigate();
  function changeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setMeeting({ ...meeting, [name]: value });
  }
  async function submitHandler(e) {
    e.preventDefault();
    try {
      const res = await axios.post("https://meeting-scheduler-server-six.vercel.app/create-meeting", meeting);
      // console.log(res)
      toast.success("Meeting created successfully");
      navigate("/meeting");
    }
    catch (error) {
      toast.error(error.response?.data?.msg || "Network error, please try later!");
      // console.log(error)
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4">

      <div className="bg-gray-800/70 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-2xl p-10 w-full max-w-lg">

        <h2 className="text-3xl font-bold text-white text-center mb-8">

          Create Meeting
        </h2>

        <form onSubmit={submitHandler} className="space-y-5">

          <div>
            <input
              type="text"
              name="meetingTitle"
              value={meeting.meetingTitle}
              onChange={changeHandler}
              placeholder="Enter meeting title"
              className="w-full bg-gray-900 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <input
              type="text"
              name="meetingOrganizer"
              value={meeting.meetingOrganizer}
              onChange={changeHandler}
              placeholder="Enter organizer’s name"
              className="w-full bg-gray-900 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <input
              type="text"
              name="meetingDate"
              value={meeting.meetingDate}
              onChange={changeHandler}
              placeholder="YYYY-MM-DD"
              className="w-full bg-gray-900 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <input
              type="text"
              name="startTime"
              value={meeting.startTime}
              onChange={changeHandler}
              placeholder="Start time"
              className="w-full bg-gray-900 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <input
              type="text"
              name="endTime"
              value={meeting.endTime}
              onChange={changeHandler}
              placeholder="End time"
              className="w-full bg-gray-900 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <input
              type="text"
              name="meetingLink"
              value={meeting.meetingLink}
              onChange={changeHandler}
              placeholder="https://meeting-link.com"
              className="w-full bg-gray-900 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-500 transition text-white py-2 rounded-lg font-semibold shadow-lg"
          >
            Create Meeting
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateMeeting;
