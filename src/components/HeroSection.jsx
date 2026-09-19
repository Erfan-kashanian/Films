import { Link } from "react-router-dom";

function HeroSection({ movie }) {
  if (!movie) {
    return null;
  }

  return (
    <section className="hero">

      <div
        className="hero-background"
        style={{
          backgroundImage: `url(${movie.poster})`,
        }}
      />

      <div className="hero-overlay" />

      <div className="hero-content">

        <span className="hero-label">
          FEATURED MOVIE
        </span>

        <h1>
          {movie.title}
        </h1>

        <div className="hero-meta">

          <span>
            {movie.year}
          </span>

          <span>•</span>

          <span>
            {movie.type}
          </span>

          <span>•</span>

          <span>
            {movie.genre[0]}
          </span>

        </div>

        <p>
          {movie.description}
        </p>

        <Link
          to={`/movie/${movie.id}`}
          className="hero-button"
        >
          View Details
          <span>→</span>
        </Link>

      </div>

    </section>
  );
}

export default HeroSection;