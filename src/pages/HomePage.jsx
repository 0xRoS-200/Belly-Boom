import Navbar from "../components/Navbar";
import Searchbtn from "../components/SearchButton";
import RestaurantCard from "../components/RestaurantCard";
import resData from "../data/mockAPIData";
const c_logo = new URL("../public/Logo.jpg", import.meta.url)
const profile = new URL("../public/profile.jpeg", import.meta.url)

const HomePage = () => {
    return (
        <div className="landing-page">
            <Navbar logo={c_logo} companyname={"BellyBoom"} profileImage={profile} />
            <Searchbtn />
            <div className="mt-8 ml-10 text-[32px] font-medium">Food Delivery Restaurants in Kolkata</div>

            <div id="resList" className="px-40 py-6 flex gap-10 flex-wrap">  {/*Content Driven UI*/}
                {resData.map((item) => {
                    const restaurant = {
                        resName: item.info.name,
                        resImg: item.info.image?.url,
                        resRating: item.info.rating?.rating_text,
                        resCusine: item.info.cuisine.map(c => c.name).join(', '),
                        resCharges: item.info.cft?.text,
                        resDelivery: item.order?.deliveryTime,
                        resId : item.info.resId
                    };

                    return <RestaurantCard key={restaurant.resId} resData={restaurant} />;
                })}
            </div>
        </div>
    );
};


export default HomePage;
