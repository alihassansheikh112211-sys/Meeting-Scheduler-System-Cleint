import React from "react";
import UserAside from "./user-aside";

function Rating() {

    return (
        <>
            <UserAside />
            <div className="min-h-screen w-[77%] absolute top-0 right-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 p-12">
                <h3 className="text-3xl font-bold   text-white mt-10">Success Rating</h3>
                <p className="text-2xs   text-start text-white mt-10">Not Found</p>
            </div>
        </>
    );
}

export default Rating;
