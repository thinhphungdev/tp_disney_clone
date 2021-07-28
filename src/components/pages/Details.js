import React, { useEffect, useState } from 'react';

import PlayIcon from '../../assets/images/play-icon-black.png';
import TrailerIcon from '../../assets/images/play-icon-white.png';
import groupIcon from '../../assets/images/group-icon.png';

import { useParams } from 'react-router';
import db from '../../firebase';

function Details() {
    const params = useParams();
    const paramsId = params.id;

    const [movieDetail, setMovieDetail] = useState({});

    useEffect(() => {
        db.collection("movies").doc(paramsId)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    setMovieDetail(doc.data())
                }
            })
    }, [paramsId])

    return (
        <div className="details">
            {
                movieDetail && <>
                    <div className="details__background">
                        <img
                            src={movieDetail.backgroundImg}
                            alt="movies details"
                        />
                    </div>

                    <div className="details__title">
                        <img
                            alt="title logo"
                            src={movieDetail.titleImg}
                        />
                    </div>

                    <div className="details__controls">
                        <button className="details__controls--play-btn">
                            <img src={PlayIcon} alt="play icon" />
                            <span>Play</span>
                        </button>

                        <button className="details__controls--trailer-btn">
                            <img src={TrailerIcon} alt="trailer icon" />
                            <span>Trailer</span>
                        </button>

                        <button className="details__controls--add-btn">
                            <span>+</span>
                        </button>

                        <button className="details__controls--group-btn">
                            <img
                                alt="group icon"
                                src={groupIcon}
                            />
                        </button>
                    </div>

                    <div className="details__subtitle">
                        {movieDetail.subTitle}
                    </div>

                    <div className="details__description">
                        {movieDetail.description}
                    </div>
                </>
            }

        </div>
    )
}

export default Details
