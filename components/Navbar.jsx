import { FaSearch, FaUser } from "react-icons/fa";
const logoUrl = new URL("../public/Logo.jpg", import.meta.url);
const profileImage = new URL("../public/profile.jpeg", import.meta.url);

const Navbar = ({ companyname = "Foodie", logo = logoUrl }) => {
    return (
        <div className="w-full h-16 bg-[#fdf6f6] border-b border-gray-200 flex items-center justify-between px-10">
            {/* Logo & Company Name */}
            <div className="flex items-center gap-2">
                 <img
                    src={logo}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover"
                />
                <p className="text-lg font-semibold">{companyname}</p>
            </div>

            {/* Search Bar */}
            <div className="flex items-center gap-8">
                <div className="flex items-center bg-[#f0e7e7] text-[#7b2d2d] px-3 py-1 rounded-full gap-2">
                    <FaSearch />
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent outline-none w-24"
                    />
                </div>

                {/* Profile Icon */}
                <div className="w-8 h-8 bg-[#f0e7e7] flex items-center justify-center rounded-full">
                    <FaUser className="text-[#5c2c2c]" />
                </div>

                {/* Profile Image */}
                <img
                    src={profileImage}
                    alt="Profile"
                    className="w-9 h-9 rounded-full object-cover"
                />
            </div>
        </div>
    );
};

export default Navbar;
