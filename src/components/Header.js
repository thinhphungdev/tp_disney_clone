import React from 'react';
import DisneyLogo from '../assets/images/logo.svg';

import HomeIcon from '../assets/images/home-icon.svg';
import SearchIcon from "../assets/images/search-icon.svg";
import WatchList from "../assets/images/watchlist-icon.svg";
import Original from "../assets/images/original-icon.svg";
import MovieIcon from "../assets/images/movie-icon.svg";
import SeriesIcon from "../assets/images/series-icon.svg";
import userAvartar from "../assets/images/myself.jpg";

function Header() {
    return (
        <nav className="header">
           
            {/* LOGO */}
            <img 
            alt = "Disney Logo" 
            className="header__logo"
            src={DisneyLogo}
            />

            <div className="header__menu">
                <a className="header__menu--item">
                    <img src={HomeIcon} alt="Home icon" />
                    <span>home</span>
                </a>

                <a className="header__menu--item">
                    <img src={SearchIcon} alt="Home icon" />
                    <span>Search</span>
                </a>

                <a className="header__menu--item">
                    <img src={WatchList} alt="Home icon" />
                    <span>watchlist</span>
                </a>

                <a className="header__menu--item">
                    <img src={Original} alt="Home icon" />
                    <span>original</span>
                </a>

                <a className="header__menu--item">
                    <img src={MovieIcon} alt="Home icon" />
                    <span>movies</span>
                </a>

                <a className="header__menu--item">
                    <img src={SeriesIcon} alt="Home icon" />
                    <span>series</span>
                </a>
            </div>

            {/* user logo */}
            <img 
            className="header__user-image" 
            src={userAvartar}
            alt="User Logo"    
            />
        </nav>
    )
}

export default Header
