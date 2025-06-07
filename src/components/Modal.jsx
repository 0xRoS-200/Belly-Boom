import { useEffect } from "react";
import { X } from "lucide-react";

const Modal = ({ open, onClose, children }) => {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <div
            id="modalcontainer"
            className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/70" : "invisible"
                } z-20`}
        >
            <div className="relative w-[700px] h-[450px] border bg-white rounded-xl shadow-md p-6 top-10">
                {/* Close button */}
                <button
                    className="absolute top-4 right-4 text-white p-1 bg-red-500 rounded-[50%] hover:text-black hover:bg-red-300"
                    onClick={onClose}
                >
                    <X size={20} />
                </button>

                {children}
            </div>
        </div>
    );
};

export default Modal;
