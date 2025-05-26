const logo = new URL("../public/Logo.jpg", import.meta.url)

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="BellyBoom Logo" className="logo" />
            <h1 className="motto">Explode Your Hunger, Feast with Flavor!</h1>
        </header>
    )
}

export default Header;
