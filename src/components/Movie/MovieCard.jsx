import "./movie.css"
import { Link } from "react-router-dom"

function MovieCard({movie}) {
  
  return (
    <Link className="movie-link" to={`movie/${movie._id}`}>
      <div className='movie-container'>
        <div className="avatar">
          <img src={movie.avatar} alt="" />
        </div>
        <div className="movie-content">
          <h3> {movie.name} </h3>
          <p className="movie-category">
            {movie.categories.toString()}
          </p>
          <p className="movie-rating">
            5.0
          </p>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard