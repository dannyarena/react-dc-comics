function Header () {
    return (
        <header>
            <div className="container">
                {/* {logo} */}
                <div className="logo">
                    <img src="/img/dc-logo.png" alt="DC logo" />
                </div>
            </div>

            {/* Menu di navigazione */}
            <nav>
                <ul>
                    <li>CHARACTERS</li>
                    <li>COMICS</li>
                    <li>MOVIES</li>
                    <li>TV</li>
                    <li>GAMES</li>
                    <li>COLLECTIBLES</li>
                    <li>VIDEOS</li>
                    <li>FANS</li>
                    <li>NEWS</li>
                    <li>SHOP</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;