import { ShoppingCart, Search } from "lucide-react";

const Navbar = ({ companyname, logo, profileImage }) => {
    return (
        <div className="w-full h-16 border-b border-gray-200 flex items-center justify-between px-10 bg-orange-50/60 shadow-orange-100 shadow-sm">
            {/* Logo & Company Name */}
            <div className="flex items-center gap-2">
                <img
                    src={logo}
                    alt="Company Logo"
                    className="w-10 h-10 rounded-full object-cover"
                />
                <p className="text-lg font-semibold">{companyname}</p>

                {/* Navigation Links */}
                <div className="ml-4">
                    <ul className="list-none flex items-center gap-4 text-gray-700 font-medium">
                        <li className="cursor-pointer px-3 py-1 hover:text-[#ff5a5f] transition">Home</li>
                        <li className="cursor-pointer px-3 py-1 hover:text-[#ff5a5f] transition">Orders</li>
                        <li className="cursor-pointer px-3 py-1 hover:text-[#ff5a5f] transition">Checkout</li>
                    </ul>
                </div>
            </div>

            {/* Search & Profile Section */}
            <div className="flex items-center gap-8">
                {/* Search Bar */}
                <div className="flex items-center bg-[#ffffffb9] text-[#ffa600] px-3 py-1 rounded-full gap-2 shadow-sm">
                    <Search />
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent outline-none transition-all duration-200 w-24 focus:w-48"
                    />
                </div>

                {/* Cart Icon */}
                <div className="w-8 h-8 bg-[#ffffff] flex items-center justify-center rounded-full hover:bg-[#e2d9c2] transition">
                    <ShoppingCart />
                </div>

                {/* Profile Image */}
                <img
                    src={profileImage}
                    alt="User Profile"
                    className="w-9 h-9 rounded-full object-cover border-zinc-500 border"
                />
            </div>
        </div>
    );
};

export default Navbar;
