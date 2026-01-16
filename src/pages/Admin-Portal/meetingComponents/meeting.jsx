import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { MdDelete, } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";
import Aside from "../ui/Aside-content";

function Meeting() {
  const [meetings, setMeetings] = useState([]);
  const navigate = useNavigate();
  async function fectchMeeting() {
    // const res = await fetch("http://localhost:8000/");
    // console.log("res", res);
    // const data = await res.json();
    // console.log("data", data);
    const res = await axios.get("https://meeting-scheduler-system-server.vercel.app/get-all-meeting");
    // console.log(res.data);
    setMeetings(res.data.meeting);
  }
  useEffect(() => {
    fectchMeeting();
  }, []);
  async function deleteMeeting(id) {
    try {

      const meeting = await axios.delete(`https://meeting-scheduler-system-server.vercel.app/delete-meeting${id}`);
      const singleMeeting = meetings.filter(
        (meriMeeting) => meriMeeting._id !== id
      );
      setMeetings(singleMeeting);
      toast.success("Meeting deleted successfully");
    } catch (error) {
      toast.error(error.response?.data?.msg || "Network error, please try later!");
    }
  }
  return (
    <>
      <Aside />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 w-[77%] absolute top-0 right-0 via-black to-gray-900 flex">


        <main className="flex-1 p-12">

          <h3 className="text-3xl font-bold  text-white">
            All Meetings
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

                  <div className="flex gap-3">
                    <FaEdit
                      onClick={() => navigate(`/edit-meeting/${m._id}`)}
                      className="text-xl text-indigo-400 hover:text-indigo-300 cursor-pointer"
                    />
                    <MdDelete
                      onClick={() => deleteMeeting(m._id)}
                      className="text-xl text-indigo-400 hover:text-red-400 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </main>
      </div >
    </>
  );
}

export default Meeting;
