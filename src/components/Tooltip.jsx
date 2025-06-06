// components/Tooltip.jsx
const Tooltip = ({ text, children }) => {
  return (
    <div className="relative group cursor-pointer w-fit">
      {children}
      <div className="absolute -translate-x-1/2 -top-5 bg-white text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
