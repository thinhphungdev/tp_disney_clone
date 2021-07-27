import React from 'react';

function Header() {
    return (
        <nav className="header">
           
            {/* LOGO */}
            <img 
            alt = "Disney Logo" 
            className="header__logo"
            src="/images/logo.svg"
            />

            <div className="header__menu">
                <a className="header__menu--item">
                    <img src="/images/home-icon.svg" alt="Home icon" />
                    <span>home</span>
                </a>

                <a className="header__menu--item">
                    <img src="/images/search-icon.svg" alt="Home icon" />
                    <span>Search</span>
                </a>

                <a className="header__menu--item">
                    <img src="/images/watchlist-icon.svg" alt="Home icon" />
                    <span>watchlist</span>
                </a>

                <a className="header__menu--item">
                    <img src="/images/original-icon.svg" alt="Home icon" />
                    <span>original</span>
                </a>

                <a className="header__menu--item">
                    <img src="/images/movie-icon.svg" alt="Home icon" />
                    <span>movies</span>
                </a>

                <a className="header__menu--item">
                    <img src="/images/series-icon.svg" alt="Home icon" />
                    <span>series</span>
                </a>
            </div>

            {/* user logo */}
            <img 
            className="header__user-image" 
            src="/images/myself.jpg"
            alt="User Logo"    
            />
        </nav>
    )
}

export default Header
