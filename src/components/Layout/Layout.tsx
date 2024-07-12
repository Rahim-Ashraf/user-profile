import Navbar from "../Navbar/Navbar";
import Photos from "../Photos/Photos";
import Profile from "../Profile/Profile";


const Layout = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <Navbar></Navbar>
            <div>
                <img className="h-40 md:h-80 w-full " src="./assets/Cover.jpg" alt="" />
            </div>
            <div className="lg:flex justify-between gap-4 bg-slate-200 rounded-lg max-w-screen-lg mx-auto px-4">
                <Profile></Profile>
                <div>
                    <Photos></Photos>
                </div>
            </div>
        </div>
    );
};

export default Layout;