import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function EditMeeting() {
  const [meetingData, setMeetingDate] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  async function fetchMeeting() {
    const meeting = await axios.get(`https://meeting-scheduler-server-six.vercel.app/get-single-meeting${params.id}`);
    // console.log(meeting.data);
    setMeetingDate(meeting.data.meeting);
  }
  useEffect(() => {
    fetchMeeting();
  }, []);
  function changeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setMeetingDate({ ...meetingData, [name]: value });
  }
  async function submitHandler(e) {
    e.preventDefault();
    try {

      const res = await axios.patch(
        `https://meeting-scheduler-server-six.vercel.app/update-meeting${params.id}`,
        meetingData
      );
      // console.log(res);
      toast.success("Meeting updated successfully");
      navigate("/meeting");
    } catch (error) {
      toast.error(error.response?.data?.msg || "Network error, please try later!");
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4">

      <div className="bg-gray-800/70 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-2xl p-10 w-full max-w-lg">

        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Edit Meeting
        </h2>

        <form onSubmit={submitHandler} className="space-y-5">

          <div>
            <input
              type="text"
              name="meetingTitle"
              value={meetingData.meetingTitle}
              onChange={changeHandler}
              placeholder="Enter meeting title"
              className="w-full bg-gray-900 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <input
              type="text"
              name="meetingOrganizer"
              value={meetingData.meetingOrganizer}
              onChange={changeHandler}
              placeholder=" Enter organizer’s name"
              className="w-full bg-gray-900 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <input
              type="text"
              name="meetingDate"
              value={meetingData.meetingDate}
              onChange={changeHandler}
              placeholder="YYYY-MM-DD"
              className="w-full bg-gray-900 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <input
              type="text"
              name="startTime"
              value={meetingData.startTime}
              onChange={changeHandler}
              placeholder="Start time"
              className="w-full bg-gray-900 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <input
              type="text"
              name="endTime"
              value={meetingData.endTime}
              onChange={changeHandler}
              placeholder="end time"
              className="w-full bg-gray-900 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>


          <div>
            <input
              type="text"
              name="meetingLink"
              value={meetingData.meetingLink}
              onChange={changeHandler}
              placeholder="https://meeting-link.com"
              className="w-full bg-gray-900 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-500 transition text-white py-2 rounded-lg font-semibold shadow-lg"
          >
            Edit Meeting
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditMeeting;
