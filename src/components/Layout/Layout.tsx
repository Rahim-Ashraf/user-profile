import Navbar from "../Navbar/Navbar";
import Photos from "../Photos/Photos";
import Profile from "../Profile/Profile";
import Video from "../Video/Video";


const Layout = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <Navbar></Navbar>
            <div>
                <img className="h-48 md:h-80 w-full " src="./assets/Cover.jpg" alt="" />
            </div>
            <div className="lg:flex justify-between gap-10 bg-slate-200 rounded-b-lg max-w-screen-lg mx-auto px-4">
                <div className="lg:w-2/3">
                    <Profile></Profile>
                    <div className="flex gap-2 lg:hidden justify-between">
                        <div className="w-full">
                            <Photos></Photos>
                        </div>
                        <div className="w-full">
                            <Video></Video>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 hidden lg:block">
                    <Photos></Photos>
                    <Video></Video>
                </div>
            </div>
        </div>
    );
};

export default Layout;