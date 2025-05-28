const logo = new URL("../public/Logo.jpg", import.meta.url)

const LandingPage = () => {
    console.log(logo)
    return (
        <div className="landing-page">
        </div>
    );
};

export default LandingPage;
