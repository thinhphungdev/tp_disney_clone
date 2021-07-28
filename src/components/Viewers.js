import React from 'react';

import disneyViewers from '../assets/images/viewers-disney.png';
import pixarViewers from '../assets/images/viewers-pixar.png';
import marvelViewers from '../assets/images/viewers-marvel.png';
import starwarsViewers from '../assets/images/viewers-starwars.png';
import national from '../assets/images/viewers-national.png';

import disneyVid from "../assets/videos/disney.mp4";
import pixarVid from "../assets/videos/pixar.mp4";
import nationalVid from "../assets/videos/national-geographic.mp4";
import marvelVid from "../assets/videos/marvel.mp4";
import starWarsVid from "../assets/videos/star-wars.mp4";

function Viewers() {
    return (
        <div className="viewers m-top-30">
            <div className="viewers__item">
                <img alt="disney viewers" src={disneyViewers} />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source type="video/mp4" src={disneyVid} />
                </video>
            </div>

            <div className="viewers__item">
                <img alt="pixar viewers" src={pixarViewers} />

                <video autoPlay={true} loop={true} playsInline={true}>
                    <source type="video/mp4" src={pixarVid} />
                </video>
            </div>
            
            <div className="viewers__item">
                <img alt="marvel viewers" src={marvelViewers} />

                <video autoPlay={true} loop={true} playsInline={true}>
                    <source type="video/mp4" src={marvelVid} />
                </video>
            </div>
            
            <div className="viewers__item">
                <img alt="starwars viewers" src={starwarsViewers} />

                <video autoPlay={true} loop={true} playsInline={true}>
                    <source type="video/mp4" src={starWarsVid} />
                </video>
            </div>
            
            <div className="viewers__item">
                <img alt="national viewers" src={national} />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source type="video/mp4" src={nationalVid} />
                </video>
            </div>
        </div>
    )
}

export default Viewers
