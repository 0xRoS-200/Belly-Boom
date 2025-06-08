import { ShoppingCart } from "lucide-react";

const Navbar = ({ companyname, logo, profileImage }) => {
    return (
        <div className="w-full h-16 border-b border-gray-200 flex items-center justify-between px-10 shadow-orange-100 shadow-sm">
            {/* Logo & Company Name */}
            <div className="flex items-center gap-2">
                <img
                    src={logo}
                    alt="Company Logo"
                    className="w-10 h-10 rounded-full object-cover"
                />
                <p className="text-lg font-semibold text-orange-500 cursor-pointer">{companyname}</p>

                {/* Navigation Links */}
                <div className="ml-4">
                    <ul className="list-none flex items-center gap-4 text-gray-700 font-medium">
                        <li className="cursor-pointer px-3 py-1 hover:text-[#ff5a5f] transition">Home</li>
                        <li className="cursor-pointer px-3 py-1 hover:text-[#ff5a5f] transition">Orders</li>
                        <li className="cursor-pointer px-3 py-1 hover:text-[#ff5a5f] transition">Checkout</li>
                    </ul>
                </div>
            </div>

            {/*Profile Section */}
            <div className="flex items-center gap-8">
                {/* Cart Icon */}
                <div className="w-8 h-8 bg-[#ffffff] flex items-center justify-center rounded-full cursor-pointer hover:bg-[#fbe3c2] transition">
                    <ShoppingCart />
                </div>

                {/* Profile Image */}
                <img
                    src={profileImage}
                    alt="User Profile"
                    className="w-9 h-9 rounded-full object-cover border-zinc-500 border hover:scale-110 cursor-pointer hover:shadow-amber-300 shadow-md"
                />
            </div>
        </div>
    );
};

export default Navbar;
