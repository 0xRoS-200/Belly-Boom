import Navbar from "../components/Navbar";
const c_logo = new URL("../public/Logo.jpg", import.meta.url)

const LandingPage = () => {
    return (
        <div className="landing-page  bg-[#fcf7f7]">
            <Navbar logo={c_logo} companyname={"BellyBoom"}/>
        </div>
    );
};

export default LandingPage;
