

const Profile = () => {
    return (
        <div>
            <div className="flex gap-4 justify-between items-end py-2">
                <div className="w-20 sm:w-60 relative">
                    <div className="absolute bottom-0">
                        <img className="rounded-full" src="assets/Profile.jpg" alt="Profile" />
                    </div>
                </div>
                <div className="w-full flex justify-between">
                    <div>
                        <div className="flex gap-2 items-center">
                            <h2 className="text-3xl font-bold">John Doe •</h2>
                            <p className="text-sky-600">@johndoe</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="font-semibold">Astrophotographer</p>
                            <div className="w-4">
                                <img src="./assets/Rectangle1.png" alt="" />
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="font-semibold">Gamer</p>
                            <div className="w-4">👾</div>
                        </div>
                    </div>
                    <div>
                        <button className="px-6 py-2 bg-[#196AA0] text-white border-none rounded-full font-semibold">Follow</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;