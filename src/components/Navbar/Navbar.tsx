

const Navbar = () => {
    const menu = <>
        <li><a className="btn btn-ghost text-xl"><img className="w-6 md:w-10" src="./assets/Search.png" alt="Search" /></a></li>
        <li><a className="btn btn-ghost text-xl"><img className="w-6 md:w-10" src="./assets/Create.png" alt="Create" /></a></li>
        <li><a className="btn btn-ghost text-xl"><img className="w-6 md:w-10" src="./assets/Message.png" alt="Message" /></a></li>
        <li><a className="btn btn-ghost text-xl"><img className="w-6 md:w-10" src="./assets/Notification.png" alt="Notification" /></a></li>
        <li><a className="btn btn-ghost text-xl"><img className="w-6 md:w-10" src="./assets/Options.png" alt="Options" /></a></li>
    </>

    return (
        <div className="bg-[#1F1F1F] text-white">
            <div className="navbar max-w-screen-lg mx-auto">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl"><img src="./assets/Logo.png" alt="Logo" /></a>
                </div>
                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {menu}
                        </ul>
                    </div>
                    <a>
                        <div className="avatar">
                            <div className="w-10 rounded-full">
                                <img src="assets/Profile.jpg" alt="Profile" />
                            </div>
                        </div>
                    </a>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-10 w-10 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content bg-base-100 rounded-box z-[1] mt-2 p-2 shadow">
                            {menu}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;