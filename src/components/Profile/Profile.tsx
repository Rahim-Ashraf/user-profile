import { useState } from "react";


const Profile = () => {
    const [follow, setFollow] = useState(false);
    const handleFollow = () => {
        setFollow(!follow);
        console.log("clicked")
    }

    return (
        <div className="flex gap-2 justify-between py-2">
            <div className="w-1/4 relative">
                <div className="absolute bottom-10 sm:bottom-4">
                    <img className="rounded-full w-[240px]" src="assets/Profile.jpg" alt="Profile" />
                </div>
            </div>
            <div className="w-3/4 flex justify-between">
                <div>
                    <div className="flex gap-2 items-center">
                        <h2 className="text-xl md:text-3xl font-bold">John Doe •</h2>
                        <p className="text-sky-600">@johndoe</p>
                    </div>
                    <div className="flex gap-4">
                        <div>
                            <div className="flex gap-2 items-center">
                                <p>Astrophotographer</p>
                                <div className="w-4">
                                    <img src="./assets/Rectangle1.png" alt="" />
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <p>Gamer</p>
                                <div className="w-4">👾</div>
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button onClick={handleFollow} className={`px-4 py-1 ${follow ? "bg-gray-600 text-black" : "bg-[#196AA0]"} text-white border-none rounded-full font-semibold`}>{follow ? "Following" : "Follow"}</button>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block">
                    <button onClick={handleFollow} className={`px-4 py-1 ${follow ? "bg-gray-600 text-black" : "bg-[#196AA0]"} text-white border-none rounded-full font-semibold`}>{follow ? "Following" : "Follow"}</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;