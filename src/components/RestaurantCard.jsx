import { Star } from "lucide-react";
import Tooltip from "./Tooltip";

const RestaurantCard = ({ resData }) => {
  const { resName, resImg, resRating, resCusine, resCharges, resDelivery } = resData;

  return (
    <div id="list" className="w-[350px] h-[360px] rounded-xl hover:shadow-sm/30 p-2">
      <img src={resImg} alt={resName} className="rounded-xl h-[250px] object-cover no-scrollbar" />

      <div className="mt-2 px-2 flex justify-between">
        <Tooltip text={resName}>
          <p className="text-lg font-semibold truncate w-[160px]">{resName}</p>
        </Tooltip>

        <span className="flex text-[12px] gap-1 items-center bg-green-400 rounded-xl p-1 text-white text-md">
          {resRating}
          <Star size={12} color="white" fill="#ffffff"/>
        </span>
      </div>

      <div className="mt-2 px-2 flex justify-between">
        <Tooltip text={resCusine}>
          <p className="text-[14px] font-medium text-zinc-500 truncate w-[160px]">
            {resCusine}
          </p>
        </Tooltip>
        <p className="text-[14px] font-medium text-zinc-500">{resCharges}</p>
      </div>

      <div className="flex justify-end px-2 py-1">
        <p className="text-sm font-medium">{resDelivery}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
