import React, {useEffect} from 'react';
import ImageSlider from '../ImgSlider.js';
import Viewers from '../Viewers.js';
import MoviesList from '../MoviesList.js';
import db from '../../firebase';
import { useDispatch } from 'react-redux';
import {setMovies} from '../../store/movie/movieSlice.js';

function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        db.collection("movies").onSnapshot((snapShot) => {

            let tempMovies = snapShot.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            })

            dispatch(setMovies(tempMovies))
        })
    }, [dispatch])

    return (
        <main className="home">
            <ImageSlider />
            <Viewers />
            <MoviesList />
        </main>
    )
}

export default Home
