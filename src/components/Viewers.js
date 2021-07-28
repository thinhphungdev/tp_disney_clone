import React from 'react';

import disneyViewers from '../assets/images/viewers-disney.png';
import pixarViewers from '../assets/images/viewers-pixar.png';
import marvelViewers from '../assets/images/viewers-marvel.png';
import starwarsViewers from '../assets/images/viewers-starwars.png';
import national from '../assets/images/viewers-national.png';

function Viewers() {
    return (
        <div className="viewers m-top-30">
            <div className="viewers__item">
                <img alt="disney viewers" src={disneyViewers} />
            </div>

            <div className="viewers__item">
                <img alt="pixar viewers" src={pixarViewers} />
            </div>
            
            <div className="viewers__item">
                <img alt="marvel viewers" src={marvelViewers} />
            </div>
            
            <div className="viewers__item">
                <img alt="starwars viewers" src={starwarsViewers} />
            </div>
            
            <div className="viewers__item">
                <img alt="national viewers" src={national} />
            </div>
        </div>
    )
}

export default Viewers
