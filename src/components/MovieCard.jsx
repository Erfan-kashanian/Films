import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  if (!movie) return null;

  return (
    <article className="movie-card">
      <Link
        to={`/movie/${movie.id}`}
        className="movie-poster"
      >
        <img
          src={movie.poster}
          alt={movie.title}
        />

        <div className="movie-overlay">
          <span className="play-button">
            ▶
          </span>
        </div>

        <span className="movie-type">
          {movie.type}
        </span>
      </Link>

      <div className="movie-info">
        <h3>{movie.title}</h3>

        <div className="movie-meta">
          <span>{movie.year}</span>

          <span className="dot">•</span>

          <span>{movie.genre[0]}</span>
        </div>

        <Link
          to={`/movie/${movie.id}`}
          className="detail-link"
        >
          جزئیات
          <span>→</span>
        </Link>
      </div>
    </article>
  );
}

export default MovieCard;