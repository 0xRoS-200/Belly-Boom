import Navbar from "../components/Navbar";
import Searchbtn from "../components/SearchButton";
const c_logo = new URL("../public/Logo.jpg", import.meta.url)
const profile = new URL("../public/profile.jpeg", import.meta.url)

const HomePage = () => {
    return (
        <div className="landing-page">
            <Navbar logo={c_logo} companyname={"BellyBoom"} profileImage={profile} />
            <Searchbtn />
        </div>
    );
};

export default HomePage;
