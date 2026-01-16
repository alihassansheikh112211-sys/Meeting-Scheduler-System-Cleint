import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function EditReport() {
    const [reportData, setReportData] = useState({});
    const params = useParams();
    const navigate = useNavigate();
    // console.log(params.id);
    async function fetchReport() {
        const report = await axios.get(`https://meeting-scheduler-system-server.vercel.app/get-single-report${params.id}`);
        // console.log(report.data);
        setReportData(report.data.report);
    }
    useEffect(() => {
        fetchReport();
    }, []);
    function changeHandler(e) {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setReportData({ ...reportData, [name]: value });
    }
    async function submitHandler(e) {
        e.preventDefault();
        try {

            const res = await axios.patch(
                `https://meeting-scheduler-system-server.vercel.app/update-report${params.id}`,
                reportData
            );
            // console.log(res);
            toast.success("Report updated successfully");
            navigate("/report");
        } catch (error) {
            toast.error(error.response?.data?.msg || "Network error, please try later!");
        }
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4">

            <div className="bg-gray-800/70 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-2xl p-10 w-full max-w-lg">

                <h2 className="text-3xl font-bold text-white text-center mb-8">
                    Edit Report
                </h2>

                <form onSubmit={submitHandler} className="space-y-5">

                    <div>
                        <input
                            type="text"
                            name="reportTitle"
                            value={reportData.reportTitle}
                            onChange={changeHandler}
                            placeholder="Enter report title"
                            className="w-full bg-gray-900 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            name="reportGenerate"
                            value={reportData.reportGenerate}
                            onChange={changeHandler}
                            placeholder="Enter generater's name"
                            className="w-full bg-gray-900 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            name="date"
                            value={reportData.date}
                            onChange={changeHandler}
                            placeholder="YYYY-MM-DD"
                            className="w-full bg-gray-900 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <input
                            type="number"
                            name="totalUser"
                            value={reportData.totalUser}
                            onChange={changeHandler}
                            placeholder="Total users"
                            className="w-full bg-gray-900 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="flex items-center justify-between bg-gray-900 border border-gray-700 rounded-lg px-4 py-2">
                        <span className="text-gray-400">Type</span>
                        <div className="flex gap-6 text-gray-300">

                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="reportType"
                                    value="completed"
                                    checked={reportData.reportType === "completed"}
                                    onChange={changeHandler}
                                    className="accent-indigo-500"
                                />
                                <span> Completed</span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="reportType"
                                    value="uncompleted"
                                    checked={reportData.reportType === "uncompleted"}
                                    onChange={changeHandler}
                                    className="accent-indigo-500"
                                />
                                <span> Uncompleted</span>
                            </label>

                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-emerald-600 hover:bg-emerald-500 transition text-white py-2 rounded-lg font-semibold shadow-lg"
                    >
                        Edit Report
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditReport;
