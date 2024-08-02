import React, { useEffect, useState } from 'react'
import axios from 'redaxios';
import { allMovies } from "../utils/APIroutes";
import { useCookies } from 'react-cookie';
import MovieCard from '../components/Movie/MovieCard';
import Loader from '../components/Loader/Loader';

function Home() {

    const [movies, setMovies] = useState(undefined);
    const [cookie, setCookie] = useCookies(['moviesList']);
    const[isLoad, setIsLoad] = useState(false);

    useEffect(()=> {
        axios.get(allMovies).then((res) => {
            const dbMovies = res.data.list;
            localStorage.setItem('all-movies', JSON.stringify(dbMovies));
            setCookie('moviesList', dbMovies);
            setMovies(dbMovies);
            setIsLoad(true);
        })
    }, [])

  return (
    <>
        {
            !isLoad ? <Loader /> :
            <div id='home'>
                <header>
                    <div className="logo">
                        <h1>MoviesWatch</h1>
                    </div>
                    <ul className="menu-container">
                        <li className="menu-item">
                            <a href="/" className="menu-link">Home</a>
                        </li>
                        <li className="menu-item">
                            <a href="" className="menu-link">TV Shows</a>
                        </li>
                        <li className="menu-item">
                            <a href="" className="menu-link">Movies</a>
                        </li>
                        <li className="menu-item">
                            <a href="" className="menu-link">New & Popular</a>
                        </li>
                        <li className="menu-item">
                            <a href="" className="menu-link">My List</a>
                        </li>
                    </ul>
                </header>

                <div className="movie-category-container">

                </div>

                <div className="movies-container">
                    <h1>New Movies</h1>
                    <div className="movie-grid-container">
                        {
                            movies && movies.map((movie, index)=> {
                                return <MovieCard movie={movie} key={index + 1} />
                            })
                        }
                    </div>
                    
                </div>
                    
                {
                    console.log(movies)
                }
            </div>
        }
    </>
  )
}

export default Home