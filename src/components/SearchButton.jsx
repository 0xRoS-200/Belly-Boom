import { Search, LocateFixed, ChevronDown } from "lucide-react";
import { useState } from "react";

const Searchbtn = () => {
  return (
    <div id="searchbox" className="flex ml-10 mt-10">
      <div className="flex items-center w-[600px] rounded-lg shadow-sm/30 px-4 py-2 bg-white">
        {/* Location */}
        <div className="flex items-center space-x-2">
          <LocateFixed className="text-pink-500" size={18} />
          <span className="text-gray-700 text-sm">Kolkata</span>
          <ChevronDown size={16} className="text-gray-500" />
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-300 mx-4"></div>

        {/* Search Input */}
        <div className="flex items-center flex-grow">
          <Search className="text-gray-400 mr-2" size={18} />
          <input
            type="text"
            placeholder="Search for restaurant, cuisine or a dish"
            className="w-full outline-none text-sm placeholder-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default Searchbtn;
