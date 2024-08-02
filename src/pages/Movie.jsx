import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import axios from 'redaxios';
import { allMovies } from '../utils/APIroutes';


function Movie() {
  const {id} = useParams();
  const [cookie, setCookie] = useCookies(['moviesList']);
  const [movie, setMovie] = useState(undefined);
  useEffect(()=> {
    if(cookie.moviesList) {
        const cookieMovie = cookie.moviesList.find((movie)=> movie._id == id);
        console.log(cookieMovie)
        if(!movie) {
            setMovie(cookieMovie);
        }
    } else {
        axios.get(allMovies).then((data)=> {
            const dbMovies = res.data.list;
            const dbMovie = dbMovies.find((movie)=> movie._id == id);
            console.log(dbMovie)
            console.log("Db movie")
            if(!movie) {
                setMovie(dbMovie);
            }
        })
    }
  },[])
  return (
      <div>
        {
            movie && <iframe width="640" height="360" frameborder="0" src={movie.frameLink} allowfullscreen ></iframe> 
        }
      </div>
      
  )
}

export default Movie