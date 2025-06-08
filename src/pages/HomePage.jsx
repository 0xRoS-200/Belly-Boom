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
    const [sortOption, setSortOption] = useState("Popularity");

    // 1. Filter restaurants by search text
    const searchFilteredRestaurants = resData.filter((item) => {
        const name = item.info.name.toLowerCase();
        const cuisines = item.info.cuisine.map(c => c.name.toLowerCase()).join(', ');
        const search = searchText.toLowerCase();
        return name.includes(search) || cuisines.includes(search);
    });

    // 2. Sort based on selected filter
    const sortedRestaurants = [...searchFilteredRestaurants].sort((a, b) => {
        const getRating = (item) => parseFloat(item.info.rating?.rating_text || 0);
        const getCost = (item) => parseFloat(item.info.cft?.text?.replace(/[^\d]/g, "") || 0);

        if (sortOption === "Rating: High to Low") {
            return getRating(b) - getRating(a);
        } else if (sortOption === "Cost: Low to High") {
            return getCost(a) - getCost(b);
        } else if (sortOption === "Cost: High to Low") {
            return getCost(b) - getCost(a);
        }
        return 0; // Popularity (default) → no sorting
    });

    return (
        <div id="landing-page" className="min-h-lvh">
            <Navbar logo={c_logo} companyname={"BellyBoom"} profileImage={profile} />

            <div id="searchcontainer" className="flex gap-3 items-center">
                <Searchbtn searchText={searchText} setSearchText={setSearchText} />
                <FilterButton sortOption={sortOption} setSortOption={setSortOption} />
            </div>

            <div className="mt-8 ml-10 text-[32px] font-medium">
                Food Delivery Restaurants in Kolkata
            </div>

            <div id="resList" className="px-40 py-6 flex gap-10 flex-wrap">
                {sortedRestaurants.map((item) => {
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
