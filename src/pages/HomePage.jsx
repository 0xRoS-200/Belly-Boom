import { useState } from "react";
import Navbar from "../components/Navbar";
import Searchbtn from "../components/SearchButton";
import RestaurantCard from "../components/RestaurantCard";
import FilterButton from "../components/FilterButton";
import resData from "../data/mockAPIData";

const c_logo = new URL("../public/Logo.jpg", import.meta.url);
const profile = new URL("../public/profile.jpeg", import.meta.url);

const HomePage = () => {

    const [searchText, setSearchText] = useState("");
    const searchFilteredRestaurants = resData.filter((item) => {
        const name = item.info.name.toLowerCase();
        const cuisines = item.info.cuisine.map(c => c.name.toLowerCase()).join(', ');
        const search = searchText.toLowerCase();

        return name.includes(search) || cuisines.includes(search);
    });


    return (
        <div id="landing-page" className="min-h-lvh">
            <Navbar logo={c_logo} companyname={"BellyBoom"} profileImage={profile} />

            <div id="searchcontainer" className="flex gap-3 items-center">
                <Searchbtn searchText={searchText} setSearchText={setSearchText} />
                <FilterButton />
            </div>

            <div className="mt-8 ml-10 text-[32px] font-medium">
                Food Delivery Restaurants in Kolkata
            </div>

            <div id="resList" className="px-40 py-6 flex gap-10 flex-wrap">
                {searchFilteredRestaurants.map((item) => {
                    const restaurantList = {
                        resName: item.info.name,
                        resImg: item.info.image?.url,
                        resRating: item.info.rating?.rating_text,
                        resCusine: item.info.cuisine.map(c => c.name).join(', '),
                        resCharges: item.info.cft?.text,
                        resDelivery: item.order?.deliveryTime,
                        resId: item.info.resId
                    };

                    return <RestaurantCard key={restaurantList.resId} resData={restaurantList} />;
                })}
            </div>

        </div>
    );
};

export default HomePage;
