import { ListFilter } from "lucide-react";
import { useState } from "react";
import Modal from "./Modal";

const FilterButton = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div
                id="filterBtn"
                className="flex gap-1 mt-10 p-1.5 shadow-sm/30 rounded-xl items-center text-gray-600 text-sm cursor-pointer hover:bg-amber-50 hover:text-black hover:scale-105"
                onClick={() => setOpen(true)}
            >
                <div><ListFilter size={16} /></div>
                <p>Filters</p>
            </div>

            <Modal open={open} onClose={() => setOpen(false)}>
                <div>
                    <h2 className="text-lg font-semibold mb-4">Filter Options</h2>
                    <p className="text-sm text-gray-700">Add your filters here.</p>
                </div>
            </Modal>
        </>
    );
};

export default FilterButton;
