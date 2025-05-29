import Navbar from "../components/Navbar";
const c_logo = new URL("../public/Logo.jpg", import.meta.url)

const HomePage = () => {
    return (
        <div className="landing-page">
            <Navbar logo={c_logo} companyname={"BellyBoom"}/>
        </div>
    );
};

export default HomePage;
