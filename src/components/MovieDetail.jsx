import { Link } from "react-router-dom";

function MovieDetail({ movie }) {
  if (!movie) {
    return null;
  }

  return (
    <article className="movie-detail">

      <div className="detail-poster">
        <img
          src={movie.poster}
          alt={movie.title}
        />
      </div>

      <div className="detail-content">

        <span className="detail-type">
          {movie.type}
        </span>

        <h1>
          {movie.title}
        </h1>

        <div className="detail-meta">

          <span>
            {movie.year}
          </span>

          <span>•</span>

          <span>
            {movie.country.join(", ")}
          </span>

        </div>

        <div className="genre-list">
          {movie.genre.map((genre) => (
            <span key={genre}>
              {genre}
            </span>
          ))}
        </div>

        <p className="detail-description">
          {movie.description}
        </p>

        <div className="detail-actions">

          <button
            type="button"
            className="watch-button"
          >
            ▶ Watch Now
          </button>

          <button
            type="button"
            className="download-button"
          >
            ↓ Download
          </button>

        </div>

        <Link
          to="/"
          className="back-link"
        >
          ← Back to Home
        </Link>

      </div>

    </article>
  );
}

export default MovieDetail;