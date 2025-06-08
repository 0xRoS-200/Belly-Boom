import { ListFilter } from "lucide-react";
import { useState } from "react";
import Modal from "./Modal";

const FilterButton = ({ sortOption, setSortOption }) => {
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("Sort by");
    const selectedSort = sortOption;
    const tabs = ["Sort by", "Cuisines", "Rating", "Cost Per Person"];

    const renderRightPanel = () => {
        switch (activeTab) {
            case "Sort by":
                return (
                    <ul className="flex flex-col gap-5 text-md text-gray-700">
                        {["Popularity", "Rating: High to Low", "Cost: Low to High", "Cost: High to Low"].map(option => (
                            <li key={option} className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="sort"
                                    value={option}
                                    checked={selectedSort === option}
                                    onChange={(e) => setSortOption(e.target.value)}
                                    className="form-radio accent-[#f51414] w-5 h-5 cursor-pointer"
                                />
                                <label>{option}</label>
                            </li>
                        ))}
                    </ul>
                );
            case "Cuisines":
                return <p>Checkbox list for cuisines goes here.</p>;
            case "Rating":
                return <p>Rating filters or sliders go here.</p>;
            case "Cost Per Person":
                return <p>Cost range options go here.</p>;
            default:
                return null;
        }
    };

    return (
        <>
            <div
                id="filterBtn"
                className="flex gap-1 mt-10 p-1.5 shadow-sm/30 rounded-md items-center text-gray-600 text-sm cursor-pointer transition hover:bg-amber-50 hover:text-black hover:scale-105"
                onClick={() => setOpen(true)}
            >
                <div><ListFilter size={16} /></div>
                <p>Filters</p>
            </div>

            <Modal open={open} onClose={() => setOpen(false)}>
                <div className="flex flex-col h-full">
                    <h2 className="text-lg font-semibold border-b-2 border-zinc-300 p-4">Filter Options</h2>

                    <div id="filtercontainerlist" className="flex flex-1 border-b-2 border-zinc-300">
                        {/* Sidebar */}
                        <div id="filters" className="w-3/10 bg-gray-100">
                            <ul className="flex flex-col">
                                {tabs.map((tab) => (
                                    <li
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-5 cursor-pointer border-l-4 ${activeTab === tab
                                            ? "border-red-500 text-red-500 bg-white font-semibold"
                                            : "border-transparent text-gray-700 hover:bg-gray-200"
                                            }`}
                                    >
                                        {tab}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Panel */}
                        <div id="filterattribs" className="w-7/10 p-6">
                            {renderRightPanel()}
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default FilterButton;
