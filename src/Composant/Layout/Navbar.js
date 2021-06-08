const Navbar = ({ titre,icon }) => {
    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={icon} />
                {titre}
            </h1>
        </nav>
    );
}

export default Navbar;