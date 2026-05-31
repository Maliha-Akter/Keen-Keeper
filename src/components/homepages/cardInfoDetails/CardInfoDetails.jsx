import React, { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FaArchive } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { BsChatLeftText } from "react-icons/bs";
import { FriendContext } from "../../../context/FriendContext";

const CardInfoDetails = () => {
    const { FriendId } = useParams();
    const friends = useLoaderData();

    const expectedFriend = friends.find(
        (friend) => friend.id === Number(FriendId)
    );

    const {
        id,
        name,
        picture,
        days_since_contact,
        status,
        tags,
        bio,
        goal,
        next_due_date,
    } = expectedFriend;


    const {handleCall,storedCalls} = useContext(FriendContext);
    
    
    
    return (
        <div className="container mx-auto px-8 lg:px-40 py-10">
            <div className="grid lg:grid-cols-3 gap-10 ">

                {/* LEFT SIDE */}
                <div className="space-y-4 lg:col-span-1">
                    {/* Profile Card */}
                    <div className="bg-white rounded-xl shadow-md p-6 text-center">
                        <img
                            src={picture}
                            alt={name}
                            className="w-24 h-24 rounded-full mx-auto object-cover"
                        />

                        <h2 className="text-2xl font-bold mt-4">{name}</h2>

                        <div
                            className={`inline-block px-4 py-1 rounded-full text-white text-sm mt-3
                ${status === "overdue"
                                    ? "bg-red-500"
                                    : status === "Almost due"
                                        ? "bg-yellow-500"
                                        : "bg-green-500"
                                }`}
                        >
                            {status}
                        </div>

                        <div className="flex justify-center gap-2 mt-3 flex-wrap">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p className="italic text-slate-500 mt-4">
                            "{bio}"
                        </p>

                        <p className="text-slate-500 mt-2">
                            Preferred: email
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <button className="w-full bg-white rounded-lg shadow-md py-5 flex items-center justify-center gap-2 hover:bg-green-100 cursor-pointer">
                        <RiNotificationSnoozeLine />
                        Snooze 2 Weeks
                    </button>

                    <button className="w-full bg-white rounded-lg shadow-md py-5 flex items-center justify-center gap-2 hover:bg-green-100 cursor-pointer">
                        <FaArchive />
                        Archive
                    </button>

                    <button className="w-full bg-white rounded-lg shadow-md py-5 flex items-center justify-center gap-2 text-red-500 hover:bg-red-50 cursor-pointer">
                        <RiDeleteBin6Fill />
                        Delete
                    </button>
                </div>

                {/* RIGHT SIDE */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Stats */}
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white shadow-md rounded-xl p-6 text-center">
                            <h2 className="text-4xl font-bold text-[#244D3F]">
                                {days_since_contact}
                            </h2>
                            <p className="text-slate-500 mt-2">
                                Days Since Contact
                            </p>
                        </div>

                        <div className="bg-white shadow-md rounded-xl p-6 text-center">
                            <h2 className="text-4xl font-bold text-[#244D3F]">
                                {goal}
                            </h2>
                            <p className="text-slate-500 mt-2">
                                Goal (Days)
                            </p>
                        </div>

                        <div className="bg-white shadow-md rounded-xl p-6 text-center">
                            <h2 className="text-3xl font-bold text-[#244D3F]">
                                {next_due_date}
                            </h2>
                            <p className="text-slate-500 mt-2">
                                Next Due
                            </p>
                        </div>
                    </div>

                    {/* Relationship Goal */}
                    <div className="bg-white rounded-xl shadow-md px-10 py-17">
                        <div className="flex justify-between items-center">
                            <h3 className="text-2xl font-semibold text-[#244D3F]">
                                Relationship Goal
                            </h3>

                            <button className="btn btn-sm">
                                Edit
                            </button>
                        </div>

                        <p className="text-slate-600 mt-4 text-lg">
                            Connect every{" "}
                            <span className="font-bold">{goal} days</span>
                        </p>
                    </div>

                    {/* Quick Check-In */}
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <h3 className="text-2xl font-semibold text-[#244D3F] mb-6">
                            Quick Check-In
                        </h3>

                        <div className="grid md:grid-cols-3 gap-4">
                            <button className="rounded-xl py-8 flex flex-col items-center gap-2 hover:bg-gray-50 shadow-lg font-bold text-xl cursor-pointer" onClick={()=>handleCall(expectedFriend)}>
                                <MdOutlineWifiCalling3 />
                                <span>Call</span>
                            </button>

                            <button className="shadow-lg rounded-xl py-8 flex flex-col items-center gap-2 hover:bg-gray-50 font-bold text-xl cursor-pointer">
                                <BsChatLeftText />
                                <span>Text</span>
                            </button>

                            <button className="shadow-lg rounded-xl py-8 flex flex-col items-center gap-2 hover:bg-gray-50 font-bold text-xl cursor-pointer">
                                <HiOutlineVideoCamera size={24} />
                                <span>Video</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CardInfoDetails;
















{/* <div className='container mx-auto bg-[#F8FAFC]'>
            <div className='mt-10 w-1/4'>
                <div className="card bg-base-100 shadow-lg mb-3">
                    <figure className="px-10 pt-10 flex justify-center">
                        <img
                            src={picture}
                            alt={name}
                            className="w-24 h-24 object-cover rounded-full"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {tags.map((tag, i) => (
                                <div key={i} className="bg-green-200 px-2 py-1 rounded-xl font-bold">
                                    {tag}
                                </div>
                            ))}
                        </div>
                        <div
                            className={`px-3 py-1 rounded-full text-white text-sm font-semibold w-fit ${status === "overdue"
                                ? "bg-red-500"
                                : status === "Almost due"
                                    ? "bg-yellow-500"
                                    : "bg-green-500"
                                }`}
                        >
                            {status}
                        </div>
                        <p className='text-[#64748B] italic font-bold'>"{bio}"</p>
                        <p className='text-[#64748B]'>Prefered : email</p>
                    </div>
                </div>
                <div className='flex items-center bg-base-100 shadow-lg py-5 justify-center gap-2 mb-3'>
                    <RiNotificationSnoozeLine />
                    <p className='font-bold '>Snooze 2 weeks</p>
                </div>
                <div className='flex items-center bg-base-100 shadow-lg py-5 justify-center gap-2 mb-3'>
                    <FaArchive />
                    <p className='font-bold '>Archive</p>
                </div>
                <div className='flex items-center bg-base-100 shadow-lg py-5 justify-center gap-2 mb-6'>
                    <RiDeleteBin6Fill />
                    <p className='font-bold '>Delete</p>
                </div>
            </div>

        </div> */}